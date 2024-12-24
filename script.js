let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let listTarefas = [];

function atualizarListaTarefas() {
    listElement.innerHTML = ''; // Limpo a lista antes de mostrar ela preenchida.

    listTarefas.map((todo) => {
        let liElement = document.createElement("li");
        let textoTarefa = document.createTextNode(todo); // Variavel recebe o que é digitado pelo usuario.

        let botaoExcluir = document.createElement("a"); // Criando ancora (botão excluir)
        botaoExcluir.setAttribute("href", "#");

        let textoBotaoExcluir = document.createTextNode("Excluir");
        botaoExcluir.appendChild(textoBotaoExcluir);

        botaoExcluir.setAttribute("onclick", "deletarTarefa()"); // Seto o evendo do botão e chamo a função

        liElement.appendChild(textoTarefa); // add o texto dentro da LI
        liElement.appendChild(botaoExcluir); // add botão excluir
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

function deletarTarefa() {
    alert("Teste deletar");
}
