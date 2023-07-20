const cipher = {  // Objeto 'cipher' que contiene dos funciones para cifrar y descifrar las contraseñas
  encode: function(mensaje, offset) {   //Parametros
    let resultado = "";
    for (let i = 0; i < mensaje.length; i++) {    // Recorre cada caracter del mensaje
      const c = mensaje.charCodeAt(i);              // Obtiene el código Unicode del caracter actual


      if (c >= 65 && c <= 90) {               // Verifica si el caracter es una letra mayúscula
        resultado += String.fromCharCode(((c - 65 + offset) % 26) + 65);         // Realiza el cifrado César aplicando el offset y obtiene el nuevo caracter cifrado
      } else {              
        resultado += mensaje.charAt(i);       // Si el caracter no es una letra mayúscula, lo deja sin cambios
      }
    }
    return resultado;
  },

  decode: function (mensaje, offset) {
    let resultado = "";
    offset = (26 - offset) % 26;
    resultado = cipher.encode(mensaje, offset);
    return resultado;
  }
}
export default cipher;

