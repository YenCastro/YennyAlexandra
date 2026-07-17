/* Formulario */
const formulario = document.getElementById("formulario-contacto");
const botonEnviar = document.getElementById("btnEnviar");
const mensajeFormulario = document.getElementById("mensajeFormulario");

formulario.addEventListener("submit", async function (e) {

    e.preventDefault();

    botonEnviar.disabled = true;
    botonEnviar.textContent = "Enviando...";

    const datos = new FormData(formulario);

    try {

        const respuesta = await fetch(formulario.action, {

            method: "POST",
            body: datos,

            headers: {
                "Accept": "application/json"
            }

        });

        if (respuesta.ok) {

            mensajeFormulario.textContent = "✅ ¡Mensaje enviado correctamente!";
            mensajeFormulario.style.color = "#5CFF87";

            formulario.reset();

        } else {

            mensajeFormulario.textContent = "❌ No se pudo enviar el mensaje.";
            mensajeFormulario.style.color = "#ff6666";

        }

    } catch (error) {

        mensajeFormulario.textContent = "❌ Error de conexión.";
        mensajeFormulario.style.color = "#ff6666";

    }

    botonEnviar.disabled = false;
    botonEnviar.textContent = "Enviar mensaje";

});