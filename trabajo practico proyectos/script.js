//calculadora simple
/*
let numero1;
while (isNaN(numero1)) {
  numero1 = parseFloat(prompt("ingrese el primer Numero"));
}
let numero2;
while (isNaN(numero2)) {
  numero2 = parseFloat(prompt("ingrese el segundo numero"));
}
let operacion;
while (!["+", "-", "*", "/"].includes(operacion)) {
  operacion = prompt("ingrese la operacion a realizar: +, -, *, /");
}

///estructura condicional
let resultado;

if (operacion === "+") {
    resultado = numero1 + numero2;
    alert("El resultado de la suma es: " + resultado);
} else if (operacion === "-") {
    resultado = numero1 - numero2;
    alert("El resultado de la resta es: " + resultado);
} else if (operacion === "*") {
    resultado = numero1 * numero2;
    alert("El resultado de la multiplicacion es: " + resultado);
} else if (operacion === "/") {
    resultado = numero1 / numero2;
    alert("El resultado de la division es: " + resultado);
} else {
    alert("Operacion no valida");
}

//mostrar resultado en consola
console.log("el resultado de la operacion " + operacion + " entre " + numero1 + " y " + numero2 + " es: " + resultado);*/


//// ejercicio adicional agrega validaciones para que el usuario ingrese solo numeros y operaciones validas

/*

///clase 2  Adivina el numero 
//// Temas: condicionales, operadores lógicos y comparación (==, <, >, <=, >=, !=)

alert("🎯 Bienvenido al juego de 'Adivina el número'! Tendrás 3 intentos para adivinar el número secreto.");

// El usuario elige el rango
let maximo = parseInt(prompt("Elige el número máximo del rango (por ejemplo, 10):"));

// Validación del rango
while (isNaN(maximo) || maximo < 1) {
  maximo = parseInt(prompt("Por favor, ingresa un número válido mayor o igual a 1:"));
}

// Generar número secreto dentro del rango elegido
const numeroSecreto = Math.floor(Math.random() * maximo) + 1;
let intentos = 3;
let adivinadas = false;

while (intentos > 0 && !adivinadas) {
  let numero = parseInt(prompt(`Adivina el número entre 1 y ${maximo}. Intentos restantes: ${intentos}`));

  // Validar que el número ingresado esté dentro del rango
  if (isNaN(numero) || numero < 1 || numero > maximo) {
    alert(`⚠️ Ingresa un número válido entre 1 y ${maximo}.`);
    continue; // vuelve al inicio del while sin restar intentos
  }

  if (numero === numeroSecreto) {
    alert("🎉 ¡Felicidades! Adivinaste el número 😎");
    adivinadas = true;
  } else if (numero > numeroSecreto) {
    alert("El número secreto es menor que " + numero);
  } else {
    alert("El número secreto es mayor que " + numero);
  }

  intentos--;
}

if (!adivinadas) {
  alert(`😢 Lo siento, el número secreto era ${numeroSecreto}.`);
}*/


////clase 3 generador de tablas de multiplicar
/*

let numero = parseInt(prompt("ingrese el numero para generar su tabla de multiplicar"));
let limite = parseInt(prompt("ingrese hasta que numero quiere multiplicar"));

let resultados = [];

for (let i = 1; i <= limite; i++){
    resultados.push(`${numero} * ${i} = ${numero * i}`);
}

console.log(resultados);

for (let i = 0; i < resultados.length; i++) {
    console.log(resultados[i]);
}    */

///clase 4
/*
function celsiusAFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}
// Convierte grados Fahrenheit a Celsius
// Fórmula: °C = (°F - 32) × 5/9
const fahrenheitACelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

// Fórmula: K = °C + 273.15
const celsiusAKelvin = (celsius) => celsius + 273.15;

const kelvinACelsius = (kelvin) => kelvin - 273.15;

let opcion = prompt("Elige una opción:\n1. °C → °F\n2. °F → °C\n3. °C → K\n4. K → °C");

if (opcion === "1") {
    // Pide al usuario que ingrese la temperatura en Celsius
    let celsius = parseFloat(prompt("Ingrese la temperatura en °C:"));
    
    // Realiza la conversión y muestra el resultado
    console.log(`${celsius}°C = ${celsiusAFahrenheit(celsius).toFixed(2)}°F`);

// ==========================================
// OPCIÓN 2: Fahrenheit a Celsius
// ==========================================
} else if (opcion === "2") {
    // Pide al usuario que ingrese la temperatura en Fahrenheit
    let fahrenheit = parseFloat(prompt("Ingrese la temperatura en °F:"));
    
    console.log(`${fahrenheit}°F = ${fahrenheitACelsius(fahrenheit).toFixed(2)}°C`);

} else if (opcion === "3") {
    let celsius = parseFloat(prompt("Ingrese la temperatura en °C:"));
    
    console.log(`${celsius}°C = ${celsiusAKelvin(celsius).toFixed(2)}K`);

} else if (opcion === "4") {
    let kelvin = parseFloat(prompt("Ingrese la temperatura en K:"));
    
    console.log(`${kelvin}K = ${kelvinACelsius(kelvin).toFixed(2)}°C`);

} else {
    // Muestra un mensaje de error si la opción no es válida
    console.log("Opción no válida ❌");
}
*/
// ==========================================
// NOTAS IMPORTANTES:
// ==========================================
// • parseFloat() convierte el texto ingresado en número decimal
// • toFixed(2) redondea el resultado a 2 decimales
// • Kelvin nunca puede ser negativo (el cero absoluto es 0K = -273.15°C)





