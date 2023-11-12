const pegaImg = document.querySelector(".seta");
const pegaSalvador = document.querySelector("#salvador");
const pegaLauro = document.querySelector("#lauro-de-freitas");
var i = 0;

pegaImg.addEventListener('click', ()=> {
    i++;
    switch(i%2 != 0) {
        case true:
            apareceMenu();
            estilizaMenu();
            break;

        case false:
            tiraMenu();
            break;
    };
})

function estilizaMenu() {
    pegaSalvador.classList.add("estiliza-menu");
    pegaLauro.classList.add("estiliza-menu");
};

function apareceMenu() {
    pegaSalvador.classList.remove("ancoras-deslizantes");
    pegaLauro.classList.remove("ancoras-deslizantes");

    pegaSalvador.classList.remove("esconde-menu");
    pegaLauro.classList.remove("esconde-menu");

    pegaImg.classList.add("gira-img");
};

function tiraMenu() {
    pegaSalvador.classList.add("esconde-menu");
    pegaLauro.classList.add("esconde-menu");

    pegaSalvador.classList.add("ancoras-deslizantes");
    pegaLauro.classList.add("ancoras-deslizantes");

    pegaImg.classList.remove("gira-img");
};