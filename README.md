# ⚡ Portafolio Técnico: TechZone

**Estudiante:** [Oliber Mauricio Salazar Mercado]  
**Institución:** [Complejo Educativo Catolico San Antonio de Padua]  
**Asignatura:** desarrollo de software 
**Fecha de entrega:** [Día/mes/año]

**Sitio web en Vercel:** [Pegar enlace de Vercel]  
**Repositorio de GitHub:** [Pegar enlace de GitHub]

---

## 📑 Índice

1. Identidad de marca y producto
2. Tecnologías utilizadas
3. Investigación técnica
4. Herramientas de Google
5. Formulario de contacto y Discord
6. Cuestionario interactivo
7. Diseño responsive
8. Estructura del proyecto
9. Publicación en Vercel y GitHub
10. Anexos y evidencias gráficas
11. Conclusiones y autoevaluación

---

## 1. Identidad de marca y producto

### ⚡ 1.1. Ficha del producto

- **Nombre comercial:** TechZone.
- **Categoría:** Tecnología e informática.
- **Tipo de producto:** Sitio web informativo y demostrativo de productos tecnológicos.
- **Descripción:** TechZone es un sitio web dedicado a presentar productos tecnológicos y ofrecer información educativa sobre herramientas y conceptos del desarrollo web. Incluye diferentes páginas informativas, un cuestionario interactivo y un formulario de contacto.
- **Público objetivo:** Estudiantes, aficionados a la tecnología y personas interesadas en la informática.
- **Propuesta de valor:** Proporcionar una experiencia de navegación organizada y moderna que combine productos tecnológicos, información educativa y herramientas interactivas.

### 🎨 1.2. Identidad gráfica

El logotipo de TechZone utiliza un rayo como símbolo de energía, innovación y tecnología. El nombre representa un espacio dedicado al mundo tecnológico.

**Logotipo de la marca:**

![Logotipo de TechZone](assets/logo.png)

### 1.3. Paleta de colores

| Color | Código HEX | Uso en el sitio |
|---|---|---|
| Gris oscuro | `#111827` | Encabezado y navegación |
| Azul | `#2563EB` | Botones y enlaces |
| Morado | `#7C3AED` | Degradados y elementos destacados |
| Azul claro | `#DBEAFE` | Fondos secundarios |
| Blanco | `#FFFFFF` | Tarjetas y superficies de contenido |

**Justificación:** El azul transmite confianza y tecnología; el morado representa creatividad e innovación; el gris oscuro aporta elegancia y contraste. El blanco y el azul claro ayudan a mantener una interfaz limpia y legible.

### 1.4. Carousel de Bootstrap

El carousel de Bootstrap permite mostrar imágenes de productos mediante controles de navegación y transiciones. Su objetivo es destacar visualmente los productos y mejorar la presentación de la página principal.

![Carousel de herramientas](assets/carousel-demo.png)

---

## 2. Tecnologías utilizadas

| Tecnología | Función |
|---|---|
| HTML5 | Estructura y contenido de las páginas. |
| CSS3 | Diseño visual, colores y distribución. |
| Bootstrap 5 | Componentes y diseño adaptable. |
| JavaScript Vanilla | Interactividad, eventos y validaciones. |
| jQuery | Simplificación de operaciones y efectos visuales. |
| JSON | Organización e intercambio de datos. |
| Git | Control de versiones. |
| GitHub | Almacenamiento y administración del código. |
| Vercel | Publicación del sitio web. |
| Discord Webhooks | Envío de notificaciones al canal configurado. |
| Markdown | Documentación técnica mediante README.md. |
| Visual Studio Code | Editor para desarrollar y organizar el proyecto. |

---

## 3. Investigación técnica

### 3.1. JavaScript Vanilla

**¿Qué es JavaScript?**

JavaScript es un lenguaje de programación que permite agregar interactividad a los sitios web.

HTML define la estructura, CSS controla la apariencia y JavaScript permite responder a acciones del usuario y modificar el contenido de una página.

**Conceptos principales:**

