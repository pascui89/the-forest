const { exec } = require('child_process');

const executeCommand = (command) => {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(`${error.message}`);
                return;
            }
            if (stderr) {
                console.info(`Git info: ${stderr}`);
            }
            resolve(`Salida: ${stdout}`);
        });
    });
}

const runCommands = async () => {
    try {
        await executeCommand('git add .');
        await executeCommand('git commit -m "Latest server info"');
        await executeCommand('git push -u origin main');
    } catch (error) {
        console.error(error);
    }
}

runCommands();
