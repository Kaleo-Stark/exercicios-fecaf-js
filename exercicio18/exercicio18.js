/*Faça um programa que liste do numero 1 ao 200 e também mostre o quadrado do numero na mesma linha.
Lembre-se que o quadrado = ( numero * numero )
Ex.
    Numero    -    Quadrado
    1        -             1
    2        -             4
    3        -             9
    4        -             16
    ...
    200    -         40000
*/
let contador = 0;

console.log('Número - Quadrado');

while(contador < 200) console.log(`${++contador}   -   ${contador * contador}`);