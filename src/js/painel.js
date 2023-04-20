/* OBJETIVOS
 1 - quando clicar na seta para avançar/voltar temos que esconder todas as imagens e mostrar a proxima (ou anterior) imagem
    - a imagem atual começa em 0 (porque é a primeira imagem), quando clicar em avançar adicionar mais 1 no contador de imagens, quando clicar em voltar menos 1 no contador

 2- esconder todas as imagens
    -pegar todas as imagens usando o DOM e remover a classe mostrar

 3-mostrar a próxima imagem
    -pegar todas as imagens , descobrir qual é a próxima e colocar a classe: mostrar.

 */

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

//objetivo 2
function esconderImagens () {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar');
    })
}

//objetivo 3
function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}

// objetivo 1 - avançar
setaAvancar.addEventListener('click', function() {
    // testa se o contador da imagemAtual é igual ao total de imagens
    const totalDeImagens = imagensPainel.length -1;
    if(imagemAtual === totalDeImagens){

        return;
    }

    imagemAtual++;
    esconderImagens();
    mostrarImagem();
})

// objetivo 1 - voltar
setaVoltar.addEventListener('click', function() {

    if(imagemAtual === 0) {

        return;
    }

    imagemAtual --;
    esconderImagens();
    mostrarImagem();
})


