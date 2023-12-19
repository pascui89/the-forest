$ErrorActionPreference = "Stop"
$directorioDestino = "C:\Users\papra\AppData\LocalLow\Endnight\SonsOfTheForest\Saves\76561198003103183\Multiplayer\1227605469"

try {
    git --version
    if (Test-Path -Path $directorioDestino) {
        Set-Location $directorioDestino
    } else {
        throw "El directorio del repositorio no existe: $directorioRepositorio"
    }

    git fetch
    git pull
} catch {
    Write-Error "Se produjo un error: $_"
}
pause
