import validator from "./validator.js";
//                      llamado del dom👇
const validatorBtn = document.getElementById("validarBtn");
const numerosInput = document.getElementById("tuTarjeta");
const nombreInput = document.getElementById("tuNombre");

validatorBtn.addEventListener("click", () => {
  const numerosInput = document.getElementById("tuTarjeta").value;
  const nombreInput = document.getElementById("tuNombre").value;

  if (numerosInput === "" || nombreInput === "") {
    alert("llena los campos");
    return;
  }
  const resultado = validator.isValid(numerosInput);
  if (resultado === true) {
    document.getElementById("card-true").style.display = "block";
  } else {
    document.getElementById("card-false").style.display = "block";
  }
  const maski = validator.maskify(numerosInput);
  alert(maski);
});

numerosInput.addEventListener("input", () => {
  document.getElementById("digitosTarjeta").innerHTML =
    document.getElementById("tuTarjeta").value;
});
nombreInput.addEventListener("input", () => {
  document.getElementById("digitosNombre").innerHTML =
    document.getElementById("tuNombre").value;
});
