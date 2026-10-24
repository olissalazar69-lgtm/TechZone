function mostrarMensajeJS() {
    document.getElementById("mensajeJS").textContent =
        window.techzoneTexto(
            "¡Excelente! JavaScript está funcionando correctamente.",
            "Great! JavaScript is working correctly."
        );
}

function agregarProducto(nombre) {
    alert(window.techzoneTexto("🛒 Has agregado ", "🛒 Added ") + nombre +
        window.techzoneTexto(" al carrito.", " to the cart."));
}

if (window.jQuery) {
    window.jQuery(function () {
        window.jQuery("#botonJQ").click(function () {
            window.jQuery("#mensajeJQ").slideToggle(500);
        });
    });
}

function calificarQuiz() {
    const respuestas = {
        q1: "c",
        q2: "a",
        q3: "a",
        q4: "b",
        q5: "a",
        q6: "a",
        q7: "b",
        q8: "a"
    };
    let puntos = 0;

    for (const pregunta in respuestas) {
        const respuesta = document.querySelector(
            'input[name="' + pregunta + '"]:checked'
        );
        if (respuesta && respuesta.value === respuestas[pregunta]) puntos++;
    }

    const resultado = document.getElementById("resultado");
    resultado.style.display = "block";
    if (puntos >= 6) {
        resultado.className = "resultado correcto";
        resultado.textContent = window.techzoneTexto(
            "🎉 ¡Excelente! Obtuviste ", "🎉 Excellent! You got "
        ) + puntos + window.techzoneTexto(
            " de 8 respuestas correctas.", " out of 8 answers correct."
        );
    } else {
        resultado.className = "resultado incorrecto";
        resultado.textContent = window.techzoneTexto(
            "📚 Obtuviste ", "📚 You got "
        ) + puntos + window.techzoneTexto(
            " de 8. ¡Sigue estudiando!", " out of 8. Keep studying!"
        );
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const productCarousel = document.getElementById("productCarousel");
    if (productCarousel) {
        const slides = Array.from(productCarousel.querySelectorAll(".product-slide"));
        const indicators = Array.from(
            productCarousel.querySelectorAll("[data-carousel-slide]")
        );
        let currentSlide = slides.findIndex((slide) => slide.classList.contains("active"));
        if (currentSlide < 0) currentSlide = 0;

        function mostrarProducto(index) {
            currentSlide = (index + slides.length) % slides.length;
            slides.forEach((slide, slideIndex) => {
                const activo = slideIndex === currentSlide;
                slide.classList.toggle("active", activo);
                slide.setAttribute("aria-hidden", String(!activo));
                slide.inert = !activo;
            });
            indicators.forEach((indicator, indicatorIndex) => {
                const activo = indicatorIndex === currentSlide;
                indicator.classList.toggle("active", activo);
                if (activo) {
                    indicator.setAttribute("aria-current", "true");
                } else {
                    indicator.removeAttribute("aria-current");
                }
            });
        }

        productCarousel.addEventListener("click", (event) => {
            const control = event.target.closest("[data-carousel-direction], [data-carousel-slide]");
            if (!control || !productCarousel.contains(control)) return;

            if (control.hasAttribute("data-carousel-direction")) {
                mostrarProducto(currentSlide + Number(control.dataset.carouselDirection));
            } else {
                mostrarProducto(Number(control.dataset.carouselSlide));
            }
        });

        productCarousel.addEventListener("keydown", (event) => {
            if (event.key === "ArrowRight") {
                mostrarProducto(currentSlide + 1);
            } else if (event.key === "ArrowLeft") {
                mostrarProducto(currentSlide - 1);
            }
        });

        mostrarProducto(currentSlide);
    }

    const translateButton = document.getElementById("btnIdioma");
    const translations = {
        "Inicio": "Home",
        "Productos": "Products",
        "Hosting y Dominios": "Hosting & Domains",
        "Cuestionario": "Quiz",
        "formulario": "Contact form",
        "Formulario": "Contact form",
        "google": "Google",
        "🌙 Modo oscuro": "🌙 Dark mode",
        "☀️ Modo claro": "☀️ Light mode",
        "Cambiar tema": "Change theme",
        "Cambiar a modo claro": "Switch to light mode",
        "Cambiar a modo oscuro": "Switch to dark mode",
        "TECNOLOGÍA DEL FUTURO": "TECHNOLOGY OF THE FUTURE",
        "La tecnología que": "The technology you",
        "necesitas": "need",
        "Bienvenido a TechZone, un sitio dedicado a la tecnología, innovación y aprendizaje sobre desarrollo web.": "Welcome to TechZone, a site dedicated to technology, innovation, and learning about web development.",
        "Ver productos": "View products",
        "Aprender": "Learn",
        "BIENVENIDO A TECHZONE": "WELCOME TO TECHZONE",
        "Tecnología para": "Technology for",
        "todos": "everyone",
        "Explora productos tecnológicos y aprende sobre las tecnologías utilizadas en el desarrollo web.": "Explore technology products and learn about the technologies used in web development.",
        "Conoce nuestros productos tecnológicos.": "Discover our technology products.",
        "Aprende cómo funciona JavaScript.": "Learn how JavaScript works.",
        "Conoce esta biblioteca de JavaScript.": "Learn about this JavaScript library.",
        "Aprende sobre intercambio de datos.": "Learn about data exchange.",
        "Aprende tecnología de forma interactiva": "Learn technology interactively",
        "JavaScript, jQuery, JSON, Hosting y Dominios.": "JavaScript, jQuery, JSON, hosting, and domains.",
        "Tecnología, innovación y aprendizaje.": "Technology, innovation, and learning.",
        "PRODUCTOS": "PRODUCTS",
        "Nuestros": "Our",
        "productos": "products",
        "Tecnología para estudiar, trabajar, jugar y disfrutar.": "Technology for studying, working, gaming, and enjoying.",
        "Computadora portátil para estudiar y trabajar.": "A laptop for studying and working.",
        "Teléfono inteligente para comunicación y entretenimiento.": "A smartphone for communication and entertainment.",
        "Audífonos": "Headphones",
        "Audífonos para música y entretenimiento.": "Headphones for music and entertainment.",
        "Teclado Gamer": "Gaming Keyboard",
        "Teclado diseñado para videojuegos.": "Keyboard designed for video games.",
        "Comprar": "Buy",
        "PÁGINA 1": "PAGE 1",
        "¿Qué es": "What is",
        "El lenguaje que agrega interacción y comportamiento a las páginas web.": "The language that adds interaction and behavior to web pages.",
        "¿Qué es JavaScript?": "What is JavaScript?",
        "JavaScript es un lenguaje de programación utilizado principalmente para crear páginas web interactivas.": "JavaScript is a programming language mainly used to create interactive web pages.",
        "Permite responder a las acciones del usuario, modificar contenido, mostrar mensajes, realizar cálculos y crear diferentes efectos.": "It can respond to user actions, modify content, display messages, perform calculations, and create different effects.",
        "HTML, CSS y JavaScript": "HTML, CSS, and JavaScript",
        "Tecnología": "Technology",
        "Función": "Purpose",
        "Define la estructura de la página.": "Defines the page structure.",
        "Define el diseño y apariencia.": "Defines the design and appearance.",
        "Agrega comportamiento e interacción.": "Adds behavior and interaction.",
        "Conceptos básicos": "Basic Concepts",
        "Variables": "Variables",
        "Permiten almacenar información.": "They store information.",
        "Funciones": "Functions",
        "Son bloques de código que realizan una determinada tarea.": "They are blocks of code that perform a specific task.",
        "Eventos": "Events",
        "Son acciones que ocurren en una página, como hacer clic o pasar el mouse.": "They are actions that happen on a page, such as clicking or hovering.",
        "Ejemplo de código JavaScript": "JavaScript Code Example",
        "Este código crea una función llamada": "This code creates a function called",
        "Cuando se ejecuta, cambia el contenido de un elemento HTML.": "When it runs, it changes the content of an HTML element.",
        "Ejemplo interactivo": "Interactive Example",
        "Ejecutar JavaScript": "Run JavaScript",
        "Fuente": "Source",
        "MDN Web Docs y W3Schools.": "MDN Web Docs and W3Schools.",
        "PÁGINA 2": "PAGE 2",
        "¿Qué es jQuery?": "What is jQuery?",
        "jQuery es una biblioteca de JavaScript creada para facilitar tareas comunes en el desarrollo de páginas web.": "jQuery is a JavaScript library created to simplify common web development tasks.",
        "¿Por qué nació jQuery?": "Why was jQuery created?",
        "jQuery nació para simplificar tareas como seleccionar elementos HTML, trabajar con eventos, crear animaciones y manipular el contenido de las páginas.": "jQuery was created to simplify tasks such as selecting HTML elements, handling events, creating animations, and manipulating page content.",
        "Sintaxis básica": "Basic Syntax",
        "El símbolo": "The symbol",
        "se utiliza normalmente para seleccionar elementos y trabajar con ellos.": "is commonly used to select and work with elements.",
        "Ventajas y desventajas": "Advantages and Disadvantages",
        "Ventajas": "Advantages",
        "Sintaxis sencilla.": "Simple syntax.",
        "Facilita algunos efectos.": "Makes some effects easier.",
        "Simplifica algunos eventos.": "Simplifies some events.",
        "Desventajas": "Disadvantages",
        "Necesita una biblioteca externa.": "It requires an external library.",
        "Muchas tareas actualmente pueden realizarse con JavaScript moderno.": "Many tasks can now be done with modern JavaScript.",
        "Haz clic en el botón para mostrar una animación utilizando jQuery.": "Click the button to show an animation using jQuery.",
        "Mostrar / Ocultar": "Show / Hide",
        "¡Este mensaje utiliza jQuery!": "This message uses jQuery!",
        "JavaScript vs jQuery": "JavaScript vs. jQuery",
        "PÁGINA 3": "PAGE 3",
        "JavaScript Object Notation": "JavaScript Object Notation",
        "JSON significa JavaScript Object Notation. Es un formato utilizado para representar e intercambiar información.": "JSON stands for JavaScript Object Notation. It is a format used to represent and exchange information.",
        "Es muy utilizado para comunicar aplicaciones web con servidores y APIs.": "It is widely used to connect web applications with servers and APIs.",
        "Estructura de JSON": "JSON Structure",
        "JSON utiliza pares de clave y valor.": "JSON uses key-value pairs.",
        "Arreglos": "Arrays",
        "Objeto JavaScript vs JSON": "JavaScript Object vs. JSON",
        "Objeto JavaScript": "JavaScript Object",
        "¿Cómo utilizan JSON las páginas web?": "How do web pages use JSON?",
        "Una aplicación puede solicitar información a un servidor. El servidor puede enviar los datos en formato JSON y JavaScript puede recibirlos y mostrarlos en la página.": "An application can request information from a server. The server can send data in JSON format, and JavaScript can receive and display it on the page.",
        "PÁGINA 4": "PAGE 4",
        "Hosting y": "Hosting &",
        "¿Cómo se pone una página web en Internet?": "How do you put a website on the Internet?",
        "¿Qué es Web Hosting?": "What is web hosting?",
        "El Web Hosting es un servicio que proporciona espacio en un servidor para almacenar los archivos de una página web.": "Web hosting is a service that provides space on a server to store a website's files.",
        "Hosting compartido": "Shared Hosting",
        "Varios sitios web comparten los recursos de un mismo servidor.": "Multiple websites share the resources of the same server.",
        "Es un servidor virtual que proporciona recursos asignados.": "It is a virtual server with allocated resources.",
        "Hosting en la nube": "Cloud Hosting",
        "Utiliza recursos distribuidos entre diferentes servidores.": "It uses resources distributed across different servers.",
        "¿Qué es Vercel?": "What is Vercel?",
        "Vercel es una plataforma que permite desplegar sitios web y aplicaciones. Puede conectarse con GitHub para publicar proyectos.": "Vercel is a platform for deploying websites and applications. It can connect to GitHub to publish projects.",
        "¿Qué es un dominio?": "What is a domain?",
        "Un dominio es el nombre que utilizamos para acceder a un sitio web.": "A domain is the name we use to access a website.",
        "Subdominio:": "Subdomain:",
        "Nombre:": "Name:",
        "Propagación DNS": "DNS Propagation",
        "DNS permite relacionar un dominio con la dirección donde se encuentra un sitio web.": "DNS links a domain to the address where a website is hosted.",
        "Usuario": "User",
        "Servidor": "Server",
        "Página Web": "Web Page",
        "REPASO": "REVIEW",
        "Web": "Web",
        "Comprueba cuánto aprendiste.": "Check how much you have learned.",
        "1. ¿Qué lenguaje agrega comportamiento a una página web?": "1. Which language adds behavior to a web page?",
        "2. ¿Qué significa JSON?": "2. What does JSON stand for?",
        "3. ¿Qué símbolo se utiliza normalmente en jQuery?": "3. Which symbol is commonly used in jQuery?",
        "4. ¿Qué es un dominio?": "4. What is a domain?",
        "Un lenguaje de programación": "A programming language",
        "El nombre para acceder a un sitio web": "The name used to access a website",
        "5. ¿Qué hace principalmente el Web Hosting?": "5. What is the main purpose of web hosting?",
        "Almacena archivos de un sitio web": "It stores website files",
        "Crea logotipos": "It creates logos",
        "Crea videos": "It creates videos",
        "6. ¿Qué lenguaje define la estructura?": "6. Which language defines the structure?",
        "7. ¿Qué tecnología controla el diseño?": "7. Which technology controls the design?",
        "8. ¿Cuál es un ejemplo de TLD?": "8. Which is an example of a TLD?",
        "Calificar cuestionario": "Submit Quiz",
        "Contáctanos": "Contact Us",
        "Envíanos tu mensaje y nos pondremos en contacto contigo.": "Send us a message and we will get back to you.",
        "Nombre:": "Name:",
        "Email:": "Email:",
        "Mensaje:": "Message:",
        "Escribe tu nombre": "Enter your name",
        "Escribe tu correo": "Enter your email",
        "Escribe tu mensaje": "Enter your message",
        "Enviar mensaje": "Send Message",
        "GUÍA DIGITAL": "DIGITAL GUIDE",
        "15 herramientas de": "15 tools from",
        "Conoce herramientas que ayudan a estudiar, organizar actividades, colaborar y crear proyectos digitales.": "Discover tools that help you study, organize activities, collaborate, and create digital projects.",
        "Explorar herramientas": "Explore tools",
        "Diapositiva 1": "Slide 1",
        "Diapositiva 2": "Slide 2",
        "Diapositiva 3": "Slide 3",
        "Estudiantes trabajando en equipo": "Students working as a team",
        "Aprende y colabora": "Learn and collaborate",
        "Comparte documentos y trabaja con otras personas en tiempo real.": "Share documents and work with others in real time.",
        "Persona usando una computadora": "Person using a computer",
        "Organiza tus ideas": "Organize your ideas",
        "Utiliza documentos, hojas de cálculo, calendarios y notas digitales.": "Use documents, spreadsheets, calendars, and digital notes.",
        "Espacio de trabajo moderno": "Modern workspace",
        "Crea proyectos digitales": "Create digital projects",
        "Diseña presentaciones, formularios y sitios web sencillos.": "Design presentations, forms, and simple websites.",
        "Anterior": "Previous",
        "Siguiente": "Next",
        "TECNOLOGÍA PARA TODOS": "TECHNOLOGY FOR EVERYONE",
        "¿Qué son estas herramientas?": "What are these tools?",
        "Son servicios digitales que ayudan a crear archivos, comunicarse, planificar actividades y colaborar por Internet. Muchas ofrecen una versión básica sin costo, pero algunas capacidades, límites o funciones para instituciones educativas dependen del tipo de cuenta y del plan contratado.": "These are digital services that help you create files, communicate, plan activities, and collaborate online. Many offer a free basic version, but some features, limits, or education options depend on the account type and plan.",
        "Importante": "Important",
        "No todas las funciones son gratuitas. Comprueba qué incluye tu cuenta escolar.": "Not all features are free. Check what is included with your school account.",
        "CATÁLOGO": "CATALOG",
        "Explora las 15 herramientas": "Explore the 15 tools",
        "Busca por nombre o por la actividad que necesitas realizar.": "Search by name or by the task you need to do.",
        "Ej.: documentos, reuniones, notas...": "E.g., documents, meetings, notes...",
        "Buscar herramientas": "Search tools",
        "Limpiar": "Clear",
        "Cómo se usa:": "How to use:",
        "Abrir herramienta": "Open tool",
        "Almacena archivos en la nube y permite compartirlos con otras personas.": "Stores files in the cloud and lets you share them with others.",
        "inicia sesión, pulsa “Nuevo” y sube un archivo o crea una carpeta.": "sign in, click “New,” and upload a file or create a folder.",
        "Crea y edita documentos de texto.": "Create and edit text documents.",
        "crea un documento, escribe el contenido y compártelo para colaborar.": "create a document, write its content, and share it to collaborate.",
        "Organiza datos en filas y columnas y realiza cálculos.": "Organize data in rows and columns and perform calculations.",
        "crea una hoja, introduce datos y utiliza fórmulas para calcular resultados.": "create a spreadsheet, enter data, and use formulas to calculate results.",
        "Diseña presentaciones con diapositivas.": "Design slide presentations.",
        "crea una presentación y agrega títulos, texto, imágenes y gráficos.": "create a presentation and add titles, text, images, and charts.",
        "Crea encuestas, cuestionarios y formularios.": "Create surveys, quizzes, and forms.",
        "agrega preguntas, comparte el enlace y revisa las respuestas recopiladas.": "add questions, share the link, and review the collected responses.",
        "Realiza reuniones y videollamadas en línea.": "Hold online meetings and video calls.",
        "crea una reunión o entra con un enlace proporcionado por otra persona.": "create a meeting or join using a link provided by someone else.",
        "Organiza clases, materiales, tareas y entregas escolares.": "Organize classes, materials, assignments, and school submissions.",
        "entra a una clase con tu cuenta escolar, revisa las tareas y entrega los trabajos.": "join a class with your school account, review assignments, and submit your work.",
        "Envía, recibe y organiza correos electrónicos.": "Send, receive, and organize email.",
        "pulsa “Redactar”, escribe destinatario y asunto, y envía el correo.": "click “Compose,” enter a recipient and subject, and send the email.",
        "Programa eventos, actividades y recordatorios.": "Schedule events, activities, and reminders.",
        "selecciona una fecha, crea un evento y añade hora y recordatorio.": "select a date, create an event, and add a time and reminder.",
        "Construye sitios web sencillos sin tener que programar todo desde cero.": "Build simple websites without having to code everything from scratch.",
        "elige un diseño, añade páginas y contenido, y publica el sitio.": "choose a design, add pages and content, and publish the site.",
        "Guarda notas, listas e ideas rápidas.": "Save notes, lists, and quick ideas.",
        "crea una nota, escribe la idea y, si hace falta, agrega color o recordatorio.": "create a note, write down your idea, and add a color or reminder if needed.",
        "Busca lugares y consulta rutas e indicaciones.": "Find places and check routes and directions.",
        "escribe un lugar en el buscador y elige la opción de cómo llegar.": "enter a place in the search box and choose the directions option.",
        "Traduce palabras, frases y textos entre idiomas.": "Translate words, phrases, and texts between languages.",
        "selecciona el idioma original y el de destino, e introduce el texto.": "select the source and target languages, then enter the text.",
        "Organiza y consulta fotografías y videos respaldados en tu cuenta.": "Organize and view photos and videos backed up to your account.",
        "inicia sesión y revisa o administra las fotos que hayas respaldado.": "sign in and view or manage the photos you have backed up.",
        "Asistente de inteligencia artificial para explorar ideas y comprender temas.": "An artificial intelligence assistant for exploring ideas and understanding topics.",
        "escribe una pregunta clara y revisa críticamente la respuesta antes de usarla.": "write a clear question and critically review the answer before using it.",
        "Ayuda a estudiar y organizar información a partir de fuentes que proporcionas.": "Helps you study and organize information from sources you provide.",
        "crea un cuaderno, añade fuentes permitidas y haz preguntas sobre ellas.": "create a notebook, add permitted sources, and ask questions about them.",
        "TechZone | Inicio": "TechZone | Home",
        "TechZone | Productos": "TechZone | Products",
        "TechZone | JavaScript": "TechZone | JavaScript",
        "TechZone | jQuery": "TechZone | jQuery",
        "TechZone | JSON": "TechZone | JSON",
        "TechZone | Hosting y Dominios": "TechZone | Hosting & Domains",
        "TechZone | Cuestionario": "TechZone | Quiz",
        "TechZone | Formulario": "TechZone | Contact Form",
        "TechZone | Google Tools": "TechZone | Google Tools",
        "No se encontraron herramientas con esa búsqueda.": "No tools were found for that search.",
        "¿Todas son completamente gratuitas?": "Are they all completely free?",
        "No necesariamente. Varias ofrecen funciones básicas sin costo, mientras que el acceso, los límites y las funciones avanzadas pueden variar según el país, la edad, la cuenta personal o escolar y el plan de Google Workspace for Education. Consulta la información oficial antes de afirmar que una función es premium o gratuita.": "Not necessarily. Several offer basic features at no cost, while access, limits, and advanced features may vary by country, age, personal or school account, and Google Workspace for Education plan. Check the official information before claiming a feature is premium or free.",
        "Fuentes de consulta": "References",
        "Google for Education: ediciones y herramientas disponibles": "Google for Education: available editions and tools",
        "Google for Education: comparación de ediciones": "Google for Education: compare editions",
        "Aprende, explora y crea con tecnología.": "Learn, explore, and create with technology.",
        "Proyecto educativo · 2026": "Educational project · 2026",
        "Volver arriba": "Back to top",
        "Abrir menú": "Open menu",
        "Cambiar idioma": "Change language",
        "carrusel": "carousel",
        "diapositiva": "slide",
        "Productos destacados": "Featured products",
        "Seleccionar producto": "Select product",
        "Producto anterior": "Previous product",
        "Siguiente producto": "Next product",
        "Producto 1 de 4": "Product 1 of 4",
        "Producto 2 de 4": "Product 2 of 4",
        "Producto 3 de 4": "Product 3 of 4",
        "Producto 4 de 4": "Product 4 of 4",
        "Mostrar Laptop Pro": "Show Laptop Pro",
        "Mostrar Smartphone": "Show Smartphone",
        "Mostrar Audífonos": "Show Headphones",
        "Mostrar Teclado Gamer": "Show Gaming Keyboard"
    };
    const attributeTranslations = {
        "Cambiar idioma": "Change language",
        "Cambiar tema": "Change theme",
        "Cambiar a modo claro": "Switch to light mode",
        "Cambiar a modo oscuro": "Switch to dark mode",
        "Escribe tu nombre": "Enter your name",
        "Escribe tu correo": "Enter your email",
        "Escribe tu mensaje": "Enter your message",
        "Buscar herramientas": "Search tools",
        "Abrir menú": "Open menu",
        "Diapositiva 1": "Slide 1",
        "Diapositiva 2": "Slide 2",
        "Diapositiva 3": "Slide 3",
        "carrusel": "carousel",
        "diapositiva": "slide",
        "Productos destacados": "Featured products",
        "Seleccionar producto": "Select product",
        "Producto anterior": "Previous product",
        "Siguiente producto": "Next product",
        "Producto 1 de 4": "Product 1 of 4",
        "Producto 2 de 4": "Product 2 of 4",
        "Producto 3 de 4": "Product 3 of 4",
        "Producto 4 de 4": "Product 4 of 4",
        "Mostrar Laptop Pro": "Show Laptop Pro",
        "Mostrar Smartphone": "Show Smartphone",
        "Mostrar Audífonos": "Show Headphones",
        "Mostrar Teclado Gamer": "Show Gaming Keyboard",
        "Estudiantes trabajando en equipo": "Students working as a team",
        "Persona usando una computadora": "Person using a computer",
        "Espacio de trabajo moderno": "Modern workspace",
        "Anterior": "Previous",
        "Siguiente": "Next",
        "Volver arriba": "Back to top"
    };

    function obtenerIdioma() {
        return localStorage.getItem("techzone-idioma") === "en" ? "en" : "es";
    }

    window.techzoneTexto = (espanol, ingles) =>
        obtenerIdioma() === "en" ? ingles : espanol;

    function traducirContenido(lang) {
        const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
            const parent = node.parentElement;
            if (!parent || parent.closest("script, style, pre, code, #btnIdioma, #btnTema")) continue;
            if (node.__techzoneOriginal === undefined) {
                node.__techzoneOriginal = node.nodeValue;
            }
            const original = node.__techzoneOriginal;
            const texto = original.trim().replace(/\s+/g, " ");
            if (!texto) continue;
            const traduccion = lang === "en" ? translations[texto] : null;
            if (traduccion) {
                const inicio = original.match(/^\s*/)[0];
                const final = original.match(/\s*$/)[0];
                node.nodeValue = inicio + traduccion + final;
            } else if (lang === "es") {
                node.nodeValue = original;
            }
        }

        document.querySelectorAll(
            "[placeholder], [title], [aria-label], [aria-roledescription], img[alt]"
        ).forEach((element) => {
            ["placeholder", "title", "aria-label", "aria-roledescription", "alt"].forEach((attribute) => {
                if (!element.hasAttribute(attribute)) return;
                element.__techzoneAttributes = element.__techzoneAttributes || {};
                if (element.__techzoneAttributes[attribute] === undefined) {
                    element.__techzoneAttributes[attribute] = element.getAttribute(attribute);
                }
                const original = element.__techzoneAttributes[attribute];
                const translated = lang === "en" ? attributeTranslations[original] : null;
                element.setAttribute(attribute, translated || original);
            });
        });
    }

    function actualizarBotonIdioma(lang) {
        lang = lang === "en" ? "en" : "es";
        document.documentElement.lang = lang;
        localStorage.setItem("techzone-idioma", lang);
        traducirContenido(lang);
        if (translateButton) {
            translateButton.disabled = false;
            translateButton.textContent = lang === "en" ? "🌐 Español" : "🌐 English";
            translateButton.title = lang === "en" ? "Switch to Spanish" : "Cambiar a inglés";
            translateButton.setAttribute(
                "aria-label",
                lang === "en" ? "Switch language to Spanish" : "Cambiar idioma a inglés"
            );
        }
        document.title = lang === "en"
            ? translations[titleEnEspanol] || titleEnEspanol
            : titleEnEspanol;
    }

    const titleEnEspanol = document.title;
    const idiomaActual = obtenerIdioma();
    actualizarBotonIdioma(idiomaActual);
    if (translateButton) {
        translateButton.addEventListener("click", () => {
            const lang = obtenerIdioma() === "en" ? "es" : "en";
            actualizarBotonIdioma(lang);
        });
    }

    const body = document.body;
    const root = document.documentElement;
    const btnTema = document.getElementById("btnTema");
    const temaGuardado = localStorage.getItem("techzone-tema");

    function aplicarTema(oscuro) {
        body.classList.toggle("dark-mode", oscuro);
        root.setAttribute("data-bs-theme", oscuro ? "dark" : "light");
        if (btnTema) {
            btnTema.textContent = window.techzoneTexto(
                oscuro ? "☀️ Modo claro" : "🌙 Modo oscuro",
                oscuro ? "☀️ Light mode" : "🌙 Dark mode"
            );
            btnTema.setAttribute("aria-pressed", String(oscuro));
            btnTema.setAttribute(
                "aria-label",
                window.techzoneTexto(
                    oscuro ? "Cambiar a modo claro" : "Cambiar a modo oscuro",
                    oscuro ? "Switch to light mode" : "Switch to dark mode"
                )
            );
        }
    }

    aplicarTema(temaGuardado === "oscuro");

    if (btnTema) {
        btnTema.addEventListener("click", () => {
            const oscuro = !body.classList.contains("dark-mode");
            localStorage.setItem("techzone-tema", oscuro ? "oscuro" : "claro");
            aplicarTema(oscuro);
        });
    }

    const buscador = document.getElementById("buscador");
    const limpiarBusqueda = document.getElementById("limpiarBusqueda");
    const items = Array.from(document.querySelectorAll(".tool-item"));
    const sinResultados = document.getElementById("sinResultados");
    const volverArriba = document.getElementById("volverArriba");

    if (buscador && limpiarBusqueda && sinResultados) {
        function filtrarHerramientas() {
            const consulta = buscador.value.trim().toLocaleLowerCase("es");
            let visibles = 0;
            items.forEach((item) => {
                const coincide = item.textContent.toLocaleLowerCase("es").includes(consulta);
                item.classList.toggle("d-none", !coincide);
                if (coincide) visibles++;
            });
            sinResultados.classList.toggle("d-none", visibles !== 0);
        }

        buscador.addEventListener("input", filtrarHerramientas);
        limpiarBusqueda.addEventListener("click", () => {
            buscador.value = "";
            filtrarHerramientas();
            buscador.focus();
        });

        if ("IntersectionObserver" in window) {
            const observador = new IntersectionObserver((entradas, observer) => {
                entradas.forEach((entrada) => {
                    if (entrada.isIntersecting) {
                        entrada.target.classList.add("visible");
                        observer.unobserve(entrada.target);
                    }
                });
            }, { threshold: 0.12 });
            items.forEach((item) => observador.observe(item));
        } else {
            items.forEach((item) => item.classList.add("visible"));
        }
    }

    if (volverArriba) {
        window.addEventListener("scroll", () => {
            volverArriba.classList.toggle("visible", window.scrollY > 450);
        }, { passive: true });
        volverArriba.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
        enlace.addEventListener("click", (event) => {
            const destino = document.querySelector(enlace.getAttribute("href"));
            if (destino) {
                event.preventDefault();
                destino.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});
