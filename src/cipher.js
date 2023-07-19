const cipher = {
encode: function(mensaje, offset) {
  let resultado = "";
  for (let i = 0; i < mensaje.length; i++) {
    let c = mensaje.charCodeAt(i);

    if (c >= 65 && c <= 90) {
      resultado += String.fromCharCode(((c - 65 + offset) % 26) + 65);
    } else {
      resultado += mensaje.charAt(i);
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

