const { exec } = require('child_process');

exec('git add . && git commit -m "Latest server info" && git push -u origin main', (error, stdout, stderr) => {
    if (error) {
        console.error(`Se produjo un error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Error: ${stderr}`);
        return;
    }
    console.log(`Salida: ${stdout}`);
});
