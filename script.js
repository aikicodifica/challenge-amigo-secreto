let nombres = [];

function adicionarNombre() {
    let input = document.getElementById("nombreInput");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    nombres.push(nombre);
    actualizarLista();
    input.value = ""; // Limpiar el campo después de añadir
}

function actualizarLista() {
    let lista = document.getElementById("listaNombres");
    lista.innerHTML = "";

    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("Agregue al menos un nombre antes de sortear.");
        return;
    }

    let indice = Math.floor(Math.random() * nombres.length);
    let amigoSecreto = nombres[indice];

    document.getElementById("resultado").textContent = "Amigo Secreto: " + amigoSecreto;
    
    // Deshabilitar botón de sorteo después de elegir
    document.getElementById("sortearBtn").disabled = true;
}

function reiniciarJuego() {
    nombres = [];
    actualizarLista();
    document.getElementById("resultado").textContent = "";
    document.getElementById("sortearBtn").disabled = false;
}