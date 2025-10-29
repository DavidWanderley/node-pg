const fs = require('fs');
const path = require('path');

function contarArquivos(diretorio) {
  let total = 0;
  const itens = fs.readdirSync(diretorio, { withFileTypes: true });

  for (const item of itens) {
    const caminho = path.join(diretorio, item.name);
    if (item.isDirectory()) {
      total += contarArquivos(caminho);
    } else {
      total++;
    }
  }
  return total;
}

const totalArquivos = contarArquivos('./node_modules');
console.log(`Total de arquivos no node_modules: ${totalArquivos}`);
