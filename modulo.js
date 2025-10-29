const os = require('os');
const chalk = require('chalk');
/* importa o módulo customizado */
const { converterByteToMb } = require('./util/conversor.js');

// Coleta informações do sistema
const tipo = os.type();
const plataforma = os.platform();
const versao = os.release();
const memoria_livre = os.freemem(); // em bytes
const memoria_total = os.totalmem();

// Exibe cabeçalho
console.log(chalk.blue.bold(`\n=== INFORMAÇÕES DO SISTEMA ===\n`));

// Exibe dados do sistema
console.log(`Plataforma: ${chalk.cyan(plataforma)}`);
console.log(`Sistema: ${chalk.cyan(tipo)}`);
console.log(`Versão: ${chalk.cyan(versao)}`);
console.log(`Memória livre: ${chalk.green(converterByteToMb(memoria_livre))} MB`);
console.log(`Memória total: ${chalk.yellow(converterByteToMb(memoria_total))} MB\n`);

// Exemplo de painel de uso simulado
console.log(chalk.magenta.bold('=== USO SIMULADO ==='));
console.log(`
CPU:  ${chalk.red('90%')}
RAM:  ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
