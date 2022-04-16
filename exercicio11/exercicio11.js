const readline = require('readline').createInterface({
    input:  process.stdin,
    output: process.stdout
});

var limparConsole = () => console.clear();

var verificar = temperatura => temperatura > 25 ? responder.queEstaCalor(temperatura) : responder.queEstaFrio(temperatura);

var responder = {
    queEstaCalor: temperatura => mensagem(temperatura, "calor"), 
    queEstaFrio:  temperatura => mensagem(temperatura, "frio")
};

var mensagem = (temperatura, frioOuCalor) => {
    limparConsole();
    
    console.log(`Nessa temperatura ${temperatura}ºC ... \nEstá ${frioOuCalor}.`);
    
    readline.close();
};

limparConsole();

readline.question("Qual a temperatura atual em graus Celcius ?\n", verificar);