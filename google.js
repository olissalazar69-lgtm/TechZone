document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const btnTema = document.getElementById("btnTema");
    const buscador = document.getElementById("buscador");
    const limpiarBusqueda = document.getElementById("limpiarBusqueda");
    const items = Array.from(document.querySelectorAll(".tool-item"));
    const sinResultados = document.getElementById("sinResultados");
    const volverArriba = document.getElementById("volverArriba");

    // Tema: recuerda la preferencia durante la sesión del navegador.
    const temaGuardado = localStorage.getItem("techzone-tema");
    if (temaGuardado === "oscuro") body.classList.add("dark-mode");
    actualizarBotonTema();

    btnTema.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        localStorage.setItem("techzone-tema", body.classList.contains("dark-mode") ? "oscuro" : "claro");
        actualizarBotonTema();
    });

    function actualizarBotonTema() {
        const oscuro = body.classList.contains("dark-mode");
        btnTema.innerHTML = oscuro
            ? '<i class="bi bi-sun-fill"></i> Modo claro'
            : '<i class="bi bi-moon-stars-fill"></i> Modo oscuro';
        btnTema.setAttribute("aria-pressed", String(oscuro));
    }

    // Buscador: filtra por nombre, descripción y forma de uso.
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

    // Animación de entrada cuando las tarjetas aparecen en pantalla.
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

    // Botón para volver arriba.
    window.addEventListener("scroll", () => {
        volverArriba.classList.toggle("visible", window.scrollY > 450);
    }, { passive: true });
    volverArriba.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Desplazamiento suave en enlaces internos.
    document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
        enlace.addEventListener("click", (event) => {
            const selector = enlace.getAttribute("href");
            const destino = document.querySelector(selector);
            if (destino) {
                event.preventDefault();
                destino.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});
