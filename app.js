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

function sortearAmigo() {
    let listaGanador = document.getElementById('resultado');
    //Validar que haya amigos disponibles
    if (amigos.length < 3) {
        alert('Agrega al menos tres amigos para realizar el sorteo.');
        return;
    }
    //Generar un índice aleatorio
    let indiceGanador = Math.floor(Math.random() * amigos.length);
    //Obtener el nombre sorteado
    let ganador = amigos[indiceGanador];
    //Mostrar el resultado
    listaGanador.innerHTML = `🎉 El amigo secreto es: <strong>${ganador}</strong> 🎁`;
    return;
}