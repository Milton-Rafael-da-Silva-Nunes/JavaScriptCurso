// Usando Find
let listagem = [5, 3, "Rafael", 2, "Rafael", "Jose"];

let busca = listagem.find((item) => { // FIND ele pega o 1º da minha lista conforme minha busca (se eu tiver 2 RAFAEL) ele tras o primeiro que achar
    return item === "Rafael";
});

console.log(busca);

// Usando o FILTER
let palavras = ["Milton Nunes", "Rafael", "Jose", "Mara", "Julia", "Ricardo Silva", "Rafael"];

let encontrados = palavras.filter((value, index, array) => { // FILTER retorna tudo com base no meu filtro.
    return value === "Rafael";
});

console.log(encontrados);
