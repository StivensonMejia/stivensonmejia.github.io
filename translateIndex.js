
var isOpen = false;
var languageSelected = "en";

const languageSelectorButton = document.querySelector('.languageIconContainer');
const languageSelectorContainer = document.querySelector('.languageSelector');

const languageSpanish = document.querySelector('#spanish');
const languageEnglish = document.querySelector('#english');

languageSelectorButton.addEventListener('click', function() {
    if (isOpen) {
        closeModalLanguage();
    } else {
        openModalLanguage();
    }
});

languageSpanish.addEventListener('click', function () {
    languageSelected = "es";
    languageSelectorButton.classList.remove('BGusa');
    languageSelectorButton.classList.add('BGcol');
    closeModalLanguage();
    changeLanguage(languageSelected)
});

languageEnglish.addEventListener('click', function () {
    languageSelected = "en";
    languageSelectorButton.classList.remove('BGcol');
    languageSelectorButton.classList.add('BGusa');
    closeModalLanguage();
    changeLanguage(languageSelected)
});

function openModalLanguage() {
    languageSelectorContainer.style.display = 'flex';
    isOpen = true;
}
function closeModalLanguage() {
    languageSelectorButton.classList.remove('colorRed');
    languageSelectorButton.classList.add('colorWhite');
    languageSelectorContainer.style.display = 'none';
    isOpen = false;
}

