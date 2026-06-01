$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSCommandPath
$artifactRoot = Join-Path $repoRoot ".tmp\\review-local"
$profile = Join-Path $artifactRoot "edge-profile"
$screenshots = Join-Path $artifactRoot "screenshots"

New-Item -ItemType Directory -Force -Path $artifactRoot, $screenshots | Out-Null

$job = Start-Job -ScriptBlock {
  Set-Location $using:repoRoot
  & "C:\Program Files\nodejs\npm.cmd" run start -- --hostname 127.0.0.1 --port 3100
}

try {
  $ready = $false

  for ($i = 0; $i -lt 30; $i++) {
    Start-Sleep -Seconds 2

    try {
      $status = (Invoke-WebRequest -Uri "http://127.0.0.1:3100" -UseBasicParsing -TimeoutSec 5).StatusCode
      if ($status -eq 200) {
        $ready = $true
        break
      }
    } catch {
    }
  }

  if (-not $ready) {
    throw "Local server did not start in time."
  }

  $edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

  & $edge --headless --disable-gpu --hide-scrollbars --no-first-run --user-data-dir=$profile --window-size=1600,1400 --screenshot=(Join-Path $screenshots "home.png") "http://127.0.0.1:3100/"
  & $edge --headless --disable-gpu --hide-scrollbars --no-first-run --user-data-dir=$profile --window-size=1600,1400 --screenshot=(Join-Path $screenshots "services.png") "http://127.0.0.1:3100/services"
  & $edge --headless --disable-gpu --hide-scrollbars --no-first-run --user-data-dir=$profile --window-size=1600,1400 --screenshot=(Join-Path $screenshots "portfolio.png") "http://127.0.0.1:3100/portfolio"
  & $edge --headless --disable-gpu --hide-scrollbars --no-first-run --user-data-dir=$profile --window-size=1600,1400 --screenshot=(Join-Path $screenshots "hosting.png") "http://127.0.0.1:3100/hosting"
  & $edge --headless --disable-gpu --hide-scrollbars --no-first-run --user-data-dir=$profile --window-size=1600,1400 --screenshot=(Join-Path $screenshots "contact.png") "http://127.0.0.1:3100/contact"

  Write-Output "screenshots complete"
} finally {
  Stop-Job $job -ErrorAction SilentlyContinue | Out-Null
  Remove-Job $job -ErrorAction SilentlyContinue | Out-Null
}
