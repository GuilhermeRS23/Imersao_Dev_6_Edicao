let numeroSecreto = parseInt(Math.random() * 501) + 1;
let tentativas = 1;
let tentativasRestantes = 20;

while (chute != numeroSecreto && tentativasRestantes != 0) {

    var chute = prompt(`Tentativa ${tentativas}\n
    Você tem apenas ${tentativasRestantes} tentativas!\n
    Digite um número entre 1 e 500: `);

    if (chute == numeroSecreto) {
        alert(`Você acertou com ${tentativas} tentativa(s)!`)
    }
    else if (chute > numeroSecreto) {
        alert(`Errou....!\nNúmero Secreto é menor que ${chute}.`)
    }
    else if (chute < numeroSecreto) {
        alert(`Errou....!\nNúmero Secreto é maior que ${chute}.`)
    }

    tentativas++;
    tentativasRestantes -= 1;

    if (tentativasRestantes == 0) {
        alert(`Que pena suas tentativas terminaram... \n Numero Secreto era ${numeroSecreto}.`)
    }
} 
