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
    console.log(amigos);
    return;
}