const content = {
    es: {
        //INTRODUCCION
        greeting: "Hola, soy",
        full_name: "STIVENSON DAVID MEJIA",
        first_self_title: "Diseñador y Desarrollador Front-End / Creador de Juegos Independientes.",
        second_self_title: "Visionario skald de los reinos digitales, herrero de exquisitas leyendas visuales, forjador de mundos pixelados con runas, guardián de las cuerdas líricas, tejedor de códigos encantados, alquimista rúnico de sagas multimedia, conquistador de los vastos fiordos visuales.",
        third_self_subtitle : "Constructor de templos rúnicos del código visual, tallador magistral de frescos digitales, arquitecto de los vastos cosmos binarios, skald de sinfonías intangibles, brujo de lenguajes encantados, guía de epopeyas pixeladas, soberano de la estética de los nueve mundos.",
        more_button: "CONOCE MÁS",
        //PROYECTOS
        title_projectSection: "PROYECTOS",
        text_project_ValorXHora: "Creé una aplicación web para calcular el valor de las horas trabajadas. Permite ingresar horarios y genera tablas con un desglose claro de días, horas y montos, almacenando los datos en localStorage. Durante su desarrollo, aprendí manipulación del DOM y almacenamiento local.",
        button1_project_ValorXHora: "VISITAR WEB",
        button2_project_ValorXHora: "VER CÓDIGO",
        text_project_PumpkinJumpkin: "Desarrollé un juego endless runner con generación procedural de obstáculos, controles fluidos y power-ups que ayudan al jugador a progresar. Durante el desarrollo, mejoré mi lógica de programación y habilidades de depuración de código. También añadí un modo hardcore donde la velocidad aumenta para un mayor desafío. ¡Disponible en ITCH.IO!.",
        button1_project_PumpkinJumpkin: "VISITAR WEB",
        button2_project_PumpkinJumpkin: "IR A DESCARGAR",
        text_project_TricbysART: "Desarrollé una web para exhibir mis ilustraciones, tanto digitales como tradicionales. Para su creación, aprendí maquetación, diseño web y animaciones, logrando una presentación atractiva y funcional. También incluye enlaces a mis redes y contacto.",
        button1_project_TricbysART: "VISITAR WEB",
        button2_project_TricbysART: "VER CÓDIGO",
        //HABILIDADES
        title_skillSection:"HABILIDADES",
        //SOBRE MI
        title_aboutMeSection:"SOBRE MI",
        paragraph1_1: "!H",
        paragraph1_2: "ola de nuevo! Mi nombre es Stivenson pero",
        paragraph1_3: "me puedes decir Tricby.",
        paragraph1_4: "Mi incursión en el mundo de la programación comenzó no hace mucho, empezando con",
        paragraph1_5: "creación de páginas web estáticas y luego adentrándome en la creación de videojuegos.",
        paragraph1_6: "Mi interés por la tecnología ha estado conmigo desde la infancia, y finalmente pude darle rienda suelta gracias a la adquisición de una computadora.",
        //
        paragraph2_1: "A",
        paragraph2_2: "ntes de adentrarme en el mundo de la programación,",
        paragraph2_3: "me dedicaba al arte, creando ilustraciones,",
        paragraph2_4: "dibujos tanto tradicionales como digitales, pinturas y esculturas. Además...",
        paragraph2_5: "inicié un canal en YouTube",
        paragraph2_6: "donde compartía videos de minecraft, recreaba pequeñas historias y construcciones.",
        //
        paragraph3_1: "A",
        paragraph3_2: "ctualmente,",
        paragraph3_3: "trabajo y estudio,",
        paragraph3_4: "pero en mis momentos libres me involucro",
        paragraph3_5: "en la programación y el desarrollo web.",
        paragraph3_6: "También dedico tiempo al dibujo para mantener mi creatividad activa. y espero pronto encontrar oportunidades en la",
        paragraph3_7: "industria tecnológica.",
        //CONTACTAME
        title_section5:"CONTÁCTAME",
    },
    en: {
        //INTRO
        greeting: "Hi I am",
        full_name: "STIVENSON DAVID MEJIA",
        first_self_title: "Designer & Front-End Developer / Indie Game Creator.",
        second_self_title: "Visionary skald of the digital realms, smith of exquisite visual legends, forgemaster of pixel-runed worlds, keeper of the lyrical strings, weaver of enchanted code, rune alchemist of multimedia sagas, conqueror of the vast visual fjords.",
        third_self_subtitle: "Builder of runic temples of visual code, master carver of digital frescoes, architect of the vast binary cosmos, skald of intangible symphonies, sorcerer of enchanted languages, guide of pixelated epics, sovereign of the aesthetics of the nine worlds.",
        more_button: "KNOW MORE",
        //PROJECTS
        title_projectSection: "PROJECTS",
        text_project_ValorXHora: "I created a web application to calculate worked hours' value. It allows users to enter schedules and generates tables with a clear breakdown of days, hours, and amounts, storing data in localStorage. Through this project, I learned DOM manipulation and local storage handling.",
        button1_project_ValorXHora: "VISIT WEBSITE",
        button2_project_ValorXHora: "VIEW CODE",
        text_project_PumpkinJumpkin: "I developed an endless runner game featuring procedurally generated obstacles, fluid controls, and power-ups that help the player progress. While working on it, I improved my programming logic and debugging skills. I also added a hardcore mode where speed increases for an extra challenge. Available on ITCH.IO!.",
        button1_project_PumpkinJumpkin: "VISIT WEBSITE",
        button2_project_PumpkinJumpkin: "GO DOWNLOAD",
        text_project_TricbysART: "I developed a website to showcase my illustrations, both digital and traditional. Through this project, I learned layout design, web styling, and animations to create an appealing and functional display. It also includes links to my social media and contact information.",
        button1_project_TricbysART: "VISIT WEBSITE",
        button2_project_TricbysART: "VIEW CODE",
        //HABILIDADES
        title_skillSection:"SKILLS",
        //ABOUT ME
        title_aboutMeSection:"ABOUT ME",
        paragraph1_1: "H",
        paragraph1_2: "i again! My name is Stivenson but",
        paragraph1_3: "can you tell me Tricby. ",
        paragraph1_4: "My foray into the world of programming began not long ago, starting with",
        paragraph1_5: "the creation of static web pages and then entering into the creation of video games.",
        paragraph1_6: "My interest in technology has been with me since childhood, and I was finally able to give it free rein thanks to the acquisition of a computer.",
        //
        paragraph2_1: "B",
        paragraph2_2: "efore entering the world of programming,",
        paragraph2_3: "I was dedicated to art, creating illustrations,",
        paragraph2_4: "both traditional and digital drawings, paintings and sculptures. Also...",
        paragraph2_5: "I started a YouTube channel",
        paragraph2_6: "where I shared Minecraft videos, recreated little stories and constructions.",
        //
        paragraph3_1: "C",
        paragraph3_2: "urrently",
        paragraph3_3: "I work and study,",
        paragraph3_4: "but in my free time I get involved in the",
        paragraph3_5: "programming and web development.",
        paragraph3_6: "I also spend time drawing to keep my creativity active. and I hope to soon find opportunities in",
        paragraph3_7: "the technology industry.",
        //CONTACT ME
        title_section5:"CONTACT ME",
    }
};

