const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.clear();

readline.question('Digite o valor 1\n', (valor1) => {
    readline.question('Digite o valor 2\n', (valor2) => {
        readline.question('Digite o valor 3\n', (valor3) => {

            if(Number(valor1) < Number(valor2) && Number(valor1) < Number(valor3) && Number(valor2) < Number(valor3)){
                console.log(valor1, valor2, valor3);
            }else if(Number(valor1) < Number(valor2) && Number(valor1) < Number(valor3) && Number(valor3) < Number(valor2)){
                console.log(valor1, valor3, valor2);
            }else if(Number(valor2) < Number(valor1) && Number(valor2) < Number(valor3) && Number(valor1) < Number(valor3)){
                console.log(valor2, valor1, valor3);
            }else if(Number(valor2) < Number(valor1) && Number(valor2) < Number(valor3) && Number(valor3) < Number(valor1)){
                console.log(valor2, valor3, valor1);
            }else if(Number(valor3) < Number(valor1) && Number(valor3) < Number(valor2) && Number(valor2) < Number(valor1)){
                console.log(valor3, valor2, valor1);
            }else if(Number(valor3) < Number(valor1) && Number(valor3) < Number(valor2) && Number(valor1) < Number(valor2)){
                console.log(valor3, valor1, valor2);
            }

            readline.close();
        });
    });
});