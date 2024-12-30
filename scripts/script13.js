// Funções Anonimas

/*
"() => {}"

1- PARAMETROS = é onde a função recebe os parametros (assim como na funções tradicionais).
2 - SETA = reponsavel pelo nome "arrow".
3 - CHAVES = bloco de codigo que representa o corpo da função.

*/

// Função normal
function resultado1(a, b) {
    let total = a - b;
    return total;
}

console.log(resultado1(10, 5));

// Função anonima Simples
let resultado2 = ((a, b) => {
    let total = a - b;
    return total;
}) 

console.log(resultado2(10, 5));

// Função anonima pratica
let numeros = [1, 5, 6, 9, 15];

numeros.map((item) => {
    console.log(item);
})

