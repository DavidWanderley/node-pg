/* Função para converter bytes para MB */
const converterByteToMb = (bytes) => {
    return (bytes / 1024 / 1024).toFixed(2);
}

/* exportando o módulo (funcao de conversão) para utilizar em qualquer outro arquivo */
module.exports = {converterByteToMb}