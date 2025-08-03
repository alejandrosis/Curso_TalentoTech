// Parte 1
// Paso 1: Declaración de variables (puedes usar valores fijos o pedir al usuario)
// Paso 1: Declaración de variables (se piden dentro del bucle más abajo)

// Paso 2: Funciones para realizar operaciones matemáticas
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Error: No se puede dividir entre cero.";
  }
  return a / b;
}

// Función principal que ejecuta la operación según el nombre
function realizarOperacion(num1, num2, operacion) {
  if (operacion === "suma") {
    return sumar(num1, num2);
  } else if (operacion === "resta") {
    return restar(num1, num2);
  } else if (operacion === "multiplicacion") {
    return multiplicar(num1, num2);
  } else if (operacion === "division") {
    return dividir(num1, num2);
  } else {
    return "Operación inválida. Intente con: suma, resta, multiplicacion o division.";
  }
}

// Paso 4: Bucle para realizar múltiples operaciones
while (true) {
  let operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division) o escriba 'salir' para terminar:");

  if (operacion === "salir") {
    alert("Gracias por usar la calculadora. ¡Hasta pronto!");
    break;
  }

  let num1 = parseFloat(prompt("Ingrese el primer número:"));
  let num2 = parseFloat(prompt("Ingrese el segundo número:"));

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor ingrese números válidos.");
    continue;
  }

  let resultado = realizarOperacion(num1, num2, operacion);
  alert("Resultado: " + resultado);
}

