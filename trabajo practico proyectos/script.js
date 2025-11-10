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

let numero = parseInt(prompt("ingrese el numero para generar su tabla de multiplicar"));
let limite = parseInt(prompt("ingrese hasta que numero quiere multiplicar"));

let resultados = [];

for (let i = 1; i <= limite; i++){
    resultados.push(`${numero} * ${i} = ${numero * i}`);
}

console.log(resultados);

for (let i = 0; i < resultados.length; i++) {
    console.log(resultados[i]);
} 


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