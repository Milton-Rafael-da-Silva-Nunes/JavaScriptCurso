// REST Operator.

// Forma que NÂO usa o REST Operator.
function convidados1(nomes1, nomes2, nomes3, nomes4) {  // Dessa forma eu tenho que criar cada atributo e ela ficará statica em apenas 4 CONVIDADOS.
    const msg = "SEJAM BEM VINDOS!\n";
    console.log(msg + nomes1 + "," + nomes2 + "," + nomes3 + "," + nomes4);
}

console.log("\n");

// Forma que USA o REST Operator.
function convidados2(...convidados) { // Dessa forma ela fica flexivel e pode ter varios CONVIDADOS.
    const msg = "SEJAM BEM VINDOS!\n";
    console.log(msg + convidados);
}

convidados1("Rafael", "José", "Maria", "João");
convidados2("Rafael", "José", "Maria", "João", "Milton");

// usando REST Operator em um Programa de sortear numeros.

function sortearNumero(...numeros) {
    let numeroEscolhido = Math.floor(Math.random() * numeros.length); //  Math.floor Pega somente os inteiros - Math.random() numero aleatorio da minha lista
    console.log("Numero escolhido foi: " + numeros[numeroEscolhido]);
}

sortearNumero(1, 5, 4, 6, 8, 7, 905, 65, 265, 101, 99, 346, 33);