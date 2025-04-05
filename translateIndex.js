
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
        but: "Pero... también soy",
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
        button2_project_PumpkinJumpkin: "DESCARGAR",
        text_project_TricbysART: "Desarrollé una web para exhibir mis ilustraciones, tanto digitales como tradicionales. Para su creación, aprendí maquetación, diseño web y animaciones, logrando una presentación atractiva y funcional. También incluye enlaces a mis redes y contacto.",
        button1_project_TricbysART: "VISITAR WEB",
        button2_project_TricbysART: "VER CÓDIGO",
        //SOBRE MI
        title_aboutMeSection:"SOBRE MI",
        inSecAM_textSubContainer:`
            <div class="insSecAM-text">
            <p class="insSecAM-subTitle">¿QUIÉN SOY?</p><br>
            <a class="relevantLetter">H</a>
            <p>ola! Mi nombre es Stivenson, aunque muchas personas me conocen como</p> 
            <a class="highlightText">Tricby. </a> 
            <p>Soy una persona curiosa y creativa, con una gran afinidad por el </p>  
            <a class="highlightText">arte y la tecnología.</a>
            <p>En mis ratos libres suelo dedicarme a proyectos personales como ilustraciones, videos y otros hobbies que me permiten expresarme y seguir aprendiendo. </p>
            <a class="highlightText" target="_blank" href="https://www.youtube.com/channel/UCidwNTmcHwTklWF5R4WgcCw"> MI CANAL DE YOUTUBE </a> 
            </div>

            <div class="insSecAM-text">
            <p class="insSecAM-subTitle">MIS HABILIDADES</p><br>
            <a class="relevantLetter">T</a>
            <p>rabajo principalmente con HTML, CSS y JavaScript, enfocándome en el desarrollo</p> 
            <a class="highlightText">Front-End</a> 
            <p>de sitios web visuales, responsivos y funcionales. Mi proceso creativo es intuitivo: visualizo la estructura en mi mente y luego la traduzco en </p>  
            <a class="highlightText">código,</a>
            <p>dejando que las ideas fluyan y tomen forma naturalmente.</p>
            </div>

            <div class="insSecAM-text">
            <p class="insSecAM-subTitle">¿QUÉ HAGO ACTUALMENTE?</p><br>
            <a class="relevantLetter">A</a>
            <p>ctualmente estoy desarrollando un nuevo juego en el que sigo</p>
            <a class="highlightText">mejorando mis habilidades</a> 
            <p>en lógica y diseño. También estoy estudiando el lenguaje Java, donde he aprendido bastante sobre programación orientada a objetos y he comenzado a explorar conceptos del</p>  
            <a class="highlightText">backend.</a>
            <p>Sigo aprendiendo y creciendo con cada proyecto, y estoy abierto a nuevas oportunidades laborales.</p>
            </div>
        `,

    },
    en: {
        //INTRO
        greeting: "Hi I am",
        full_name: "STIVENSON DAVID MEJIA",
        first_self_title: "Designer & Front-End Developer / Indie Game Creator.",
        but: "But... I'm also",
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
        //ABOUT ME
        title_aboutMeSection:"ABOUT ME",
        inSecAM_textSubContainer:`
            <div class="insSecAM-text">
            <p class="insSecAM-subTitle">WHO AM I?</p><br>
            <a class="relevantLetter">H</a>
            <p>i! My name is Stivenson, although many people know me as</p> 
            <a class="highlightText">Tricby. </a> 
            <p>I'm a curious and creative person with a strong affinity for </p>  
            <a class="highlightText">art and technology.</a>
            <p>In my free time, I enjoy working on personal projects such as illustrations, videos, and other hobbies that allow me to express myself and keep learning. </p>
            <a class="highlightText" target="_blank" href="https://www.youtube.com/channel/UCidwNTmcHwTklWF5R4WgcCw"> MY YOUTUBE CHANNEL </a> 
            </div>

            <div class="insSecAM-text">
            <p class="insSecAM-subTitle">MY SKILLS</p><br>
            <a class="relevantLetter">I </a>
            <p>mainly work with HTML, CSS, and JavaScript, focusing on</p> 
            <a class="highlightText">front-end development</a> 
            <p>to build visual, responsive, and functional websites. My creative process is intuitive: I visualize the structure in my mind and then translate it into </p>  
            <a class="highlightText">code,</a>
            <p>letting the ideas flow and take shape naturally.</p>
            </div>

            <div class="insSecAM-text">
            <p class="insSecAM-subTitle">WHAT AM I DOING NOW?</p><br>
            <a class="relevantLetter">I</a>
            <p>’m currently developing a new game where I continue</p>
            <a class="highlightText">refining my skills</a> 
            <p>in logic and design. I’m also studying the Java language, where I’ve learned a lot about object oriented programming and started exploring backend concepts.</p>  
            <a class="highlightText">I’m always learning,</a>
            <p>growing with each project, and open to new job opportunities.</p>
            </div>
            `,
    }
};

function changeLanguage(language) {
    if (content[language]) {
        //INTRO
        console.log("Contenido del idioma:", content[language]);
        document.getElementById('greeting').textContent = content[language].greeting;
        document.getElementById('full_name').innerText = content[language].full_name;
        document.getElementById('first_self_title').textContent = content[language].first_self_title;
        document.getElementById('but').textContent = content[language].but;
        document.getElementById('second_self_title').textContent = content[language].second_self_title;
        document.getElementById('third_self_subtitle').textContent = content[language].third_self_subtitle;
        document.getElementById('more_button').textContent = content[language].more_button;
        //PROJECTS
        document.getElementById('title_projectSection').childNodes[0].nodeValue = content[language].title_projectSection;
        document.getElementById('text_project_ValorXHora').textContent = content[language].text_project_ValorXHora;
        document.getElementById('button1_project_ValorXHora').textContent = content[language].button1_project_ValorXHora;
        document.getElementById('button2_project_ValorXHora').textContent = content[language].button2_project_ValorXHora;
        document.getElementById('text_project_PumpkinJumpkin').textContent = content[language].text_project_PumpkinJumpkin;
        document.getElementById('button1_project_PumpkinJumpkin').textContent = content[language].button1_project_PumpkinJumpkin;
        document.getElementById('button2_project_PumpkinJumpkin').textContent = content[language].button2_project_PumpkinJumpkin;
        document.getElementById('text_project_TricbysART').textContent = content[language].text_project_TricbysART;
        document.getElementById('button1_project_TricbysART').textContent = content[language].button1_project_TricbysART;
        document.getElementById('button2_project_TricbysART').textContent = content[language].button2_project_TricbysART;
        //ABOUT ME
        document.getElementById('title_aboutMeSection').childNodes[0].nodeValue = content[language].title_aboutMeSection; 
        document.querySelector('.inSecAM-textSubContainer').innerHTML = content[language].inSecAM_textSubContainer  
    } else {
        console.error("Idioma no encontrado:", language);
    }
}