const cipher = {
  encode: function (offset, mensaje) {  //parámetros offset y mensaje
    if (typeof mensaje !== 'string' || typeof offset !== 'number') {
      throw new TypeError('La contraseña y el desplazamiento deben ser de tipo string y number respectivamente');
    }   // esto garantiza que la función no se ejecute si los argumentos no cumplen con los requisitos necesarios.

    let resultado = '';
    for (let i = 0; i < mensaje.length; i++) {  //recorre cada carácter y obtiene su código ASCII para luego proceder con el cifrado
      const c = mensaje.charCodeAt(i);  //charCodeAt este MÉTODO se usa para obtener el valor de un caracter de un string que ya existe

      if (c >= 65 && c <= 90) {
        // Si la letra es mayúscula (código ASCII entre 65 y 90)
        // Aplicamos el desplazamiento y ajustamos para que vuelva al inicio del alfabeto si se pasa del final
        const letraCifrada = String.fromCharCode(((c - 65 + offset) % 26) + 65);  //String.fromCharCode este MÉTODO es para crear un string apartir de
        resultado += letraCifrada;
      } else if (c >= 97 && c <= 122) {
        // Si la letra es minúscula (código ASCII entre 97 y 122)
        // Aplicamos el desplazamiento y ajustamos para que vuelva al inicio del alfabeto si se pasa del final
        const letraCifrada = String.fromCharCode(((c - 97 + offset) % 26) + 97);
        resultado += letraCifrada;
      } else {
        // Si no es una letra, se agrega directamente al resultado
        resultado += mensaje.charAt(i);  //Método charAt para obtener el caracter de un string
      }
    }
    return resultado;
  },

  decode: function (offset, mensaje) {
    if (typeof mensaje !== 'string' || typeof offset !== 'number') {
      throw new TypeError('La contraseña y el desplazamiento deben ser de tipo string y number respectivamente');
    }

    offset = (26 - (offset % 26)) % 26;
    const resultado = cipher.encode(offset, mensaje);
    return resultado;
  },
};

export default cipher;
