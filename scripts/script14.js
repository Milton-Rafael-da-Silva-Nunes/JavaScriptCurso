// Includes // 
// INCLUDES é case sensitive e retorna um BOOLEAN.
let nomes = ["Rafael", "Daniel", "Joao", "Maria", "Jose"];

let parametro = "Gazin";

if (nomes.includes(parametro)) {
    console.log("SUCESSO!\nNome está na lista.")
} else {
    console.log("NEGATIVO!\nNome não está na lista");
}

// StartsWith //
// STARTSWITH é case sensitive e retorna um BOOLEAN, ele verifica se no INICIO do nome contem os dados que eu filtrei.
let nome1 = "Rafael";

console.log(nome1.startsWith("Raf"));

// EndsWith //
// ENDSWITH é case sensitive e retorna um BOOLEAN, ele verifica se no FINAL do nome contem os dados que eu filtrei.
let nome2 = "Jose";

console.log(nome2.endsWith("se"));

