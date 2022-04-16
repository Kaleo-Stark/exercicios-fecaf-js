/*Faça um programa que solicite ao usuário para digitar um número e exiba todos os números desde o informado pelo usuário até o número 1 de maneira decrescente
*/

const readline = require('readline').createInterface({
    input: process.stdin, output: process.stdout
});

readline.question('Digite o número para contar em ordem decrescente até 1: ', (numero) => {
    numero = Number(numero);
    
    if(numero > 1) while(numero >= 1) console.log(numero--);
    else console.log('É nescessario digitar um número maior que 1.');
    
    readline.close();
});