let amigos = [];
let input = document.querySelector('#amigo');

function agregarAmigo() {
    //Capturar el valor del campo de entrada
    let nombre = input.value.trim();

    //Validar la entrada
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    //Actualizar el array de amigos
    amigos.push(nombre);

    //Limpiar el campo de entrada
    input.value = '';
    crearListaAmigos(amigos);
    return;
}

function crearListaAmigos(lista) {
    //Obtener el elemento de la lista
    let listaDeAmigos = document.getElementById('listaAmigos');

    //Limpiar la lista existente
    listaDeAmigos.innerHTML = "";

    //Iterar sobre el arreglo
    for (let i = 0; i < lista.length; i++) {
        //Agregar elementos a la lista
        listaDeAmigos.innerHTML += `<li>${lista[i]}</li>`;
    }
    return;
}