var listaAnimes = ["https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/585041e91bb7168df89a98eb5318d88c.jpe", "https://br.web.img3.acsta.net/pictures/19/09/18/13/46/0198270.jpg", "https://upload.wikimedia.org/wikipedia/en/e/ed/Aoashi_vol_1.png" , "https://br.web.img2.acsta.net/pictures/22/04/18/22/43/1487268.jpg" , "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/922742d9acaeba7d887ed11b6caab0e4.jpe" , "https://media.fstatic.com/rbC6JYqLgHBMzpugJ5lIb73BrJg=/322x478/smart/filters:format(webp)/media/movies/covers/2015/03/tokyo-ghoul-1a-temporada_t98470_PhMVHwy.jpg" , "https://media.fstatic.com/Ft1BZ3a2TrjIHIRGLnJR1gKgEF4=/322x478/smart/filters:format(webp)/media/movies/covers/2015/04/akame-ga-kill_t101243.jpg"];

var nomesAnimes = ["BlueLock", "Demon Slayer", "Aoashi" , "Spy x Family" , "Chainsaw Man","Tokyo Ghoul", "Akame Ga Kill"];

listaAnimes.push("https://3.bp.blogspot.com/-sHQNlmGeVfI/U_KCw-TN8NI/AAAAAAABRe4/ODp0evThixM/s1600/AOT-07260_COMBO-front_large.jpg", "https://m.media-amazon.com/images/I/815Hq6BC0hL._AC_UF1000,1000_QL80_.jpg" , "https://m.media-amazon.com/images/I/71mgFCZVHEL._AC_UF894,1000_QL80_.jpg","https://upload.wikimedia.org/wikipedia/pt/6/68/Cyberpunk_mercenarios.jpg" ,"https://angelotti.files.wordpress.com/2023/09/one-piece-capa-anime-001-luffy-nami-zoro-usopp-sanji.webp");

nomesAnimes.push("Shingeki no Kyojin", "Jujutsu Kaisen","Death Note","Cyberpunk: Edgerunners", "One Piece");

document.write("<div class ='catalogo_animes'>")

for (i = 0; i < listaAnimes.length; i++) {
    document.write(`<div class="container_anime">
    <img src=${listaAnimes[i]}>
        <p>${nomesAnimes[i]}</p>
        </div>`)
}

document.write('</div>');

