const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const inputNumero = document.getElementById("numero-usuario");
const botonAdivinar = document.getElementById("adivinar-btn");
const mensajeDiv = document.getElementById("mensaje");
const listaNumerosDiv = document.getElementById("lista-numeros");

let numerosIntroducidos = [];

function adivinarNumero() {
    const numeroUsuario = parseInt(inputNumero.value);

    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        mensajeDiv.textContent = "Error: Debes ingresar un número válido entre 1 y 100.";
        mensajeDiv.className = ""; // Eliminar cualquier clase previa
        return;
    }

    numerosIntroducidos.push(numeroUsuario);

    if (numeroUsuario === numeroSecreto) {
        alert("¡Felicidades! Adivinaste el número secreto."); // Mostrar alerta
        mensajeDiv.textContent = "¡Felicidades! Adivinaste el número secreto.";
        mensajeDiv.className = ""; // Eliminar cualquier clase previa
        listaNumerosDiv.textContent = `Números introducidos: ${numerosIntroducidos.join(", ")}`;
        botonAdivinar.disabled = true;
    } else {
        let pista = "";
        if (numeroUsuario < numeroSecreto) {
            pista = `<span class="mensaje-verde">mayor</span>`;
        } else {
            pista = `<span class="mensaje-rojo">menor</span>`;
        }
        mensajeDiv.innerHTML = ` <br>Ups, el número secreto es incorrecto. <br> El número secreto es ${pista}. <br> <br> <span class="again">¡Vuelve a intentarlo!</span>`;
        listaNumerosDiv.textContent = `Números introducidos: ${numerosIntroducidos.join(", ")}`;
    }

    inputNumero.value = "";
}

botonAdivinar.addEventListener("click", adivinarNumero);