const validator = {
  // ...
  isValid: function (creditCardNumber) {
    const creditCardString = creditCardNumber.toString(); // toString() pasa los numero del input para que se coloquen en un string pero queda asi("123456789")
    const numerosTarjeta = creditCardString.split("").map(Number); //.map(Number)recorre el arreglo y lo pasa a numeros ya que al principio queda en string y asi no se puede hacer operaciones matemaricas- split("")Separar cada dígito de la cadena de caracteres y almacenarlos en un array
    const numerosReverse = numerosTarjeta.reverse(); // reverse() con el metodo revertimos el string
    let sumaNumeros = 0; // se inicia en 0 pa ir sumando
    for (let i = 0; i < numerosReverse.length; i++) {
      let digito = numerosReverse[i]; // se recorre numerosReverse y se almacena en digitos
      if (i % 2 === 1) {
        digito *= 2;
        if (digito > 9) {
          digito -= 9;
        }
      }
      sumaNumeros += digito; //sumaNumeros se le suman los digitos ya que esta vacio arriba
    }

    return sumaNumeros % 10 === 0; //si el residuo de suma es 0 ya se coloca en true
  },
  maskify: function (creditCardNumber) {
    if (creditCardNumber.length <= 4) {
      return creditCardNumber; // Verificar si la cadena es menor o igual a 4 caracteres si es asi solo va a mostrar esos 4 caracteres
    } else {
      return (
        "#".repeat(creditCardNumber.length - 4) + creditCardNumber.slice(-4)
      ); //creditCardNumber.slice(-4) pido los ultimos 4 digitos
    }
  },
};

export default validator; 
