const Estudiante = .20;   // Descuento del 80%
const Trainee = .50;      // Descuento del 50%
const Junior = .85;       // Descuento del 15%


const ApuntadorAPesosIngresados = document.getElementById("PesosIngresados");
const ApuntadorACategoria = document.getElementById("categoria");
const ApuntadorAResumen = document.getElementById("resumen");
const ApuntadorATotal = document.getElementById("total-pesos");

function calcularResumen() {
  const pesosIngresados = parseFloat(ApuntadorAPesosIngresados.value);
  const categoriaSeleccionada = ApuntadorACategoria.value;

  if (categoriaSeleccionada === "estudiante") {
    resultado = pesosIngresados * 200 * Estudiante;  
  } else if (categoriaSeleccionada === "trainee") {
    resultado = pesosIngresados * 200 * Trainee;
  } else if (categoriaSeleccionada === "junior") {
    resultado = pesosIngresados * 200 * Junior;
  }

  ApuntadorATotal.innerHTML = `Total a Pagar: ${resultado} $`;
}

ApuntadorAResumen.addEventListener("click", calcularResumen);