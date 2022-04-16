const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.clear();
console.log("Bom vindo ao concelheiro para jogar 21 ...\n\n");

readline.question('Digite o valor da primeira carta:\n', (valorCarta1) => {
    readline.question('\nDigite o valor da segunda carta:\n', (valorCarta2) => {
        let print = mensagem => console.log(mensagem);
        
        let somaCartas = Number(valorCarta1) + Number(valorCarta2);

                somaCartas <= 10            ? print(         'Sem dúvida, compre mais uma carta!'           ) :
        somaCartas > 10 && somaCartas <= 15 ? print( 'Há um risco, mas aconselho a comprar mais uma carta.' ) :
        somaCartas > 15 && somaCartas <= 20 ? print(           'Aconselho a parar de jogar ...'             ) :
               somaCartas === 21            ? print(        'Você ganhou, não compre mais nada! :D'         ) : 
                                              print(                  'Você perdeu! :,('                    ) ;

        readline.close();
    });
});

        /*if(somaCartas <= 10){ console.log('Sem dúvida, compre mais uma carta!') }else
        if(somaCartas > 10 && somaCartas <= 15){ console.log('Há um risco, mas aconselho a comprar mais uma carta.') }else
        if(somaCartas > 15 && somaCartas <= 20){ console.log('Aconselho a parar de jogar ...') }else
        if(somaCartas === 21){ console.log('Você ganhou, não compre mais nada! :D') }else
        if(somaCartas > 21){ console.log('Você perdeu! :,(') }*/