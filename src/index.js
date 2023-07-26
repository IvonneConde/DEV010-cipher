import cipher from './cipher.js';
document.addEventListener("DOMContentLoaded", function() {  // Espera a que el DOM esté completamente cargado para iniciar la función 'iniciar()'
  iniciar();
});


function iniciar() {
  document.getElementById("mensaje").addEventListener(
    "keyup",
    function () {
      this.value = this.value.toUpperCase();
    },
    true
  );

  // Escucha el evento 'click' en el botón con id 'encode'
  // Obtiene el mensaje y el offset 
  // Llama a la función 'encode' de 'cipher' para cifrar la contraseña con el offset
  // y muestra el resultado en 'respuesta'
  document.getElementById("encode").addEventListener(
    "click",    // Argumento
    function () {    // Argumento
      const mensaje = document.getElementById("mensaje").value;      // Obtener el mensaje del usuario
      const offset = parseInt(document.getElementById("offset").value);   // Obtener el desplazamiento (offset) ingresado por el usuario
      document.getElementById("respuesta").value = cipher.encode(offset, mensaje);
    },
    true  // Argumento
  );

  document.getElementById("decode").addEventListener(
    "click",
    function () {
      const mensaje = document.getElementById("mensaje").value;
      const offset = parseInt(document.getElementById("offset").value);
      document.getElementById("respuesta").value = cipher.decode(offset, mensaje);
    },
    true
  );


}

// console.log(cipher);

export default cipher;

iniciar();

