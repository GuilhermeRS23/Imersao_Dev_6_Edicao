let listaDeJogadores = [];
let elementoTabela = document.getElementById('tabelaJogadores')

function criarJogador() {
    let novoJogador = document.getElementById('campoNomeJogador').value;
    let imgAvatar = document.getElementById('imagem_avatar').value;

    listaDeJogadores.push({
        nome: novoJogador,
        avatar: imgAvatar,
        vitoria: 0,
        empate: 0,
        derrota: 0,
        pontos: 0
    });

    document.getElementById("campoNomeJogador").value = "";
    document.getElementById('imagem_avatar').value = "";
    exibirTabela();
}

function exibirTabela() {
    elementoTabela.innerHTML = "";
    listaDeJogadores.forEach((jogador, index) => {
        console.log(jogador);
        elementoTabela.innerHTML += `
        <tr>
        <td> <img
                    src="${jogador.avatar}"
                    width=50px>
            <td>${jogador.nome}</td>
            <td>${jogador.vitoria}</td>
            <td>${jogador.empate}</td>
            <td>${jogador.derrota}</td>
            <td>${jogador.pontos}</td>
            <td><button onClick="adicionarVitoria(${index})">Vitória</button></td>
            <td><button onClick="adicionarEmpate()">Empate</button></td>
            <td><button onClick="adicionarDerrota(${index})">Derrota</button></td>
            <td><button onClick="limparPontuacaoJogador(${index})">Limpar Registros</button></td>
            <td><button onClick="removerJogador(${index})">Apagar Jogador</button></td>
          </tr>
    `;
    });
}

function adicionarVitoria(index) {
    listaDeJogadores[index].vitoria++;
    listaDeJogadores[index].pontos += 3;
    exibirTabela();
}

// function adicionarEmpate(index) {
//     listaDeJogadores[index].empate++;
//     listaDeJogadores[index].pontos++;
//     exibirTabela();
// }

//Empate para todos
function adicionarEmpate() {
    for (i = 0; i < listaDeJogadores.length; i++) {
        listaDeJogadores[i].empate++;
        listaDeJogadores[i].pontos++;
    }
    exibirTabela();
}

function adicionarDerrota(index) {
    listaDeJogadores[index].derrota++;
    exibirTabela();
}

function removerJogador(index) {
    listaDeJogadores.splice(index, 1);
    exibirTabela();
}

function limparPontuacaoJogador(index) {
    listaDeJogadores[index].vitoria = 0;
    listaDeJogadores[index].empate = 0;
    listaDeJogadores[index].derrota = 0;
    listaDeJogadores[index].pontos = 0;
    exibirTabela();
}

function apagarJogadores() {
    listaDeJogadores = [];
    exibirTabela();
}
