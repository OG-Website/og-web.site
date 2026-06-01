$ErrorActionPreference = "Stop"

$env:NO_UPDATE_NOTIFIER = "1"

$repoRoot = Split-Path -Parent $PSCommandPath
$logRoot = Join-Path $repoRoot ".tmp\\logs"
$vercel = Join-Path $repoRoot "node_modules\\.bin\\vercel.cmd"
$globalConfig = Join-Path $repoRoot ".vercel-global"
$logFile = Join-Path $logRoot "vercel-login-live.txt"

New-Item -ItemType Directory -Force -Path $logRoot, $globalConfig | Out-Null

& $vercel login --global-config $globalConfig *>&1 |
  Tee-Object -FilePath $logFile
