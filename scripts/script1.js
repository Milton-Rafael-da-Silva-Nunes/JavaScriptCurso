const frutas = ['Maça', 'Melancia', 'Uva'];

// For
for(let index = 0; index < frutas.length; index++) {
    console.log(frutas[index])
}

// ForEach
frutas.forEach(frutas => {
    console.log(frutas)
});

// ForEach
frutas.forEach((frutas, index) =>{
    console.log(frutas, index);
});

// While
let index = 0;
while(index < frutas.length) {
    console.log(frutas[index] + " " + index);
    index++;
}

// For in
for (let property in frutas) {
    console.log(frutas[property] + " " + property);
}

// For Of
var cont = 0;
for (let value of frutas) {
    console.log(value + " " + cont)
    cont++
}