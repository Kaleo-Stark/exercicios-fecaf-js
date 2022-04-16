/*Faça um pequeno programa que liste todos os números de 5 a 75 juntamente com a soma. Conforme exemplo:
    5    -    5
    6    -    11
    7    -    18
    8    -    26
    9    -    35
    ...
    75    -    ?
*/

var soma = 0;
var contador = 5;

while(contador <= 75) console.log(`${contador} - ${soma += contador++}`);