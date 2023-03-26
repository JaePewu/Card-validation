import validator from './validator.js';
//validator.isValid("123456789");
//validator.maskify("123456789");

const numeroTarjeta = document.getElementById("numeroTarjeta");


document.getElementById("btnValidar").onclick = function() {

  const numeroTarj = numeroTarjeta.value;
  //const signosLetras = "/^[0-9]+$/";

  //debe tener un min de 13 y un max de 19
  if (numeroTarj.length < 13 || numeroTarj.length > 19) {

    alert ("¡ERROR!: El número de tarjeta debe contener entre 12 a 19 digitos");
    console.log(numeroTarjeta);
    return false
  }else{
    /*if (){ 
    alert ("¡SOLO debe poseer digitos de 0 a 9!");
    return false
  }*/const resultado = validator.isValid(numeroTarjeta.value); console.log(resultado)}

};

//document.getElementById("btnValidar").onclick = function() {validator.maskify(numeroTarjeta.value)}; 
// valida el maskify ^^^

console.log(validator)