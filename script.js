//mostrar lista de todos 'los' filmes
function mostrarLista() {
    var html = "<h1>Minha lista de filmes</h1>";

    for (var i = 0; i < filmes.length; i++) {
        var f = filmes[i];
        var imagemHtml = "";
        if (f.imagem !== "") {
            imagemHtml = '<img src="' + f.imagem + '" alt="Pôster de ' + f.nome + '" width="150">';
        }

        html = html +
        '<h2>#' + (i + 1) + ' ' +
          '<a href="#" onclick="mostrarDetalhes(' + i + '); return false;">' + f.nome + '</a>' +
        '</h2>' +
        imagemHtml +
        '<p>Ano: ' + f.ano + '</p>' +
        '<p>Sobre: ' + f.sobre + '</p>' +
        '<hr>';
    }

    document.getElementById("lista").innerHTML = html;
    document.getElementById("lista").hidden = false;
    document.getElementById("detalhes").hidden = true;
    window.scrollTo(0, 0);
}

//mostrar informações de um filme só
function mostrarDetalhes(i) {
    var f = filmes[i];
    var imagemHtml = "";
    if (f.imagem !== "") {
        imagemHtml = '<img src="' + f.imagem + '" alt="Pôster de' + f.nome + '"width="200">';
    }

    var html =
    '<p><a href="#" onclick="mostrarLista(); return false;"> Voltar para a lista</a></p>' +
    '<h1>' + f.nome + '</h1>' +
    imagemHtml +
    '<p>Ano: ' + f.ano + '</p>' +
    '<p>Diretor: ' + f.diretor + '</p>' +
    '<p>Duração: ' + f.duracao + '</p>' +
    '<p>Elenco: ' + f.elenco + '</p>' +
    '<p>Sobre: ' + f.sobre + '</p>';

    document.getElementById("detalhes").innerHTML = html;
    document.getElementById("lista").hidden = true;
    document.getElementById("detalhes").hidden = false;
    window.scrollTo(0, 0);
}

//começa mostrando 'la' lista
mostrarLista();