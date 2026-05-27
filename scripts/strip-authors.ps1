$ErrorActionPreference = 'Stop'
$root = 'D:\1x\Nutritherapy\src'
$files = Get-ChildItem -Recurse -Path $root -Include *.ts,*.tsx -File
$total = 0
foreach ($f in $files) {
    $c = Get-Content -Raw $f.FullName
    $orig = $c
    # Replacements (order matters: longest first)
    $c = $c -replace 'Irène Grosjean','la tradition naturopathique vitaliste'
    $c = $c -replace 'Irene Grosjean','la tradition naturopathique vitaliste'
    $c = $c -replace 'Dr Jean-Paul Curtay','la nutrithérapie moderne'
    $c = $c -replace 'Jean-Paul Curtay','la nutrithérapie moderne'
    $c = $c -replace 'École Grosjean','École naturopathique'
    $c = $c -replace 'École Curtay','Nutrithérapie moderne'
    $c = $c -replace 'école Grosjean','tradition naturopathique'
    $c = $c -replace 'école Curtay','nutrithérapie moderne'
    $c = $c -replace 'Dr Curtay','les standards de la nutrithérapie'
    $c = $c -replace 'le Dr Curtay','la nutrithérapie moderne'
    $c = $c -replace 'Selon Grosjean','Selon la tradition naturopathique'
    $c = $c -replace 'selon Grosjean','selon la tradition naturopathique'
    $c = $c -replace 'Selon Curtay','Selon les standards modernes'
    $c = $c -replace 'selon Curtay','selon les standards modernes'
    $c = $c -replace 'règle Curtay','règle nutrithérapeutique'
    $c = $c -replace 'protocole Curtay','protocole nutrithérapique'
    $c = $c -replace 'Grosjean','la naturopathie vitaliste'
    $c = $c -replace 'Curtay','la nutrithérapie moderne'
    if ($c -ne $orig) {
        [System.IO.File]::WriteAllText($f.FullName, $c, (New-Object System.Text.UTF8Encoding $false))
        Write-Host "updated: $($f.Name)"
        $total++
    }
}
Write-Host "Total updated: $total"
