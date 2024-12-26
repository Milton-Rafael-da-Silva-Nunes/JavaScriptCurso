//-------------------------------------------------
// Desconstrução de Objeto ------------------------
//-------------------------------------------------

let pessoa = {
    nome: "Rafael",
    sobrenome: "Nunes",
    empresa: "Lc Sistemas",
    cargo: "DBA"
};

// Modelo manual
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.sobrenome);

// Criando cenario de variavel igual a atributo de objeto.
let nome = "Teste";

// Modelo com desconstrução
const { nome: nomePessoa, sobrenome, cargo, empresa } = pessoa; // Os ':' me da a possibilidade de renomear meu atributo original na Desconstrução

console.log(nomePessoa);
console.log(empresa);

//-------------------------------------------------
// Desconstrução de Array -------------------------
//-------------------------------------------------

let nomes = ["Milton", "Jose", "Marcos"];

// Modelo manual
console.log(nomes[0]);
console.log(nomes[2]);

// Modelo com desconstrução 1
let { 0: mi, 1: jo, 2: ma } = nomes;

console.log(mi);
console.log(jo);

// Modelo com desconstrução 2
let [primeironome, segundonome, terceironom] = nomes;

console.log(terceironome);
console.log(primeironome);


