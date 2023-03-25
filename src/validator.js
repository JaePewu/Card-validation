const validator = {
  isValid: function (numeroTarjeta) {
    console.log(numeroTarjeta);

    const numeroTarj = numeroTarjeta.split("");
    console.log(numeroTarj);

    const numTarj = numeroTarj.reverse();
    console.log(numTarj);

    let suma = 0;
    
    for (let i = 0; i < numTarj.length; i++) {

      numTarj[i] = parseInt(numTarj[i]) ;
      console.log(numTarj);
      //tambien puede ser i%2!==0 indicando que es lo contrario
      if (i % 2 === 0){

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
      return false
    }
  },

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