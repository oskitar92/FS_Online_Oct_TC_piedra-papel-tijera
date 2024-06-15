
const opciones = ["piedra", "papel", "tijera"];


let puntosUsuario = 0;
let puntosOrdenador = 0;


const botones = document.getElementById(".boton-jugada");
const resultados = document.getElementById("resultados");
const contadorUsuario = document.getElementById("contador-usuario");
const contadorOrdenador = document.getElementById("contador-ordenador");


function jugadaOrdenador() {
    const Aleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
}


function obtenerResultado(jugadaUsuario, jugadaOrdenador) {
    if (jugadaUsuario === jugadaOrdenador) {
        return "Empate";
    } else if (
        (jugadaUsuario === "piedra" && jugadaOrdenador === "tijera")
        (jugadaUsuario === "papel" && jugadaOrdenador === "piedra")
        (jugadaUsuario === "tijera" && jugadaOrdenador === "papel")
    ) {
        return "Ganaste";
    } else {
        return "Perdiste";
    }
}


function mostrarResultado(jugadaUsuario, jugadaCompu, resultado) {
    resultados.textContent = `Tú elegiste ${jugadaUsuario}, el ordenador eligió ${jugadaCompu}. Resultado: ${resultado}`;
}


function actualizarPuntuacion(resultado) {
    if (resultado === "Ganaste") {
        puntosUsuario++;
        contadorUsuario.textContent = `Tus puntos: ${puntosUsuario}`;
    } else if (resultado === "Perdiste") {
        puntosOrdenador++;
        contadorOrdenador.textContent = `Puntos de la máquina: ${puntosOrdenador}`;
    }
}


botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const jugadaUsuario = boton.getAttribute("datajugada");
        const jugadaCompu = jugadaOrdenador();
        const resultado = obtenerResultado(jugadaUsuario, jugadaCompu);
        mostrarResultado(jugadaUsuario, jugadaCompu, resultado);
        actualizarPuntuacion(resultado);
    });
});
