function pedido() {
    const numeroPedido = prompt("Escolha seu pedido (1,2,3,4)");

    switch (Number(numeroPedido)) {
        case 1:
            alert("Você escolher 'Suco', agora, escolha o sabor:");
            saborSuco();
            break;

        case 2:
            alert("Você escolher 'Agua mineral'");
            atualizarResumo("Agua mineral");
            break;

        case 3:
            alert("Você escolher 'Sorvete', agora, escolha o sabor:");
            saborSorvete();
            break;

        case 4:
            alert("O garçom esta a caminho!");
            atualizarResumoPedido("Chamou o graçom");
            break;

        default:
            alert("Por favor, escolha um pedido entre 1 e 4");
            break;
    }
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
            alert("Escolha inválida. Tente novamente.");
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
            alert("Escolha inválida. Tente novamente.");
            return;
    }
    atualizarResumo(`Sorvete de ${sabor}`);
}

function atualizarResumo(resumo) {
    const elementoResumo = document.querySelector("#resumo-pedido"); //Atualiza meu h3 da minha tela inicial
    if(elementoResumo) {
        elementoResumo.innerHTML = resumo;
    } else {
        console.error("Elemento 'resumo-pedido' não encontrado.");
    }
}