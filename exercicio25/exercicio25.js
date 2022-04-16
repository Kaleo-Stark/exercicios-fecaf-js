/*Faça um programa que imprima na console do numero 1 ao 200, 
utilizando uma variável chamada contador para controlar o numero de voltas do laço, 
o programa deve imprimir os caracteres "###" no lugar dos números divisíveis por 20
*/
let contador = 0;

while(contador < 200) console.log(++contador % 20 != 0 ? contador : '###');