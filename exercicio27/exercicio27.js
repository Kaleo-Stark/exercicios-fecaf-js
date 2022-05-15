/*Modificar os códigos da tabuada.js (feita em exercícios anteriores) para executarem a 
função cabecalho logo no inicio do programa.
Nesta atividade submeta apenas o arquivo tabuada.js com a chamada para a função cabecalho() 
*/
const cabecalho = require('./cabecalho.js');

cabecalho("Exercicio 27 - Cabeçalho e Tabuada");

// Abaixo código para criar a tabuada do 7.
for (let indice = 1; indice <= 10; indice++) console.log(`7 x ${indice} = ${indice * 7}`);

/*
//CÓDIGO NO ARQUIVO "cabecalho.js":

function cabecalho (titulo) {
    console.clear();

    console.log(
        titulo.toUpperCase() + "\n" +
        "Aluno: Kaleo \n"+
        "RA: 31976 \n" +
        "Professor: Antonio \n"+
        "Materia: DSV Mobile\n\n"
    );
}

module.exports = cabecalho;
*/