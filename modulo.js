const os = require('os');
/* importa o modulo customizado */
const { converterByteToMb } = require('./util/conversor.js');
const chalk = require('chalk');


const tipo = os.type();
const plataforma = os.platform();
const memoria_livre = os.freemem() //em bytes

console.log(chalk.blue.bold(`=== Informação do Sistema ===\n`));


console.log(`Tipo: ${plataforma}`);
console.log(`Tipo: ${tipo}`);
console.log(`Tipo: ${os.release()}`);
console.log(`Tipo: ${memoria_livre} bytes`);
console.log(`Tipo: ${converterByteToMb(memoria_livre)} MB`);

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