////eje 5 

// 🛒 LISTA DE COMPRAS CON TOTALES

let listaCompras = [
    { nombre: "Leche", precio: 1200, cantidad: 2 },
    { nombre: "Pan", precio: 800, cantidad: 1 },
    { nombre: "Huevos", precio: 2500, cantidad: 1 },
    { nombre: "Café", precio: 3200, cantidad: 1 }
];

// Mostrar lista con forEach
console.log("📋 Lista de compras:");
listaCompras.forEach((item) => {
    console.log(`- ${item.nombre} (x${item.cantidad}) $${item.precio}`);
});

// Calcular el total usando reduce
const total = listaCompras.reduce(
    (acum, item) => acum + item.precio * item.cantidad,
    0
);
console.log(`💰 Total a pagar: $${total}`);

// Filtrar productos caros
const productosCaors = listaCompras.filter((item) => item.precio > 1000);
console.log("💵 Productos con precio mayor a $1000:", productosCaors);

// Buscar un producto
const buscar = prompt("Ingrese el nombre del producto que desea buscar:");
const encontrado = listaCompras.find(
    (item) => item.nombre.toLowerCase() === buscar.toLowerCase()
);
if (encontrado) {
    console.log(
        `🔍 Encontrado: ${encontrado.nombre} cuesta $${encontrado.precio}`
    );
} else {
    console.log("❌ Producto no encontrado");
}

// ==========================================
// DESAFÍO: AGREGAR Y ELIMINAR PRODUCTOS
// ==========================================

// AGREGAR un producto usando push()
console.log("\n➕ Agregando producto nuevo...");
listaCompras.push({ nombre: "Azúcar", precio: 1500, cantidad: 2 });
console.log("✅ Producto agregado. Nueva lista:");
listaCompras.forEach((item) => {
    console.log(`- ${item.nombre} (x${item.cantidad}) $${item.precio}`);
});

// ELIMINAR un producto usando splice()
// splice(índice, cantidad_a_eliminar)
console.log("\n➖ Eliminando el primer producto...");
listaCompras.splice(0, 1); // Elimina 1 elemento desde el índice 0
console.log("✅ Producto eliminado. Nueva lista:");
listaCompras.forEach((item) => {
    console.log(`- ${item.nombre} (x${item.cantidad}) $${item.precio}`);
});







///ej 6
// 🗂️ AGENDA DE CONTACTOS BÁSICA
/*
let agenda = [];

// 📞 Función para agregar contactos
function agregarContacto(nombre, telefono, email) {
  const contacto = { nombre, telefono, email };
  agenda.push(contacto);
  console.log(`✅ Contacto agregado: ${nombre}`);
}

// 📋 Función para mostrar todos los contactos
function mostrarAgenda() {
  console.log("📔 Lista de contactos:");
  agenda.forEach(({ nombre, telefono, email }, i) => {
    console.log(`${i + 1}. ${nombre} - 📞 ${telefono} - ✉️ ${email}`);
  });
}

// 🔍 Función para buscar contacto
function buscarContacto(nombre) {
  const contacto = agenda.find(
    (c) => c.nombre.toLowerCase() === nombre.toLowerCase()
  );
  if (contacto) {
    console.log(`🔎 Encontrado: ${contacto.nombre} - ${contacto.telefono}`);
  } else {
    console.log("❌ Contacto no encontrado");
  }
}

// 🗑️ Función para eliminar contacto
function eliminarContacto(nombre) {
  const index = agenda.findIndex(
    (c) => c.nombre.toLowerCase() === nombre.toLowerCase()
  );

  if (index !== -1) {
    const eliminado = agenda.splice(index, 1)[0];
    console.log(`🗑️ Contacto eliminado: ${eliminado.nombre}`);
  } else {
    console.log("⚠️ No se encontró el contacto para eliminar");
  }
}

// 💾 Función para exportar agenda a JSON
function exportarAgenda() {
  const json = JSON.stringify(agenda, null, 2);
  console.log("📤 Agenda en formato JSON:\n", json);
}

// 🧠 Programa principal (ejemplo)
agregarContacto("Ana", "261-1234567", "ana@mail.com");
agregarContacto("Luis", "261-7654321", "luis@mail.com");
mostrarAgenda();

buscarContacto("Ana");
eliminarContacto("Ana");
mostrarAgenda();

exportarAgenda();
*/