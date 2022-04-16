/*
Faça um programa chamado dados do aluno, que crie variáveis para guardar as seguintes informações NOME, RA, IDADE, e a ALTURA.
Em seguida mostre todas estas informações na tela.
Exemplo:
Nome: Antonio
RA: 11111
Idade: 35
Altura: 1,72
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var dadosAluno = {
    nome: {
        texto: "Digite seu nome: ",
        valor: "",
        proximo: "ra"
    },
    ra: {
        texto: "Digite seu RA: ",
        valor: "",
        proximo: "idade"
    },
    idade: {
        texto: "Digite sua idade: ",
        valor: "",
        proximo: "altura"
    }, 
    altura: {
        texto: "Digite sua altura: ",
        valor: "",
        proximo: null
    }
};

function pegarDado(referencia){
    readline.question(dadosAluno[referencia].texto, entradaDado => { 
        dadosAluno[referencia].valor = entradaDado;
        
        dadosAluno[referencia].proximo ? pegarDado(dadosAluno[referencia].proximo) : finalizar();
    });
}

function finalizar(){
    readline.close();
    
    console.clear();

    console.log(`
    Os dados do aluno é:\n 
    Nome: ${dadosAluno.nome.valor}
    RA: ${dadosAluno.ra.valor}
    Idade: ${dadosAluno.idade.valor}
    Altura: ${dadosAluno.altura.valor}
    `);
}

console.log("Bem vindo ao programa Dados do Aluno, digite os dados solicitados ...\n");

pegarDado('nome');