// =====================================
// EJEMPLO DE JAVASCRIPT
// =====================================

function mostrarMensajeJS() {

    document.getElementById("mensajeJS").textContent =
        "¡Excelente! JavaScript está funcionando correctamente.";

}


// =====================================
// PRODUCTOS
// =====================================

function agregarProducto(nombre) {

    alert(
        "🛒 Has agregado " +
        nombre +
        " al carrito."
    );

}


// =====================================
// JQUERY
// =====================================

$(document).ready(function () {

    $("#botonJQ").click(function () {

        $("#mensajeJQ").slideToggle(500);

    });

});


// =====================================
// CUESTIONARIO
// =====================================

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


    for (let pregunta in respuestas) {

        const respuesta =
            document.querySelector(
                'input[name="' +
                pregunta +
                '"]:checked'
            );


        if (
            respuesta &&
            respuesta.value === respuestas[pregunta]
        ) {

            puntos++;

        }

    }


    const resultado =
        document.getElementById("resultado");


    resultado.style.display = "block";


    if (puntos >= 6) {

        resultado.className =
            "resultado correcto";

        resultado.textContent =
            "🎉 ¡Excelente! Obtuviste " +
            puntos +
            " de 8 respuestas correctas.";

    }

    else {

        resultado.className =
            "resultado incorrecto";

        resultado.textContent =
            "📚 Obtuviste " +
            puntos +
            " de 8. ¡Sigue estudiando!";

    }

}