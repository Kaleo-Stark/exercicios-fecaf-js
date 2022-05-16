/*Faça um programa que peça 5 números ao usuário e mostre os números em ordem crescente na tela.
*Obs.: Não utilize nenhuma função pronta, crie seu próprio código para fazer a ordenação.
*/

const readline = require('readline').createInterface({
    input: process.stdin, output: process.stdout
});

var listaDeEntrada = new Array();
var listaDeEntradaBackup;

function pegarValores(){
    readline.question(`Digite o valor ${listaDeEntrada.length + 1}: `, (valorDigitado) => {
        console.clear();

        valorDigitado = Number(valorDigitado);

        if(valorDigitado || valorDigitado === 0){
            listaDeEntrada.push(valorDigitado);

            if(listaDeEntrada.length < 5){ pegarValores() }
            else{
                readline.close();

                listaDeEntradaBackup = listaDeEntrada.slice();

                ordernarLista();
            }
        }else{
            console.log("Digite somente valores numericos por favor ... \n");

            pegarValores();
        }
    });
}

    
function ordernarLista(){
    let aux;

    for(let indiceLista = 0; indiceLista < listaDeEntrada.length; indiceLista++){
        for(let indiceVerificar = indiceLista+1; indiceVerificar < listaDeEntrada.length; indiceVerificar++){
            if(listaDeEntrada[indiceVerificar] < listaDeEntrada[indiceLista]){ 
                aux = listaDeEntrada[indiceLista];
                listaDeEntrada[indiceLista] = listaDeEntrada[indiceVerificar];
                listaDeEntrada[indiceVerificar] = aux;
            }
        }
    }

    console.clear();

    console.log("Lista inicial: ", listaDeEntradaBackup);
    console.log("Lista ordenada: ",listaDeEntrada);
}

pegarValores();