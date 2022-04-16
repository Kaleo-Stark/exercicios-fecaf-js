/* 
    Crie e inicie variáveis para guardar as informações abaixo usando const, let, var de acordo com a 
    forma que achar correto. 
*/

// A) Nome da empresa, que será acessível por toda a aplicação. 
var nomeDaEmpresa = "Empresa x";
console.log(`O nome da empresa é: ${nomeDaEmpresa}\n`);

//B) Variável usada apenas no módulo de pagamento para guardar o total de salários pagos no mês.
let totalDeSalariosMes = 10000.00
console.log(`Valor total de salarios pagos no mês: R$ ${totalDeSalariosMes}\n`);

//C) Quantidade de dias de faturamento, normalmente esta informação será fixa e nunca mais alterada
const diasFaturamento = 10;
console.log(`Dias de faturamento: ${diasFaturamento}\n`);

//D) Todas as notas de um aluno de uma disciplina
var notasFulanoDeTal = [ 8, 7, 6, 8, 10 ];
console.log(`Notas do aluno Fulano de Tal: ${notasFulanoDeTal}\n`);

//E) Todos os dados de um carro (placa, chassi, modelo, ano, cor, nome do dono) que foi multado.
var dadosVeiculo = {
    placa: "THE-ONE",
    chassi: 9884776662888830,
    modelo: "Rx7",
    ano: 1998,
    cor: "Azul Marinho",
    nomeDono: "Kaleo"
}

console.log(`Dados veiculo:
    Placa: ${dadosVeiculo.placa}
    Chassi: ${dadosVeiculo.chassi}
    Modelo: ${dadosVeiculo.modelo}
    Ano: ${dadosVeiculo.ano}
    Cor: ${dadosVeiculo.cor}
    Nome do dono: ${dadosVeiculo.nomeDono} \n
`);

//F) O número de ouro da matemática valor 1.61803...
var numeroDeOuro = 1.61803399;
console.log(`O número de ouro da matematica é: ${numeroDeOuro}\n`);

//G) Os nomes dos alunos de uma turma com 10 alunos
var alunos = [
    "Joãozinho",
    "Mariazinha",
    "Cebolinha",
    "Magali",
    "Thanos",
    "Peter",
    "Dr. Raimundo",
    "Marquito",
    "Silvio Santos",
    "Rambo"
];

console.log("10 alunos da turma maluca:");

for(let aluno of alunos){
    console.log(`   Nome: ${aluno}`);
}

console.log("\n");

//H) Quantidade de pares de tênis de um armário
var paresDeTenis = 4;
console.log(`No armário tem ${paresDeTenis} pares de tênis.`)