try {
	git --version
    git add .
    git commit -m "Latest server info"
    git push -u origin main
} catch {
    Write-Error "Se produjo un error: $_"
}
pause
