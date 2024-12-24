// Tamplate Strings - Concatenas Strings - Obrigatorio o usdo de `CRAZES`

let nome = "Rafael";
let sobrenome = "Nunes";
let idade = 28;

// Sem Tamplate
let msg1 = "Meu nome é " + nome + " " + sobrenome + " e eu tenho " + idade + " anos de idade.";

// Usando Tamplate
let msg2 = `Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos de idade.`;

console.log(msg1);
console.log(msg2);