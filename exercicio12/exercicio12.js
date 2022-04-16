const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.clear();

readline.question('Digite humidade atual do ambiente', (humidade)=>{
    humidade > 70 ?
        console.log('O ar está humido!'):
        humidade < 30 ?
            console.log('O ar está muito seco!'):
            console.log('O ar está seco!');
    
    readline.close();
});