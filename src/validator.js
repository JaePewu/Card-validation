const validator = {
  isValid: function (numeroTarjeta) {
    //Toma el N° string entregado. (123)
    console.log(numeroTarjeta);

    const numeroTarj = numeroTarjeta.split("");
    // el string es separando con comas. (1,2,3)
    console.log(numeroTarj);
   
    const numTarj = numeroTarj.reverse();
    // Toma el string separado y con un array reverse lo da vuelta. (3,2,1)
    console.log(numTarj);

    let suma = 0;
    //variable vacia o 0
    //Se crea bucle, para que analice 1 a 1 string por string.
    for (let i = 0; i < numTarj.length; i++) {

      numTarj[i] = parseInt(numTarj[i]);
      //toma cada string y lo convierte en digitp, posicionado en cada i
      console.log(numTarj);
      
      if (i % 2 === 0){
        //El resto del valor i es extrictamente igual a 0,
        //tambien puede ser i%2!==0 indicando que es lo contrario

        numeroTarj[i] = numeroTarj[i] * 1
        //se multiplicara por 1
        console.log(numTarj);
      } else {
        numeroTarj[i] = numeroTarj[i] * 2 
        //si no se multiplicara por 2
        console.log(numTarj);

      }
      
      if (numeroTarj[i] >= 10) {
        //si el digito es Mayor o igual a 10

        numeroTarj[i] = (numeroTarj[i] % 10) + 1;
        //Se dividira en 10 y el resto se le sumara 1
        console.log(numTarj);
      } 
      suma += numeroTarj[i];
      //Se sumaran todos los digitos de la tarjeta
      console.log(suma);
    } 
    if (suma % 10 === 0) {
      //Si el resto de 10 es igual a 0
      return true
      //Es TRUE si el valor corresponde al LUHN, termina con un digito 0, o en decena
    }else{
      alert ("ERROR: Número de tarjeta NO Valida")
      return false
      //si no saldra un alerta ya que no cumple con lo antes nombrado
    }
  },

  //Funcion ocultara los primeros digitos, dejando libre los ultimos 4.
  maskify: function (numeroTarjeta) {

    numeroTarjeta = numeroTarjeta.toString(); //convierte el número de tarjeta en una cadena de caracteres 

    let maski = "";//variable vacia

    for (let j = 0; j < numeroTarjeta.length; j++) {
  
      if (j > numeroTarjeta.length - 5) {//se enmascara todos los digitos menos los ultimos 4, pero para que se refleje correctamente se coloca -5
        
        maski = maski + numeroTarjeta[j]//entonces se sumara a maski

      }else{//Si no esta dentro de los ultimos 4 = (- 5), se reemplazara con un "#"
        maski = maski + "#"
      }
      
    }
    console.log(maski);//función devuelve la cadena resultante  maski. (el maski es todo)
    return maski
  }
}

export default validator;