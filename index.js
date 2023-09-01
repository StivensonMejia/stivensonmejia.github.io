/* PARALAX INDEX */

document.addEventListener("mousemove", parallax);
function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed');

    const x = (window.innerWidth - e.pageX*speed)/200;
    const y = (window.innerHeight - e.pageY*speed)/200;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
}

/* CARRUSEL INDEX SEC4 */

const carrouselContainer = document.querySelector('.inSec4-containerCards');
const selectorCarrouselIlustration = document.querySelector('.inSec4-ilustraciones');
const selectorCarrouselVideos = document.querySelector('.inSec4-videos');
const selectorCarrouselWeb = document.querySelector('.inSec4-web');

function carouselClick(selectedElement, translateXValue) {
    const elements = [selectorCarrouselIlustration, selectorCarrouselVideos, selectorCarrouselWeb];
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('selected');
    }
    selectedElement.classList.add('selected');
    carrouselContainer.style.transform = 'translateX(' + translateXValue + ')';
}

selectorCarrouselIlustration.addEventListener('click', function () {
    carouselClick(selectorCarrouselIlustration, '0%');
});

selectorCarrouselVideos.addEventListener('click', function () {
    carouselClick(selectorCarrouselVideos, '-25%');
});

selectorCarrouselWeb.addEventListener('click', function () {
    carouselClick(selectorCarrouselWeb, '-50%');
});