import cipher from './cipher.js';
document.addEventListener("DOMContentLoaded", function() {
    iniciar();
  });
const encode = cipher.encode;
const decode =cipher.decode;

function iniciar() {
  document.getElementById("mensaje").addEventListener(
    "keyup",
    function () {
      this.value = this.value.toUpperCase();
    },
    true
  );

  document.getElementById("encode").addEventListener(
    "click",
    function () {
          let mensaje = document.getElementById("mensaje").value;
          let offset = parseInt(document.getElementById("offset").value);

          document.getElementById("respuesta").value = cipher.encode(mensaje, offset);
      },
    true
  );

  document.getElementById("decode").addEventListener(
    "click",
    function () {
      let mensaje = document.getElementById("mensaje").value;
      let offset = parseInt(document.getElementById("offset").value);
      document.getElementById("respuesta").value = cipher.decode(mensaje, offset);
    },
    true
  );
}

console.log(cipher);

export default cipher;

iniciar();