function changeLanguage(language) {
    if (content[language]) {
        //INTRO
        console.log("Contenido del idioma:", content[language]);
        document.getElementById('greeting').textContent = content[language].greeting;
        document.getElementById('full_name').innerText = content[language].full_name;
        document.getElementById('first_self_title').textContent = content[language].first_self_title;
        document.getElementById('second_self_title').textContent = content[language].second_self_title;
        document.getElementById('third_self_subtitle').textContent = content[language].third_self_subtitle;
        document.getElementById('more_button').textContent = content[language].more_button;
        //PROJECTS
        document.getElementById('title_projectSection').textContent = content[language].title_projectSection;
        document.getElementById('text_project_ValorXHora').textContent = content[language].text_project_ValorXHora;
        document.getElementById('button1_project_ValorXHora').textContent = content[language].button1_project_ValorXHora;
        document.getElementById('button2_project_ValorXHora').textContent = content[language].button2_project_ValorXHora;
        document.getElementById('text_project_PumpkinJumpkin').textContent = content[language].text_project_PumpkinJumpkin;
        document.getElementById('button1_project_PumpkinJumpkin').textContent = content[language].button1_project_PumpkinJumpkin;
        document.getElementById('button2_project_PumpkinJumpkin').textContent = content[language].button2_project_PumpkinJumpkin;
        document.getElementById('text_project_TricbysART').textContent = content[language].text_project_TricbysART;
        document.getElementById('button1_project_TricbysART').textContent = content[language].button1_project_TricbysART;
        document.getElementById('button2_project_TricbysART').textContent = content[language].button2_project_TricbysART;
        //HABILIDADES
        document.getElementById('title_skillSection').textContent = content[language].title_skillSection;
        //ABOUT ME
        document.getElementById('title_aboutMeSection').textContent = content[language].title_aboutMeSection;
        document.getElementById('paragraph1_1').textContent = content[language].paragraph1_1;
        document.getElementById('paragraph1_2').textContent = content[language].paragraph1_2;
        document.getElementById('paragraph1_3').textContent = content[language].paragraph1_3;
        document.getElementById('paragraph1_4').textContent = content[language].paragraph1_4;
        document.getElementById('paragraph1_5').textContent = content[language].paragraph1_5;
        document.getElementById('paragraph1_6').textContent = content[language].paragraph1_6;
        //
        document.getElementById('paragraph2_1').textContent = content[language].paragraph2_1;
        document.getElementById('paragraph2_2').textContent = content[language].paragraph2_2;
        document.getElementById('paragraph2_3').textContent = content[language].paragraph2_3;
        document.getElementById('paragraph2_4').textContent = content[language].paragraph2_4;
        document.getElementById('paragraph2_5').textContent = content[language].paragraph2_5;
        document.getElementById('paragraph2_6').textContent = content[language].paragraph2_6; 
        //
        document.getElementById('paragraph3_1').textContent = content[language].paragraph3_1;
        document.getElementById('paragraph3_2').textContent = content[language].paragraph3_2;
        document.getElementById('paragraph3_3').textContent = content[language].paragraph3_3;
        document.getElementById('paragraph3_4').textContent = content[language].paragraph3_4;
        document.getElementById('paragraph3_5').textContent = content[language].paragraph3_5;
        document.getElementById('paragraph3_6').textContent = content[language].paragraph3_6;     
        document.getElementById('paragraph3_7').textContent = content[language].paragraph3_7;  
        //CONTACTAME
        document.getElementById('title_section5').textContent = content[language].title_section5;   
    } else {
        console.error("Idioma no encontrado:", language);
    }
}