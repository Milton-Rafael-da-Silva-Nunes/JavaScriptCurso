var peso;
var altura;
var icm;
var resultado;

function calcularImc(event) {
    event.preventDefault(); // mantem os valores na caixa que o usuario digitou.

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    icm = peso / (altura * altura);

    resultado = document.getElementById('resultado');

    if (icm < 17.0) {
        resultado.innerHTML = 'Seu resultado foi: ' + icm.toFixed(2) + '<br> Cuidado, você está muito abaixo do peso ideal!';
    } else if (icm > 17.0 && icm <= 18.49) {
        resultado.innerHTML = 'Seu resultado foi: ' + icm.toFixed(2) + '<br> Você está abaixo do peso ideal!';
    } else if (icm >= 18.5 && icm < 24.99) {
        resultado.innerHTML = 'Seu resultado foi: ' + icm.toFixed(2) + '<br> Você está no peso ideal!';
    } else if (icm > 25.0 && icm <= 29.99) {
        resultado.innerHTML = 'Seu resultado foi: ' + icm.toFixed(2) + '<br> Você está acima do peso ideal!';
    } else if (icm > 30.0) {
        resultado.innerHTML = 'Seu resultado foi: ' + icm.toFixed(2) + '<br> Cuidado, você está na obesidade!';
    }

    peso = document.getElementById('peso').value = "";
    altura = document.getElementById('altura').value = "";
}