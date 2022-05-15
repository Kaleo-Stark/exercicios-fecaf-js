/*Faça um programa que peça 10 números ao usuário, guarde-os em uma lista, 
e depois mostre as seguintes informações: 
    - A soma de todos os números
    - A média aritmética
    - O maior número
    - O menor número
*/

const readline = require('readline').createInterface({
    input: process.stdin, output: process.stdout
});

var valores = {
    lista: new Array(),
    soma: 0,
    maior: 0,
    menor: 0
}

async function pegarValores(){
    readline.question(`Digite o valor ${valores.lista.length + 1}: `, (valorDigitado) => {
        console.clear();

        let valorNumerico = Number(valorDigitado); 

        if(valorNumerico || valorNumerico === 0){
            valores.lista.push(valorNumerico);

            valores.soma += valorNumerico

            if(valorNumerico > valores.maior) valores.maior = valorNumerico;
            if(valorNumerico < valores.menor) valores.menor = valorNumerico;

            valores.lista.length < 10 ? pegarValores() : finalizar();
        }else{
            console.log("Digite apenas valores numericos por favor ... \n");

            pegarValores();
        }
    });
}

function finalizar(){
    readline.close();

    console.clear();

    console.log(`
        A soma de todos os valores é: ${ valores.soma }
        A média aritmética de todos os valores é: ${ valores.soma / valores.lista.length } 
        O maior número é: ${ valores.maior }
        O menor valor é: ${ valores.menor }
    `);
}

console.clear();

pegarValores();