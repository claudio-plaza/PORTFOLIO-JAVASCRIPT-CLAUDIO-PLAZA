//calculadora simple
let numero1 = parseFloat(prompt("ingrese el primer Numero"));
let numero2 = parseFloat(prompt("ingrese el segundo numero"));
let operacion = prompt("ingrese la operacion a realizar: +, -, *, /");
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
console.log("el resultado de la operacion " + operacion + " entre " + numero1 + " y " + numero2 + " es: " + resultado);

//// ejercicio adicional agrega validaciones para que el usuario ingrese solo numeros y operaciones validas



///clase 2  Adivina el numero 

////temas condicionales, operadores logicos y comparacion (==, <, >, <=, >=, !=)

const numeroSecreto = Math.floor(Math.random() * 10) + 1;