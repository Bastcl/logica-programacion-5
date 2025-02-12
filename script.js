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
        return;
    }

    numerosIntroducidos.push(numeroUsuario);

    if (numeroUsuario === numeroSecreto) {
        mensajeDiv.textContent = "¡Felicidades! Adivinaste el número secreto.";
        listaNumerosDiv.textContent = `Números introducidos: ${numerosIntroducidos.join(", ")}`;
        botonAdivinar.disabled = true;
    } else {
        let pista = "";
        if (numeroUsuario < numeroSecreto) {
            pista = "El número secreto es mayor.";
        } else {
            pista = "El número secreto es menor.";
        }
        mensajeDiv.textContent = `Ups, el número secreto es incorrecto. ${pista} Vuelve a intentarlo.`;
        listaNumerosDiv.textContent = `Números introducidos: ${numerosIntroducidos.join(", ")}`;
    }

    inputNumero.value = "";
}

botonAdivinar.addEventListener("click", adivinarNumero);