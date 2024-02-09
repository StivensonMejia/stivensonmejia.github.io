/* PARALAX ilustrations */

document.addEventListener("mousemove", parallax);
function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed');

    const x = (window.innerWidth - e.pageX*speed)/200;
    const y = (window.innerHeight - e.pageY*speed)/200;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
}


// Obtén todos los enlaces en el menú vertical
const menuLinks = document.querySelectorAll('.header_subMenu div');
const menuActive = document.querySelectorAll('.header_subMenu div a');
const menuLinksMovil = document.querySelectorAll('.header_subMenu-movil a');

// Obtén todas las secciones por su ID
const sections = [
  document.getElementById('ilustration_section1'),
  document.getElementById('ilustration_section2'),
  document.getElementById('ilustration_section3'),
  document.getElementById('ilustration_section4'),
  document.getElementById('ilustration_section5'),
  document.getElementById('ilustration_section6'),
];

// Oculta todas las secciones, excepto la primera
sections.forEach(function(section, index) {
  if (index !== 0) {
    section.classList.add('hidden-section');
  }
});

// Función para mostrar/ocultar secciones
function toggleSection(index) {
  sections.forEach(function(section, i) {
    if (i === index) {
      section.classList.remove('hidden-section');
      section.classList.add('visible-section');
    } else {
      section.classList.remove('visible-section');
      section.classList.add('hidden-section');
    }
  });
}

// Función para manejar el clic en un enlace
function handleLinkClick(linkContainer, index) {
  linkContainer.addEventListener('click', function(event) {
    // Evita el comportamiento predeterminado del enlace
    event.preventDefault();

    // Oculta todas las secciones y muestra la sección correspondiente
    toggleSection(index);

    // Elimina la clase 'active' de todos los enlaces
    menuActive.forEach(function(menuLink) {
      menuLink.classList.remove('active');
    });

    // Agrega la clase 'active' al enlace actual dentro del contenedor
    linkContainer.querySelector('a').classList.add('active');

    // Cierra Modales abiertos
    closeModal();
  });
}

// ...

// Agrega un evento clic a cada contenedor en el menú principal
menuLinks.forEach(function(linkContainer, index) {
  handleLinkClick(linkContainer, index);
});

// Agrega un evento clic a cada enlace en el menú móvil
menuLinksMovil.forEach(function(link, index) {
  handleLinkClick(link, index);
});

// Obtenemos el elemento del body para manipular el scroll
var body = document.body;

// Obtenemos los elementos necesarios del DOM para la sección 2
var imageFiguresSection2 = document.querySelectorAll('#ilustration_section2 .ilSec2-gridContainer figure');
var modalSection2 = document.querySelector('#ilustration_section2 .modal');
var modalContentSection2 = document.querySelector('#ilustration_section2 .modal-content');
var closeModalSection2 = document.querySelector('#ilustration_section2 .close-modal');

// Obtenemos los elementos necesarios del DOM para la sección 3
var imageFiguresSection3 = document.querySelectorAll('#ilustration_section3 .ilSec3-gridContainer figure');
var modalSection3 = document.querySelector('#ilustration_section3 .modal');
var modalContentSection3 = document.querySelector('#ilustration_section3 .modal-content');
var closeModalSection3 = document.querySelector('#ilustration_section3 .close-modal');

function openModal(imageSrc, modalContent) {
  // Deshabilitar el scroll
  body.style.overflow = 'hidden';

  // Establecer la imagen en el contenido de la modal
  modalContent.src = imageSrc;

  // Hacer visible la modal (el contenedor de la modal)
  modalContent.parentElement.classList.remove('hidden-sectionModal');
  modalContent.parentElement.classList.add('visible-sectionModal');

  // También hacer visible el contenido de la modal
  modalContent.classList.remove('hidden-sectionModalContent');
  modalContent.classList.add('visible-sectionModal');
}


// Event listeners para abrir la modal al hacer clic en una figura en la sección 2
imageFiguresSection2.forEach(function (figure) {
    figure.addEventListener('click', function () {
        var imageSrc = figure.querySelector('img').src;
        openModal(imageSrc, modalContentSection2);
    });
});

// Event listeners para abrir la modal al hacer clic en una figura en la sección 3
imageFiguresSection3.forEach(function (figure) {
    figure.addEventListener('click', function () {
        var imageSrc = figure.querySelector('img').src;
        openModal(imageSrc, modalContentSection3);
    });
});

// Event listener para cerrar la modal al hacer clic fuera de la imagen
document.addEventListener('click', function (e) {
    if (e.target === modalSection2 || e.target === modalSection3) {
        closeModal();
    }
});

// Event listener para cerrar la modal al presionar la tecla "Esc"
document.addEventListener('keydown', function (e) {
  if ((e.key === 'Escape') && (modalSection2.classList.contains('visible-sectionModal') || modalSection3.classList.contains('visible-sectionModal'))) {
      closeModal();
  }
});

// Event listener para cerrar la modal al hacer clic en el botón de cierre en la sección 2
closeModalSection2.addEventListener('click', function () {
    closeModal();
});

// Event listener para cerrar la modal al hacer clic en el botón de cierre en la sección 3
closeModalSection3.addEventListener('click', function () {
    closeModal();
});

// Función para cerrar la modal
function closeModal() {
  // Volver a habilitar el scroll
  body.style.overflow = 'auto';

  modalContentSection2.classList.remove('visible-sectionModal');
  modalContentSection2.classList.add('hidden-sectionModalContent');
  modalSection2.classList.remove('visible-sectionModal');
  modalSection2.classList.add('hidden-sectionModal');
  
  modalContentSection3.classList.remove('visible-sectionModal');
  modalContentSection3.classList.add('hidden-sectionModalContent');
  modalSection3.classList.remove('visible-sectionModal');
  modalSection3.classList.add('hidden-sectionModal');
}

// Código para evitar que las modales se muestren al cargar la página
window.addEventListener('DOMContentLoaded', function () {
    closeModal();
});



 


