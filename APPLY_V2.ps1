param(
  [Parameter(Mandatory = $true)]
  [string]$RepoPath,
  [switch]$SkipVerify
)

$ErrorActionPreference = "Stop"
$PatchRoot = $PSScriptRoot
$RepoPath = (Resolve-Path $RepoPath).Path

$skipNames = @("README_APPLY.md", "APPLY_V2.ps1", "apply-v2.sh", "PATCH_MANIFEST.json")
$files = Get-ChildItem -Path $PatchRoot -Recurse -File | Where-Object { $skipNames -notcontains $_.Name }

foreach ($file in $files) {
  $relative = $file.FullName.Substring($PatchRoot.Length).TrimStart('\', '/')
  $destination = Join-Path $RepoPath $relative
  $destinationDir = Split-Path $destination -Parent
  if (-not (Test-Path $destinationDir)) {
    New-Item -ItemType Directory -Path $destinationDir -Force | Out-Null
  }
  Copy-Item $file.FullName $destination -Force
  Write-Host "Applied $relative"
}

if (-not $SkipVerify) {
  Push-Location $RepoPath
  try {
    npm run test:real-space
    npm run test:experience
    npm run validate:source
    npm run typecheck
    npm run build
  }
  finally {
    Pop-Location
  }
}
