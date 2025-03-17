let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    // Verificar que el nombre no esté repetido
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        input.value = ""; // Limpiar el campo de entrada
        input.focus(); // Volver a enfocar el campo
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);
    
    // Limpiar el campo de entrada y volver a enfocar
    input.value = "";
    input.focus();
    
    // Ocultar el mensaje del amigo sorteado si se agregan nuevos nombres
    document.getElementById("resultado").innerHTML = "";
    
    // Actualizar la lista en la interfaz
    actualizarLista();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length < 5) {
        alert("Debe haber al menos 5 participantes para realizar el sorteo.");
        return;
    }
    
    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado en la interfaz
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}</li>`;
    
    // Limpiar la lista de amigos para un nuevo sorteo
    amigos = [];
    actualizarLista();
}


/*Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector 
para obtener el texto ingresado por el usuario.

Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío.
 Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."

Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena
 los nombre de amigos usando el método.push().

Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una 
cadena vacía.*/