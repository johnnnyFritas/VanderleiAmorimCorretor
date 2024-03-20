//global variables
const piata = document.getElementById('piata');
const mar = document.getElementById('mar');

//local variables
const botao = document.getElementById('botao');
const regiao = document.getElementById('regiao');
const finalidade = document.getElementById('finalidade');
const tipo = document.getElementById('tipo');
const nf = document.getElementById('nf');

//Filter function (here we called the functions to make the filter usable)
botao.addEventListener('click', ()=> {
    console.log(verifier);
    if(regiao.value === 'salvador' && finalidade.value === 'comprar' && tipo.value === 'apartamento') {
        mostraPiata();
        mostraMar();
        escondeNf();
    }else if(regiao.value === 'salvador' && finalidade.value === 'finalidade' && tipo.value === 'tipo') {
        mostraPiata();
        mostraMar();
        escondeNf();
      }else if(regiao.value === 'salvador' && finalidade.value === 'comprar' && tipo.value === 'tipo') {
        mostraPiata();
        mostraMar();
        escondeNf();
      }else if(regiao.value === 'regiao' && finalidade.value === 'finalidade' && tipo.value === 'tipo') {
        escondePiata();
        escondeMar();
        escondeNf();
      }else if(regiao.value === 'regiao' && finalidade.value === 'comprar' && tipo.value === 'tipo') {
        mostraPiata();
        mostraMar();
        escondeNf();
      }else {
        escondePiata();
        escondeMar();
        mostraNf();
      }
});

//Functions used above
function mostraPiata() {
    piata.classList.remove('header__opções__casas-opção');
    piata.classList.add('header__opções__casas-opção-piata-visivel');
}

function escondePiata() {
    piata.classList.remove('header__opções__casas-opção-piata-visivel');
    piata.classList.add('header__opções__casas-opção');
}

function mostraMar() {
    mar.classList.remove('header__opções__casas-opção');
    mar.classList.add('header__opções__casas-opção-mar-visivel');
}

function escondeMar() {
    mar.classList.remove('header__opções__casas-opção-mar-visivel');
    mar.classList.add('header__opções__casas-opção');
}

function mostraNf() {
    nf.classList.remove('header__opções__casas-nf');
    nf.classList.add('header__opções__casas-nf-visivel');
}

function escondeNf() {
    nf.classList.remove('header__opções__casas-nf-visivel');
    nf.classList.add('header__opções__casas-nf');
}