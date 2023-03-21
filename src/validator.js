const validator = {

  isValid: function (numeroTarjeta) {

    const numeroTarj = numeroTarjeta.split("");

    let sum;

    const numTarjReves = numeroTarj;

    numTarjReves.reverse();

    const numeroTarjnew = numTarjReves;

    for (let i = 1; i < numeroTarjnew.length; i = i + 2) {

      numeroTarjnew [i] = numeroTarjnew [i] * 2;

      if (numeroTarjnew [i] >= i) {

        numeroTarjnew[i] = (numeroTarjnew[i] % 10) + 1;

      }

      sum += parseInt(numeroTarjnew[i]);
      console.log(sum);
      
    }
    
  },

  maskify: function (numeroTarjeta) {

    numeroTarjeta = numeroTarjeta.toString();
    
    let acumulador = "";
  
    for (let j = 0; j < numeroTarjeta.length; j++) {
      
      if (j > numeroTarjeta.length - 5) {
        acumulador = acumulador + numeroTarjeta[j];
        
      }else{
        acumulador = acumulador + "#"
      }
     
    }
    console.log(acumulador);
    return acumulador;
  }

}



export default validator;