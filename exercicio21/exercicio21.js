/*Faça um programa que liste apenas os números ímpares do 1 ao 100
    1
    3
    5
    7
    ...
    99
*/

let contador = 0;

while(contador < 100) if (++contador % 2 !== 0) console.log(contador) ;