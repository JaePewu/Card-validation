import validator from './validator.js';
//validator.isValid("123456789");
//validator.maskify("123456789");

const numeroTarjeta = document.getElementById("numeroTarjeta");
/*let valor = 0;
numeroTarjeta.addEventListener("input", function () {
  valor = numeroTarjeta.value;
  console.log (valor)
});*/

document.getElementById("btnValidar").onclick = function() {validator.isValid(numeroTarjeta.value)};

//document.getElementById("btnValidar").onclick = function() {validator.maskify(numeroTarjeta.value)};

console.log(validator)

//numeroTarjeta.addEventListener("keyup", (function validator.isValid) un ejemplo de como llamar a html puede ser keydown