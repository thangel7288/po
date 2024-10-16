let fecha = new Date();

console.log(fecha);

console.log(fecha.getDate());
console.log(fecha.getDay());

console.log(fecha.getMonth());

console.log(fecha.getFullYear());

console.log(fecha.getHours());

console.log(fecha.getMinutes());

console.log(fecha.toString());

console.log(fecha.toDateString());

console.log(fecha.getTimezoneOffset());


let fechaActual = new Date();
let fechaNacimiento = new Date("2003-09-15"); // Recuerda que el mes comienza en 0

// Calcula la diferencia en milisegundos
let diferencia = fechaActual - fechaNacimiento;

// Convierte la diferencia a días
let diasVividos = Math.floor(diferencia / (1000 * 60 * 60 * 24));

console.log("Días vividos desde mi nacimiento: " + diasVividos);