- **Variables:** almacenan información.
- **Funciones:** agrupan instrucciones que pueden ejecutarse cuando se necesitan.
- **Eventos:** permiten responder a acciones como clics y envíos de formularios.
- **DOM:** permite acceder a los elementos HTML y modificarlos mediante JavaScript.

**Ejemplo práctico:**

````javascript
const boton = document.getElementById("miBoton");

boton.addEventListener("click", () => {
    alert("Bienvenido a TechZone");
});
```

Este ejemplo muestra un mensaje cuando el usuario hace clic en el botón correspondiente.

### 3.2. jQuery

**¿Qué es jQuery?**

jQuery es una biblioteca de JavaScript creada por John Resig y publicada en 2006. Facilita tareas como seleccionar elementos HTML, administrar eventos, realizar animaciones y efectuar solicitudes AJAX.

**Ejemplo práctico:**

```javascript
$(document).ready(function () {
    $("#miBoton").on("click", function () {
        $("#miTexto").slideToggle();
    });
});
```

Este ejemplo muestra u oculta un elemento con un efecto deslizante al pulsar un botón.

**Comparación entre JavaScript Vanilla y jQuery:**

| Característica | JavaScript Vanilla | jQuery |
|---|---|---|
| Dependencias | No requiere una biblioteca adicional. | Requiere cargar jQuery. |
| Selección de elementos | `document.querySelector()` | `$("selector")` |
| Eventos | `addEventListener()` | `.on()` |
| Animaciones | CSS o JavaScript. | Métodos como `slideToggle()`. |

jQuery ofrece una sintaxis abreviada para determinadas operaciones, mientras que JavaScript moderno permite realizar muchas de esas tareas sin instalar bibliotecas adicionales.

### 3.3. JSON

**¿Qué es JSON?**

JSON significa *JavaScript Object Notation*. Es un formato de texto utilizado para organizar e intercambiar información entre aplicaciones.

Utiliza pares de clave y valor y permite representar objetos, listas, cadenas de texto, números, valores booleanos y valores nulos.

**Ejemplo:**

```json
{
  "producto": "Laptop Pro",
  "precio": 899,
  "disponible": true
}
```

En este ejemplo, las claves son `producto`, `precio` y `disponible`. Cada una tiene un valor asociado.

**Importancia en la web:**

- Facilita el intercambio de información entre aplicaciones.
- Se utiliza en numerosas APIs.
- Permite organizar datos de productos y usuarios.
- Puede convertirse en un objeto JavaScript con `JSON.parse()`.
- Puede convertirse en texto JSON con `JSON.stringify()`.

### 3.4. Web Hosting y dominios

**Servidor:** sistema que procesa solicitudes y proporciona recursos o servicios a otros dispositivos.

**Hosting:** servicio que permite almacenar y publicar los archivos de un sitio web para que esté disponible en Internet.

**Dominio:** nombre legible que permite acceder a un sitio web, por ejemplo, `ejemplo.com`.

**TLD:** dominio de nivel superior, correspondiente a la parte final del nombre de dominio. Algunos ejemplos son `.com`, `.org` y `.sv`.

**DNS:** sistema que permite localizar los recursos asociados a un dominio mediante registros DNS.

**Propagación DNS:** proceso mediante el cual los cambios de configuración de un dominio se reflejan progresivamente en diferentes servidores y cachés.

**Vercel:** plataforma que permite desplegar sitios web y proporcionarles una dirección pública. Puede conectarse con GitHub para facilitar la publicación y actualización de los proyectos.

---

## 4. Herramientas de Google

El proyecto incluye una sección informativa dedicada a herramientas de Google que pueden utilizarse para estudiar, trabajar, organizar información y colaborar en línea.

Las 15 herramientas investigadas son:

1. **Google Drive:** almacenamiento de archivos.
2. **Google Docs:** creación de documentos.
3. **Google Sheets:** hojas de cálculo.
4. **Google Slides:** presentaciones.
5. **Google Forms:** formularios y encuestas.
6. **Google Sites:** creación de sitios web.
7. **Google Calendar:** organización de eventos.
8. **Google Meet:** videollamadas.
9. **Google Chat:** comunicación en línea.
10. **Google Keep:** notas y listas.
11. **Google Tasks:** administración de tareas.
12. **Google Classroom:** gestión de actividades educativas.
13. **Google Drawings:** creación de diagramas y dibujos.
14. **Google Apps Script:** automatización de tareas.
15. **Google Colab:** ejecución de código Python en cuadernos alojados en la nube.

La disponibilidad de funciones gratuitas y premium depende de cada herramienta, del tipo de cuenta y de la suscripción contratada.

---

## 5. Formulario de contacto y Discord

### 5.1. Objetivo

El formulario de contacto permite que los visitantes envíen consultas a TechZone mediante tres campos principales: nombre, correo electrónico y mensaje.

### 5.2. Funcionamiento

1. El usuario completa el formulario.
2. JavaScript valida los datos introducidos.
3. Se realiza una solicitud asíncrona al servicio encargado de procesar el mensaje.
4. El servicio envía una notificación mediante el webhook configurado en Discord.
5. La página muestra un mensaje que informa si el envío tuvo éxito o si ocurrió un error.

**Tecnologías utilizadas:** HTML5, Bootstrap, JavaScript, solicitudes HTTP y Discord Webhooks.

### 5.3. Seguridad

La URL del webhook debe mantenerse protegida. No se recomienda incluirla directamente en el JavaScript público del navegador ni publicarla en GitHub. Para una implementación segura se recomienda utilizar un backend o una función de servidor con variables de entorno.

**Evidencia del formulario y Discord:**

![Formulario y notificación de Discord](assets/discord-webhook.png)

---

## 6. Cuestionario interactivo

### Quiz de Conocimientos Web

El cuestionario permite repasar los conocimientos adquiridos sobre desarrollo web mediante preguntas de opción múltiple o verdadero y falso.

Los temas incluyen:

- HTML, CSS y JavaScript.
- Sintaxis y usos de jQuery.
- Estructura y utilidad de JSON.
- Hosting, dominios y DNS.
- Tecnologías utilizadas en el proyecto.

El cuestionario debe incluir entre 5 y 10 preguntas, permitir seleccionar respuestas y mostrar el resultado final.

**Evidencia del cuestionario:**

![Quiz de conocimientos web](assets/quiz-funcionando.png)

---

## 7. Diseño responsive

El diseño responsive permite que el sitio se adapte a diferentes tamaños de pantalla, como computadoras, tabletas y teléfonos móviles.

Entre las prácticas utilizadas se encuentran:

- La etiqueta `meta viewport`.
- Los componentes adaptables de Bootstrap.
- La distribución flexible de tarjetas y secciones.
- Las imágenes adaptables.
- La navegación consistente entre las páginas.

El objetivo es facilitar la lectura y la navegación sin importar el dispositivo utilizado.

**Evidencia de vista móvil:**

![Diseño responsive de TechZone](assets/responsive-mobile.png)

---

## 8. Estructura del proyecto

La estructura de referencia para organizar los archivos de TechZone es la siguiente:

```text
TechZone/
├── index.html
├── productos.html
├── javascript.html
├── jquery.html
├── json.html
├── hosting.html
├── cuestionario.html
├── formulario.html
├── google.html
├── estilos.css
├── script.js
├── google.css
├── assets/
│   ├── logo.png
│   ├── carousel-demo.png
│   ├── discord-webhook.png
│   ├── vercel-status.png
│   ├── responsive-mobile.png
│   ├── quiz-funcionando.png
│   └── github-repository.png
└── README.md
```

Los nombres y las rutas deben coincidir con los archivos reales del proyecto. Si los estilos y scripts están dentro de carpetas `css/` y `js/`, se deben conservar esas ubicaciones en la documentación.

---

## 9. Publicación en Vercel y GitHub

### 9.1. GitHub

GitHub permite almacenar el código, mantener un historial de cambios y compartir el proyecto.

El repositorio debe incluir los archivos HTML, las hojas de estilo, los scripts, los recursos gráficos y el README.md.

### 9.2. Vercel

Vercel permite publicar el sitio para que otras personas puedan acceder a él mediante una dirección web.

Para verificar el despliegue se debe comprobar que:

1. El despliegue finalice correctamente.
2. La página principal abra sin errores.
3. Los enlaces de navegación funcionen.
4. Los estilos y las imágenes se carguen correctamente.
5. El sitio pueda visualizarse desde un teléfono móvil.

**Enlace de Vercel:** [Agregar URL real]  
**Repositorio de GitHub:** [Agregar URL real]

**Evidencia del despliegue:**

![Despliegue exitoso en Vercel](assets/vercel-status.png)

---

## 10. Anexos y evidencias gráficas

### Anexo 1. Integración con Discord

Captura del formulario de contacto con datos ficticios y la notificación recibida en Discord.

![Anexo 1: Formulario y Discord](assets/discord-webhook.png)

### Anexo 2. Despliegue exitoso en Vercel

Captura del panel de Vercel que muestre el estado satisfactorio del despliegue y la URL pública.

![Anexo 2: Vercel](assets/vercel-status.png)

### Anexo 3. Diseño responsive y Bootstrap

Captura del sitio en vista móvil utilizando las herramientas de desarrollador del navegador.

![Anexo 3: Vista móvil](assets/responsive-mobile.png)

### Anexo 4. Cuestionario interactivo

Captura del cuestionario con preguntas respondidas y resultados visibles.

![Anexo 4: Cuestionario](assets/quiz-funcionando.png)

### Anexo 5. Repositorio de GitHub

Captura de la página principal del repositorio público donde se vea la organización de los archivos y el README.md.

![Anexo 5: GitHub](assets/github-repository.png)

**Importante:** las imágenes deben ser capturas reales de tu proyecto. Guarda cada archivo dentro de `assets/` y utiliza los nombres correspondientes.

---

## 11. Conclusiones y autoevaluación

### 11.1. Conclusiones

El proyecto TechZone permite aplicar los conocimientos de diseño y desarrollo web mediante la creación de una plataforma que combina información tecnológica, productos e interactividad.

El uso de HTML5, CSS3 y Bootstrap 5 permite estructurar y diseñar la interfaz, mientras que JavaScript aporta funcionalidades dinámicas. La investigación de jQuery, JSON, hosting y dominios contribuye a comprender tecnologías importantes para el desarrollo y la publicación de aplicaciones web.

La documentación en Markdown y la organización del repositorio permiten presentar el trabajo de forma clara y facilitar su mantenimiento.

### 11.2. Desafíos enfrentados

Durante el desarrollo se deben identificar y describir los desafíos que realmente se presentaron. Algunos aspectos que pueden documentarse son:

- Mantener un diseño uniforme en todas las páginas.
- Corregir las rutas de los archivos CSS, JavaScript e imágenes.
- Adaptar la navegación a pantallas pequeñas.
- Configurar y probar el formulario de contacto.
- Verificar la publicación en Vercel.

### 11.3. Aprendizajes clave

Este proyecto permite reforzar los siguientes conocimientos:

- Desarrollo de páginas con HTML5 y CSS3.
- Diseño adaptable con Bootstrap 5.
- Programación interactiva con JavaScript.
- Uso de jQuery para efectos y manipulación de elementos.
- Intercambio de información mediante JSON.
- Conceptos de hosting, dominios y DNS.
- Administración de proyectos mediante GitHub.
- Publicación de sitios web con Vercel.
- Documentación técnica con Markdown.

### 11.4. Autoevaluación

La autoevaluación consiste en comprobar el funcionamiento de las páginas, la navegación, el cuestionario, el formulario, la integración con Discord y el despliegue en Vercel.

Como mejoras futuras, se propone reforzar la seguridad del formulario, mejorar la accesibilidad y ampliar las funcionalidades educativas del sitio.

---

## Enlaces finales

- **Sitio web en Vercel:** [Pegar enlace público]
- **Repositorio de GitHub:** [Pegar enlace público]