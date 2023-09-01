// Obtén todos los enlaces en el menú vertical
const menuLinks = document.querySelectorAll('.header_subMenu a');

// Obtén todas las secciones por su ID
const sections = [
  document.getElementById('ilustration_section1'),
  document.getElementById('ilustration_section2'),
  document.getElementById('ilustration_section3'),
  document.getElementById('ilustration_section4'),
  document.getElementById('ilustration_section5'),
  document.getElementById('ilustration_section6'),
];

// Agrega un evento clic a cada enlace
menuLinks.forEach(function(link, index) {
  link.addEventListener('click', function(event) {
    // Evita el comportamiento predeterminado del enlace
    event.preventDefault();

    // Oculta todas las secciones
    sections.forEach(function(section) {
      section.style.display = 'none';
    });

    // Elimina la clase 'active' de todos los enlaces
    menuLinks.forEach(function(menuLink) {
      menuLink.classList.remove('active');
    });

    // Muestra la sección correspondiente al enlace
    sections[index].style.display = 'block';

    // Agrega la clase 'active' al enlace actual
    link.classList.add('active');
  });
});

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

// Función para abrir la modal con la imagen clickeada
function openModal(imageSrc, modalContent) {
    modalContent.src = imageSrc;
    modalContent.parentElement.style.display = 'block';
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
    if ((e.key === 'Escape') && (modalSection2.style.display === 'block' || modalSection3.style.display === 'block')) {
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
    modalSection2.style.display = 'none';
    modalSection3.style.display = 'none';
}

// Código para evitar que las modales se muestren al cargar la página
window.addEventListener('DOMContentLoaded', function () {
    closeModal();
});




function applyMenuFunctionality() {
  // Obtén una referencia al elemento del span y al header_subMenu
  const emojiSpan = document.getElementById("emojiSpan");
  const headerSubMenu = document.querySelector(".header_subMenu");

  // Agrega un controlador de eventos al span para el clic
  emojiSpan.addEventListener("click", function() {
      // Comprueba si el submenú está oculto y, si lo está, muéstralo; de lo contrario, ocúltalo
      if (headerSubMenu.style.display === "none" || headerSubMenu.style.display === "") {
          headerSubMenu.style.display = "flex";
      } else {
          headerSubMenu.style.display = "none";
      }
  });
}

// Llamar a la función al cargar la página
applyMenuFunctionality();

// Controlador de evento para redimensionar la pantalla
window.addEventListener("resize", function() {
  if (window.innerWidth < 1200) {
      // Si el tamaño de la ventana es menor a 1200, recargar la página
      window.location.reload();
  }
});
 


