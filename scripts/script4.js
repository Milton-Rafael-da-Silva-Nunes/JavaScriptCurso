// SetInterval

// 1 - Executando um função através do setInveal
// function acao() {
//     document.write("Executando... <br/>");
// }
//
// setInterval(acao, 1000);

// 2 - Usando arrow Function e execuntando o nome na tela por 0,5 segundo de tempo
// setInterval(() => {
//     document.write("Executando... <br/>");
// }, 500);

// 3 - Atribuindo ele a uma variavel, no console eu posso pausar ele atraves da função clearInterval(times) = times é a variavel que eu defini para ele
// let times = setInterval(() => {
//     document.write("Executando... <br/>");
// }, 500);


// SetTimeOut

// 1 - Executa apenas uma vez aquilo que é mandado executar 3 segundos em milissegundos 3000
//  function acao() {
//     document.write("Executando... <br/>");
//  }

// setTimeout(acao, 3000);

// 2 - Usando arrow Function e executando o nome na tela por 3 segundos.
setTimeout(() => {
    document.write("Executando o timeOut");
}, 3000);