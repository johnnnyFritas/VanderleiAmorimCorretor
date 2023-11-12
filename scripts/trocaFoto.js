const fotoPrincipal = document.getElementById("foto");
const miniaturas = document.querySelectorAll(".divide-fotos img");
constminiaturaAtual = 0;

for (var i = 0; i < miniaturas.length; i++) {
    miniaturas[i].addEventListener("click", function() {
        const miniaturaClicada = this;
        const tempSrc = fotoPrincipal.src;
        const tempAlt = fotoPrincipal.alt;

        fotoPrincipal.src = miniaturaClicada.src;
        fotoPrincipal.alt = miniaturaClicada.alt;

        miniaturaClicada.src = tempSrc;
        miniaturaClicada.alt = tempAlt;
    });
}