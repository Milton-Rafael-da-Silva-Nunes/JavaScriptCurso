function pedido() {
    const numeroPedido = prompt("Escolha seu pedido (1,2,3,4)");

    switch (Number(numeroPedido)) {
        case 1:
            saborSuco();
            break;

        case 2:
            tipoAgua();
            break;

        case 3:
            saborSorvete();
            break;

        case 4:
            atualizarResumo("Chamando o Garçom");
            break;

        default:
            alert("Por favor, escolha um pedido entre 1 e 4");
            pedido();
            break;
    }
}

function tipoAgua() {
    const aguaTipo = prompt("1 - Gelada\n2 - Mineral");

    let tipo;
    switch (Number(aguaTipo)) {
        case 1:
            tipo = "Gelada";
            break;
        case 2:
            tipo = "Mineral";
            break;
        default:
            alert("Por favor, escolha como você deseja a agua!");
            tipoAgua();
            return;
    }
    atualizarResumo(`Agua ${tipo}`);
}

function saborSuco() {
    const nSabor = prompt("1 - Acerola\n2 - Abacaxi\n3 - Laranja\n4 - Cupuaçu\n5 - Digite o sabor desejado");

    let sabor;
    switch (Number(nSabor)) {
        case 1:
            sabor = "Acerola";
            break;
        case 2:
            sabor = "Abacaxi";
            break;
        case 3:
            sabor = "Laranja";
            break;
        case 4:
            sabor = "Cupuaçu";
            break;
        case 5:
            sabor = prompt("Digite o sabor do Suco:");
            break;
        default:
            alert("Por favor, escolha um sabor entre nossas opções!");
            saborSuco();
            return;
    }
    atualizarResumo(`Suco de ${sabor}`);
}

function saborSorvete() {
    const sabores = prompt("Escolha o sabor do sorvete:\n1 - Chocolate\n2 - Morango\n3 - Creme\n4 - Digite o sabor desejado");

    let sabor;
    switch (Number(sabores)) {
        case 1:
            sabor = "Chocolate";
            break;
        case 2:
            sabor = "Morango";
            break;
        case 3:
            sabor = "Creme";
            break;
        case 4:
            sabor = prompt("Digite o sabor do Sorvete:");
            break;
        default:
            alert("Por favor, escolha um sabor entre nossas opções!");
            saborSorvete();
            return;
    }
    atualizarResumo(`Sorvete de ${sabor}`);
}

function atualizarResumo(resumo) {
    const elementoResumo = document.querySelector("#resumo-pedido"); //Atualiza meu h3 da minha tela inicial
    if (elementoResumo) {
        elementoResumo.innerHTML = resumo;
    } else {
        console.error("Elemento 'resumo-pedido' não encontrado.");
    }
}