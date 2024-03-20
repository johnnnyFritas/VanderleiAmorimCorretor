//local variables
const foto = document.getElementById('clickedFoto');
const clicker = document.getElementById('first-swiper');

//getting the fotos and saving it on a array


//calling the functions and making the foto zoom
for(let i = 0; i < 3; i++) {
    const fotoArray = [document.getElementById('foto' + i)];
}

for(let i = 0; i < 3;) {
    clicker.addEventListener('click', ()=> {
        i++;
        console.log(i);
        foto.setAttribute('src', 'assets/imagesToAnimate/highlights-Animations/swiperFoto' + i);
    });
}