
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
        title_section2: "PROYECTOS",
        text_project1: "He desarrollado un juego donde controlarás a un pequeño ser con cabeza de calabaza mientras corre sin parar, esquivando obstáculos generados aleatoriamente en un mundo lleno de peligros. Disponible en ITCH.IO",
        button1_project1: "VER PÁGINA WEB",
        button2_project1: "IR A DESCARGAR",
        text_project2: "Te invito a explorar mi página web de artista, donde podrás encontrar una amplia selección de mis ilustraciones, tanto digitales como tradicionales, y mucho más. si te gusta mi trabajo puedes seguirme en mis redes o contactarme.",
        button1_project2: "VER CÓDIGO",
        button2_project2: "VISITAR WEB",
        //HABILIDADES
        title_section3:"HABILIDADES",
        //SOBRE MI
        title_section4:"SOBRE MI",
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
        title_section2: "PROJECTS",
        text_project1: "I have developed a game where you will control a small being with a pumpkin head while it runs non-stop, avoiding randomly generated obstacles in a world full of dangers. Available on ITCH.IO",
        button1_project1: "SEE WEBSITE",
        button2_project1: "GO DOWNLOAD",
        text_project2: "I invite you to explore my artist website, where you can find a wide selection of my illustrations, both digital and traditional, and much more. If you like my work you can follow me on my networks or contact me.",
        button1_project2: "SEE CODE",
        button2_project2: "VISIT WEBSITE",
        //HABILIDADES
        title_section3:"SKILLS",
        //ABOUT ME
        title_section4:"ABOUT ME",
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
        document.getElementById('title_section2').textContent = content[language].title_section2;
        document.getElementById('text_project1').textContent = content[language].text_project1;
        document.getElementById('button1_project1').textContent = content[language].button1_project1;
        document.getElementById('button2_project1').textContent = content[language].button2_project1;
        document.getElementById('text_project2').textContent = content[language].text_project2;
        document.getElementById('button1_project2').textContent = content[language].button1_project2;
        document.getElementById('button2_project2').textContent = content[language].button2_project2;
        //HABILIDADES
        document.getElementById('title_section3').textContent = content[language].title_section3;
        //ABOUT ME
        document.getElementById('title_section4').textContent = content[language].title_section4;
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