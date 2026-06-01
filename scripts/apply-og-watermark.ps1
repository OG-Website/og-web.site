param(
  [Parameter(Mandatory = $true)]
  [string[]]$DocumentPaths,

  [Parameter(Mandatory = $true)]
  [string]$LogoPath
)

$ErrorActionPreference = "Stop"

$word = $null
try {
  $word = New-Object -ComObject Word.Application
  $word.Visible = $false
  $word.DisplayAlerts = 0

  foreach ($documentPath in $DocumentPaths) {
    $resolvedDocument = (Resolve-Path -LiteralPath $documentPath).Path
    $resolvedLogo = (Resolve-Path -LiteralPath $LogoPath).Path
    $doc = $word.Documents.Open($resolvedDocument)
    try {
      foreach ($section in $doc.Sections) {
        foreach ($headerIndex in @(1, 2, 3)) {
          $header = $section.Headers.Item($headerIndex)

          for ($i = $header.Shapes.Count; $i -ge 1; $i--) {
            $shape = $header.Shapes.Item($i)
            if ($shape.Name -like "OGLogoWatermark*") {
              $shape.Delete()
            }
          }

          $pageWidth = $section.PageSetup.PageWidth
          $pageHeight = $section.PageSetup.PageHeight
          $watermarkWidth = 390
          $watermarkHeight = 390
          $left = ($pageWidth - $watermarkWidth) / 2
          $top = ($pageHeight - $watermarkHeight) / 2

          $shape = $header.Shapes.AddPicture($resolvedLogo, $false, $true, $left, $top, $watermarkWidth, $watermarkHeight)
          $shape.Name = "OGLogoWatermark"
          $shape.LockAspectRatio = $true
          $shape.WrapFormat.Type = 5
          $shape.RelativeHorizontalPosition = 1
          $shape.RelativeVerticalPosition = 1
          $shape.Left = $left
          $shape.Top = $top
          $shape.ZOrder(5)
          $shape.PictureFormat.ColorType = 4
          $shape.PictureFormat.Brightness = 0.85
          $shape.PictureFormat.Contrast = 0.15
        }
      }

      $doc.Save()
      Write-Output $resolvedDocument
    }
    finally {
      $doc.Close($false)
    }
  }
}
finally {
  if ($word -ne $null) {
    $word.Quit()
  }
}
