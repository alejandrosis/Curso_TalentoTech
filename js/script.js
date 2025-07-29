// Parte 1
let nombre = "Juan";
let edad = 25;
let esEstudiante = true;

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("¿Es estudiante?:", esEstudiante);

// Cambiar los valores
nombre = "Ana";
edad = 30;
esEstudiante = false;

console.log("Nuevo nombre:", nombre);
console.log("Nueva edad:", edad);
console.log("¿Ahora es estudiante?:", esEstudiante);

// Parte 2
let a = 10;
let b = 5;

// Operaciones matemáticas
console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);

// Comparaciones
console.log("¿a == b?", a == b);
console.log("¿a != b?", a != b);
console.log("¿a > b?", a > b);
console.log("¿a < b?", a < b);
console.log("¿a >= b?", a >= b);
console.log("¿a <= b?", a <= b);

// Parte 3
let esMayorDeEdad = true;
let tieneLicencia = false;

// Evaluar si puede conducir
let puedeConducir = esMayorDeEdad && tieneLicencia;
console.log("¿Puede conducir?", puedeConducir);

// Mensaje usando template literals
let mensaje = `Bienvenido, ${nombre}. Edad: ${edad}. ¿Es estudiante?: ${esEstudiante}`;
console.log(mensaje);
