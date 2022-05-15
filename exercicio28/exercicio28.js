/*Faça uma função para calcular o volume de uma caixa, esta função deverá receber 3 valores 
(base, altura, largura) e deverá retornar o valor do volume  programa que calcule o volume 
de uma caixa volume = base * largura * altura
*/

const readline = require('readline').createInterface({
    input: process.stdin, output: process.stdout
});

const calcularVolume = (base, largura, altura) => base * largura * altura ;

console.clear();

readline.question("Digite o valor da base: ", (base) => {
    readline.question("Digite o valor da largura: ", (largura) => {
        readline.question("Digite o valor da altura: ", (altura) => {
            readline.close();
            
            let volume = calcularVolume(base, largura, altura);

            console.log(`O volume é: ${volume}`);
        });
    }); 
});