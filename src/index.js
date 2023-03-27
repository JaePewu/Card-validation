import validator from './validator.js';
//llamada del elemento en html por Id
const numeroTarjeta = document.getElementById("numeroTarjeta");

document.getElementById("btnValidar").onclick = function() {

  const numeroTarj = numeroTarjeta.value;

  //Debe tener un min de 13 y un max de 19
  if (numeroTarj.length < 13 || numeroTarj.length > 19) {

    alert ("¡ERROR!: El número de tarjeta debe contener entre 13 a 19 digitos");
    console.log(numeroTarjeta);
    return false
  }

  //Validacion si es o no digito
  const sigLetras = /^\d+$/.test(numeroTarj);
  
  if(sigLetras !== true){ 
    alert ("¡SOLO debe poseer digitos de 0 a 9!");
    return false;
  }
  
  //Algoritmo de Luhn, isValid
  const resultado = validator.isValid(numeroTarjeta.value); 
  console.log(resultado);

  //Maskify
  const maski = validator.maskify(numeroTarjeta.value);
  if (resultado === true){
    numeroTarjeta.value = maski;
    alert ("¡Felicidades por Tu Compra! Se verificó tu tarjeta N°"+ maski);
  }
  
}

console.log(validator)