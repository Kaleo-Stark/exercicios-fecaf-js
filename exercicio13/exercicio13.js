const readline = require('readline').createInterface({
    input:  process.stdin,
    output: process.stdout
});

var limparConsole = () => console.clear();

var verificar = temperatura => {
    if (temperatura < -10){ responder.opcao0(temperatura) } else 
    if (temperatura >= -10 && temperatura < 0 ){ responder.opcao1(temperatura) } else 
    if (temperatura >=  0  && temperatura < 10){ responder.opcao2(temperatura) } else 
    if (temperatura >= 10  && temperatura < 20){ responder.opcao3(temperatura) } else 
    if (temperatura >= 20  && temperatura < 25){ responder.opcao4(temperatura) } else 
    if (temperatura >= 25  && temperatura < 35){ responder.opcao5(temperatura) } else 
    if (temperatura >= 35){ responder.opcao6(temperatura) }
};

var responder = {
    opcao0: temperatura => mensagem(temperatura, "congelando!"), 
    opcao1: temperatura => mensagem(temperatura, "muito frio!"),
    opcao2: temperatura => mensagem(temperatura, "frio!"),
    opcao3: temperatura => mensagem(temperatura, "agradável!"),
    opcao4: temperatura => mensagem(temperatura, "calor!"),
    opcao5: temperatura => mensagem(temperatura, "muito calor!"),
    opcao6: temperatura => mensagem(temperatura, "insuportavelmente quente!")
};

var mensagem = (temperatura, frioOuCalor) => {
    limparConsole();
    
    console.log(`Nessa temperatura ${temperatura}ºC ... \nEstá ${frioOuCalor}.`);
    
    readline.close();
};

limparConsole();

readline.question("Qual a temperatura atual em graus Celcius ?\n", verificar);