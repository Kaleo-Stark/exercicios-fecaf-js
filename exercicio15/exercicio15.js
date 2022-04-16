const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.clear();

readline.question('Digite o valor 1\n', (valor1) => {
    readline.question('Digite o valor 2\n', (valor2) => {
        if(Number(valor1) < Number(valor2)){
            console.log(valor1, valor2);
        }else{
            console.log(valor2, valor1);
        }

        readline.close();
    });
});