const validator = {
  isValid: function (numeroTarjeta) {

    const numeroTarj= numeroTarjeta.split("");

    let sum;

    const numTarjReves = numeroTarj;
    //dar vuelta el numero con array .reverse
    numTarjReves.reverse();
    //se multiplicara por 2
    const numeroTarjnew = numTarjReves;
    //se hara un ciclo para que los numeros se multipliquen

    for (let i = 1; i < numeroTarjnew.length; i = i + 2) {
      numeroTarjnew [i] = numeroTarjnew [i] * 2;

      if (numeroTarjnew[i] >= 10) {
       numeroTarjnew[i] = (numeroTarjnew[i] % 10) + 1;
      }

      sum += parseInt(numeroTarjnew[i]);
      console.log(sum);
    },


maskify: function (params) {
  console.log(params)
}

}
}

export default validator;