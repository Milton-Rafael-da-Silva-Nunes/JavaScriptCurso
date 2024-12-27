// MAP = percorer todo ARRAY
let lista = ["Luana", "Rafael", "Maria", "Jose"];

lista.map((value, index) => { // O 'value' é o valor da LISTA - o 'index' é a posição do item da lista
    console.log("Nome: " + value + " - Na pisição: " + index);
});

// Reduce = Ele reduz o ARRAY
let numeros = [5, 3, 2, 10];

let total = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(`${acumulador} - total até o momento.`);
    console.log(`${numero} - numero atual.`);
    console.log(`${indice} - posição atual`); // Não obrigatorio
    console.log(`${original} - array original`); // Não obrigatorio
    console.log("----------------------------------------")

    return acumulador += numero;
});

console.log(`Total do REDUCE: ${total}`);