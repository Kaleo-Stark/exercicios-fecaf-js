/*Crie um programa contendo uma lista chamada filmesDisponiveis com os nomes de 10 
filmes ou séries.
No mesmo código crie uma outra lista chamada filmesAssistidos contendo os mesmos 10 
filmes da lista filmesDisponiveis
Remova da lista filmesAssistidos o último elemento desta lista.
*/

const filmesDisponiveis = [
    'O Sexto Sentido',
    'The Matrix',
    'De Volta para o Futuro',
    'Carros',
    'Tron o Legado',
    'Duro de Matar',
    'No Limite do Amanhã',
    'Eu Sou a Lenda',
    'Homem de Ferro',
    'Dr. Estranho no Multiverso da Loucura >:('
];

var filmesAssistidos = JSON.parse(JSON.stringify(filmesDisponiveis));

filmesAssistidos.splice(-1);

console.log("Filmes disponiveis:", filmesDisponiveis);
console.log("Filmes assistidos:", filmesAssistidos);