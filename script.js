let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let listTarefas = [];

function atualizarListaTarefas() {
    listElement.innerHTML = ''; // Limpo a lista antes de mostrar ela preenchida.

    listTarefas.map((todo) => {
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(todo); // Variavel recebe o que é digitado pelo usuario.

        liElement.appendChild(tarefaText); // add o texto dentro da LI
        listElement.appendChild(liElement); // adiciono a LI na UL do index.html
    })
}

function addTarefasNaLista() {
    if (inputElement.value == '') {
        alert("Digite uma tarefa para adicionar!");
        return false;
    } else {
        let novaTarefa = inputElement.value;

        listTarefas.push(novaTarefa);
        inputElement.value = '';
        atualizarListaTarefas();
    }
}

buttonElement.onclick = addTarefasNaLista;
