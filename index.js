const colorRed = document.querySelector('.themeRed');
const colorPurple = document.querySelector('.themePurple');
const colorBlue = document.querySelector('.themeBlue');


colorRed.addEventListener('click', function () {
    document.documentElement.style.setProperty('--red', '#bd2929');
});

colorPurple.addEventListener('click', function () {
    document.documentElement.style.setProperty('--red', '#8553AC');
});

colorBlue.addEventListener('click', function () {
    document.documentElement.style.setProperty('--red', '#55C78B');
});

const carruselButtonLeft = document.querySelector('.buttonLeft');
const carruselButtonRight = document.querySelector('.buttonRight');
const carrusel = document.querySelector('.inSecAM-carrusel');
const itemsCarrusel = document.querySelectorAll('.inSecAM-imgCarrusel');
const totalItems = itemsCarrusel.length;
let indice = 0;

carruselButtonLeft.addEventListener("click", () => {
    indice = (indice - 1 + totalItems) % totalItems;
    actualizarCarrusel();
});

carruselButtonRight.addEventListener("click", () => {
    indice = (indice + 1) % totalItems;
    actualizarCarrusel();
});

function actualizarCarrusel() {
    carrusel.style.transform = `translateX(-${indice * 100}%)`;
}

