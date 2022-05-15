/*Crie uma função chamada cabeçalho, que imprima o nome da faculdade, o curso, 
o seu RA e o seu nome, em quadro feito com símbolos do tipo (#, *, &, @, etc...)
*/

const texto = `
---------------------
| Faculdade | FECAF |
---------------------
|   Curso   |  ADS  |
---------------------
|    RA     | 31976 |
---------------------
|   Nome    | Kaleo |
---------------------
`;

( function cabecalho() { console.log(texto) }() );