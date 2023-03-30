import validator from './validator.js';

//llamada del elemento en html por Id
const numeroTarjeta = document.getElementById("numeroTarjeta");
const inputNombre = document.getElementById("nombreTitular");//Validacion de numeros o signos en Nombre 
const cvv = document.getElementById('cvv');
//llamada para Modal
const mnsjValidacion = document.getElementById('mnsjValidacion');
const msjH1 = document.getElementById('msjH1');
const msj = document.getElementById('msj');
const close = document.getElementById('btnCerrar');


document.getElementById("btnValidar").onclick = function() {

  const numeroTarj = numeroTarjeta.value;

  //Debe tener un min de 13 y un max de 19
  if (numeroTarj.length < 13 || numeroTarj.length > 19) {

    alert("¡ERROR!: El número de tarjeta debe contener entre 13 a 19 digitos");
    console.log(numeroTarjeta);
    return false;
  }

  //Validacion si es o no digito
  const sigLtrs = /^\d+$/.test(numeroTarj);
  
  if(sigLtrs !== true){ 
    alert ("¡SOLO debe poseer digitos de 0 a 9!");
    return false;
  }

  //LLamando aaa Algoritmo de Luhn, isValid
  const resultado = validator.isValid(numeroTarjeta.value); 

  //Maskify
  const maski = validator.maskify(numeroTarjeta.value);
  if (!resultado){// si NO ES igual a true, no sera valida

    msjH1.innerHTML = "¡OH NOOOO!";
    msj.innerHTML = "Tu tarjeta N°" + numeroTarj + " NO ES VALIDA";

    mnsjValidacion.classList.add('show');//alerta a traves de modal

  }else{//Si es true, sera valida y se mostrara en formulario n° tarjeta el maskify
    //mensaje interno de modal
    msj.innerHTML = "Se verificó tu tarjeta N°" + maski;
    mnsjValidacion.classList.add('show');  //alerta a traves de modal
  }
  console.log(resultado);
}

close.addEventListener('click', () => {//boton de modal
  mnsjValidacion.classList.remove('show');
});

//Validacion de numeros o signos en Nombre 
inputNombre.addEventListener("input", function() {
  console.log("entro")
  const valor = this.value;//this" es una palabra clave para referirse al objeto actual en el que se está ejecutando.
  console.log(valor) //se refiere al elemento del DOM en el que se ha producido el evento "input" (es decir, el elemento con el id "nombreTitular").
  this.value = valor.replace(/[^\p{L}\s]/gu, "");// Quita numero, digitos----- /[0-9\W_]/g, """ <- \W  no alfanumérico (incluye el espaciado)
  console.log(valor)
});

//Validacion de numeros en CVV
cvv.addEventListener("input", function() {
  console.log("entro")
  const valor = this.value;
  console.log(valor) 
  this.value = valor.replace(/[a-zA-Z\W_]/g, "");// Quita letras y signos
  console.log(valor)
});



console.log(validator)