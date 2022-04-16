const readline = require('readline').createInterface({
    input:  process.stdin,
    output: process.stdout
});

readline.question("Qual o preço da gasolina ?\n", (preco) => {
    preco > 2.5 ? console.log("A gasolina está cara!") : console.log('A gasolina está barata!') ;

    readline.close();
});