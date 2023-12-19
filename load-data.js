const { exec } = require('child_process');

exec('git fetch && git pull', (error, stdout, stderr) => {
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
