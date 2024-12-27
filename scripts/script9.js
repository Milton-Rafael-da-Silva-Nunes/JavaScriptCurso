// --------------------------------------------
// Trabalhando com Spread Operador ------------
// --------------------------------------------

// Array
let primeiros = [1, 2, 3];
let numeros1 = [primeiros, 4, 5, 10]; // Forma incorreta, vai ficar array dentro de array.
let numeros2 = [...primeiros, 4, 5, 10]; // Forma correta. Os '...' informa o Spread Operador que adiciona o array os dados de outro array.

console.log(numeros1);
console.log(numeros2);

// Objeto
let pessoa = {
    nome: "Rafael",
    idade: 28,
    profissao: "DBA"
};

let novaPessoa1 = {
    pessoa,
    nome: "Henrique Juliano",
    cidade: "Belem",
    estado: "PA",
    status: "ATIVO"
};

let dadosPessoa = {
    ...pessoa,
    cidade: "Belem",
    estado: "PA",
    status: "ATIVO"
}; // Dados desse segundo Array vai completar o primeiro, caso tenha os mesmos atributos ele vai sobrescreve-los.

console.log(novaPessoa1);
console.log(dadosPessoa);

// Função
function cadastrarUsuario(info) {
    dados = {
        ...info,
        status: "ativo",
        cadastro: "27/12/2024",
        id: "10"
    };

    console.log(dados);
}

cadastrarUsuario({nome: "Rafael", sobrenome: "Nunes", cidade: "Aurorado Pará - PA"}); // Passo os dados do usuario para a função e complemento ela com os demais dados dentro dela.