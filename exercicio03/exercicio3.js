/*
Crie uma variável do tipo objeto chamada skeep contendo as seguintes características, e atribua valores numéricos a elas:

energia
velocidade
temperatura
humor

Mostre na tela os valores das características do objeto skeep da seguinte maneira
Energia ==> <valor da energia>
Velocidade==> <valor da velocidade>
Temperatura==> <valor da temperatura>
Humor==> <valor do humor>
*/

var skeep = {
    energia: 10,
    velocidade: 8,
    temperatura: 9,
    humor: 6
};

console.log(`
Características do objeto skeep:\n
    Energia ==> ${skeep.energia}
    Velocidade ==> ${skeep.velocidade}
    Temperatura ==> ${skeep.temperatura}
    Humor ==> ${skeep.humor}
`);