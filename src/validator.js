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
        //El resto del valor i .... completar
        //tambien puede ser i%2!==0 indicando que es lo contrario

        numeroTarj[i] = numeroTarj[i] * 1
        console.log(numTarj);
      } else {
        numeroTarj[i] = numeroTarj[i] * 2 
        console.log(numTarj);

      }
      
      if (numeroTarj[i] >= 10) {

        numeroTarj[i] = (numeroTarj[i] % 10) + 1;
        console.log(numTarj);
      } 
      suma += numeroTarj[i];
      console.log(suma);
    } 
    if (suma % 10 === 0) {
      return true
    }else{
      alert ("ERROR: Número de tarjeta NO Valida")
      return false
    }
  },

  //Funcion ocultara los primeros digitos, dejando libre los ultimos 4.
  maskify: function (numeroTarjeta) {

    numeroTarjeta = numeroTarjeta.toString();

    let maski = "";

    for (let j = 0; j < numeroTarjeta.length; j++) {
     
      if (j > numeroTarjeta.length - 5) {
        
        maski = maski + numeroTarjeta[j]

      }else{
        maski = maski + "#"
      }
      
    }
    console.log(maski);
    return maski
  }
}

export default validator;