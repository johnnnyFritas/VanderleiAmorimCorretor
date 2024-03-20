//local variables
const generalDiv = document.querySelectorAll('.header__opções__casas');
const filterParagraph = document.querySelectorAll('#filter-text-animation');
let i = 0;

//A forEach to select all elements that will appear when you use the filter, then will apply all functions for the animations
generalDiv.forEach(e => {
    e.children.item(0).addEventListener('mouseover', ()=> {
        extendsDivPiata();
        showParagraphPiata();
    });

    e.children.item(0).addEventListener('mouseout', ()=> {
        compressDivPiata();
        hideParagraphPiata();
    });
                    
    e.children.item(1).addEventListener('mouseover', ()=> {
        extendsDivMar();
        showParagraphMar();
    });

    e.children.item(1).addEventListener('mouseout', ()=> {
        compressDivMar();
        hideParagraphMar();
    }); 
});

//This will reset all the animations off when you hover the mouse over.
if(window.location.href != 'https://www.vanderleiamorimcorretor.com.br') {
    piata.classList.remove('background-animationPiata');
    mar.classList.remove('background-animationMar');
}


//This will redirect whoever is clicking on any element of the filter's results (even the background).
generalDiv.forEach(e => {
    e.children.item(0).addEventListener('click',()=> {
        window.location.replace('https://www.vanderleiamorimcorretor.com.br/moradaDePiata.html');
    });

    e.children.item(1).addEventListener('click', ()=> {
        window.location.replace('https://www.vanderleiamorimcorretor.com.br/vistaMar.html')
    });
});

//functions used above
function extendsDivPiata() {
    piata.classList.add('mouseIn-animation');
    piata.classList.add('background-animationPiata');
    piata.classList.remove('mouseOut-animation');
}

function compressDivPiata() {
    piata.classList.add('mouseOut-animation');
    piata.classList.remove('mouseIn-animation');
}

function extendsDivMar() {
    mar.classList.add('mouseIn-animation');
    mar.classList.add('background-animationMar');
    mar.classList.remove('mouseOut-animation');
}

function compressDivMar() {
    mar.classList.add('mouseOut-animation');
    mar.classList.remove('mouseIn-animation');
}

function showParagraphPiata() {
    filterParagraph[0].classList.add('filterParagraphIn');
    filterParagraph[0].classList.remove('filterParagraphOut');
};

function hideParagraphPiata() {
    filterParagraph[0].classList.add('filterParagraphOut');
    filterParagraph[0].classList.remove('filterParagraphIn');
};

function showParagraphMar() {
    filterParagraph[1].classList.add('filterParagraphIn');
    filterParagraph[1].classList.remove('filterParagraphOut');
};

function hideParagraphMar() {
    filterParagraph[1].classList.add('filterParagraphOut');
    filterParagraph[1].classList.remove('filterParagraphIn');
};