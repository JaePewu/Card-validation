import validator from './validator.js';

//llamada del elemento en html por Id
const numeroTarjeta = document.getElementById("numeroTarjeta");


//llamada para Modal
const mnsjValidacion = document.getElementById('mnsjValidacion');
const msj = document.getElementById('msj');
const close = document.getElementById('btnCerrar');


const inputNombre = document.getElementById("nombreTitular");


inputNombre.addEventListener("input", function() {
  console.log("entro")
  const valor = this.value;//this" es una palabra clave para referirse al objeto actual en el que se está ejecutando.
  console.log(valor) //se refiere al elemento del DOM en el que se ha producido el evento "input" (es decir, el elemento con el id "nombreTitular").
  this.value = valor.replace(/[0-9]/g, "");
  console.log(valor)
});

//evitar signos en el nombre
/*const nombreTitular = document.getElementById("nombreTitular");
const ltrSpace = /^[a-zA-Z\s]+$/;
console.log(nombreTitular.value);

nombreTitular.addEventListener('keyup', () => {
  console.log("Entró!")
  const nombTitu = nombreTitular.value;

  if(!ltrSpace.test(nombTitu)){
    const nombremenos =nombTitu.substring(0, nombTitu.Length -1);
    nombreTitular.value = nombremenos;
    //alert("Cuidado, solo debes ingresar tu nombre sin signos, ni números")
    console.log(nombTitu);
    return true;
  }
});*/




/*document.getElementsByName("letras").onkeydown = function(){
  console.log("Entró!")
  const nombTitu = nombreTitular.value;

  if(ltrSpace.test(nombTitu)){
    alert("Cuidado, solo debes ingresar tu nombre sin signos, ni números")
    console.log(nombTitu);
    return true;
  }
}*/

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
  

  //Algoritmo de Luhn, isValid
  const resultado = validator.isValid(numeroTarjeta.value); 
  
  if(!resultado) {
    alert("¡ALERTA!: Su tarjeta no ha sido validada");
    return false;
  }
  console.log(resultado);


  //Maskify
  const maski = validator.maskify(numeroTarjeta.value);
  if (resultado === true){
    //se mostrara en formulario n° tarjeta el maskify
    //mensaje interno de modal
    msj.innerHTML = "Se verificó tu tarjeta N°" + maski;

    //alerta a traves de modal
    mnsjValidacion.classList.add('show');  

  }else{alert('mensaje prueba '+ resultado)}

}
//boton de modal
close.addEventListener('click', () => {
  mnsjValidacion.classList.remove('show');
});


console.log(validator)