# =============================================================
# Deploy DRIFT website to Cloudflare Pages
# =============================================================
# Prereqs: Wrangler installed and logged in (`npx wrangler login`)
# Run:     Right-click this file -> Run with PowerShell
#          OR open PowerShell here and run: .\deploy-to-cloudflare.ps1
# =============================================================

param(
    [switch]$ReExtract  # Pass -ReExtract to wipe _site and re-extract from the zip.
)

$ErrorActionPreference = "Stop"

# ---- CONFIG -------------------------------------------------
$ProjectName = "drift-8sz"       # Cloudflare Pages project name (must match the live one)
$ZipName     = "Drift (1).zip"
$ExtractDir  = "_site"           # Where the zip will be extracted
# -------------------------------------------------------------

$Root   = $PSScriptRoot
$ZipPath = Join-Path $Root $ZipName
$OutDir  = Join-Path $Root $ExtractDir

Write-Host ""
Write-Host "==> DRIFT -> Cloudflare Pages deployment" -ForegroundColor Cyan
Write-Host "    Working dir : $Root"
Write-Host "    Zip         : $ZipPath"
Write-Host "    Extract to  : $OutDir"
Write-Host "    Project     : $ProjectName"
Write-Host ""

# 1. Sanity checks ---------------------------------------------
if (-not (Test-Path $ZipPath)) {
    Write-Error "Zip file not found: $ZipPath"
    exit 1
}

# Check wrangler is available
$wranglerCmd = $null
foreach ($candidate in @("wrangler", "npx wrangler")) {
    try {
        if ($candidate -eq "wrangler") {
            $null = & wrangler --version 2>$null
            if ($LASTEXITCODE -eq 0) { $wranglerCmd = "wrangler"; break }
        } else {
            $null = & npx wrangler --version 2>$null
            if ($LASTEXITCODE -eq 0) { $wranglerCmd = "npx wrangler"; break }
        }
    } catch { }
}
if (-not $wranglerCmd) {
    Write-Error "wrangler not found. Install with: npm i -g wrangler   (or use 'npx wrangler')"
    exit 1
}
Write-Host "==> Using: $wranglerCmd" -ForegroundColor Green

# 2. Extract the zip (only if missing or -ReExtract was passed) -
$needExtract = $ReExtract -or -not (Test-Path $OutDir) -or ((Get-ChildItem $OutDir -ErrorAction SilentlyContinue).Count -eq 0)
if ($needExtract) {
    if (Test-Path $OutDir) {
        Write-Host "==> Cleaning previous extract..." -ForegroundColor Yellow
        Remove-Item $OutDir -Recurse -Force
    }
    Write-Host "==> Extracting zip..." -ForegroundColor Cyan
    Expand-Archive -Path $ZipPath -DestinationPath $OutDir -Force
} else {
    Write-Host "==> Using existing $ExtractDir folder (pass -ReExtract to overwrite)." -ForegroundColor Yellow
}

# 3. Find the deployable folder (the one containing index.html) -
$deployDir = $OutDir
$indexPaths = Get-ChildItem -Path $OutDir -Recurse -Filter "index.html" -File -ErrorAction SilentlyContinue

if ($indexPaths.Count -eq 0) {
    # No index.html — see if we can use one of the DRIFT HTML files as the entry.
    $partners = Join-Path $OutDir "DRIFT Partners.html"
    $logos    = Join-Path $OutDir "DRIFT Logo Studies.html"
    if (Test-Path $partners) {
        Write-Host "==> No index.html found; using 'DRIFT Partners.html' as the entry point." -ForegroundColor Yellow
        Copy-Item $partners (Join-Path $OutDir "index.html") -Force
        if (Test-Path $logos) {
            Copy-Item $logos (Join-Path $OutDir "logo-studies.html") -Force
            Write-Host "    Also exposed 'DRIFT Logo Studies.html' as 'logo-studies.html'." -ForegroundColor Yellow
        }
        $deployDir = $OutDir
    } else {
        Write-Warning "No index.html and no recognized DRIFT entry HTML found. Listing contents:"
        Get-ChildItem $OutDir -Recurse | Select-Object -First 40 FullName
        Write-Error "Cannot deploy without an index.html. Pick the right folder and re-run."
        exit 1
    }
} else {
    # Use the shallowest index.html
    $shallowest = $indexPaths | Sort-Object { $_.FullName.Length } | Select-Object -First 1
    $deployDir = $shallowest.Directory.FullName
    Write-Host "==> Deploy folder: $deployDir" -ForegroundColor Green
}

# 4. Show what we're about to deploy ---------------------------
Write-Host ""
Write-Host "==> Files to deploy:" -ForegroundColor Cyan
Get-ChildItem $deployDir -Recurse -File | Select-Object -First 20 | ForEach-Object {
    "    " + $_.FullName.Substring($deployDir.Length).TrimStart('\')
}
$totalCount = (Get-ChildItem $deployDir -Recurse -File).Count
Write-Host "    ($totalCount file(s) total)"
Write-Host ""

# 5. Deploy ----------------------------------------------------
Write-Host "==> Deploying to Cloudflare Pages..." -ForegroundColor Cyan
Write-Host "    (Wrangler will create the project '$ProjectName' if it doesn't exist.)"
Write-Host ""

if ($wranglerCmd -eq "wrangler") {
    & wrangler pages deploy $deployDir --project-name=$ProjectName
} else {
    & npx wrangler pages deploy $deployDir --project-name=$ProjectName
}

if ($LASTEXITCODE -ne 0) {
    Write-Error "Deployment failed. See wrangler output above."
    exit $LASTEXITCODE
}

Write-Host ""
Write-Host "==> Done! Your site is live on Cloudflare Pages." -ForegroundColor Green
Write-Host "    Look for the 'Deployment complete!' line above for the URL."
Write-Host ""
