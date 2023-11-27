var listaGamesArray = ["Marvel's Spider-Man 2"];
var imagemGameArray = ["https://m.media-amazon.com/images/I/81RfcW3Ml-L._AC_SL1500_.jpg"];
var trailerLinkArray = ["https://www.youtube.com/watch?v=rn4qhWWfgCM"];

function adicionarGame() {

    let nomeGame = document.getElementById('nome').value
    let imagemGame = document.getElementById('game').value
    let trailerLink = document.getElementById('trailer').value;

    if (nomeGame != '' && imagemGame != '' && trailerLink != '') {
        if (imagemGame.endsWith('.jpg')) {

            listaGamesArray.push(nomeGame);
            imagemGameArray.push(imagemGame);
            trailerLinkArray.push(trailerLink);
            listarArray();
            limparCampos();

        } else {
            alert('Link de imagem invalido!')
        }

    } else {
        alert('Preencha todos os campos!')
    }
}

function limparCampos() {
    document.getElementById('game').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('trailer').value = '';
}

function listarArray() {
    let listaGames = document.getElementById('listaGames');
    listaGames.innerHTML = '';
    for (i = 0; i < listaGamesArray.length; i++) {
        listaGames.innerHTML += `<div>
    <a href=${trailerLinkArray[i]} target="_blank">
            <img src=${imagemGameArray[i]}>
        </a>
        <p>${listaGamesArray[i]}</p>
        </div>`
    }
}

listarArray();