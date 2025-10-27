//calculadora simple
/*
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
console.log("el resultado de la operacion " + operacion + " entre " + numero1 + " y " + numero2 + " es: " + resultado);*/

//// ejercicio adicional agrega validaciones para que el usuario ingrese solo numeros y operaciones validas



///clase 2  Adivina el numero 

////temas condicionales, operadores logicos y comparacion (==, <, >, <=, >=, !=) 
/*alert("Bienvenido al juego de Adivina el numero! Tienes 3 intentos para adivinar el numero secreto entre 1 y 10.");
const numeroSecreto = Math.floor(Math.random() * 10) + 1; /// numero entre en 1 y 10 
let intentos = 3;
let adivinadas = false;

while (intentos > 0 && !adivinadas){
    let numero = parseInt(prompt(`Adivina el numero entre 1 al 10. intentos restantes:  ${intentos}`));

    if (numero === numeroSecreto){
        alert("felicidades! Adivinaste el numero perro! ");
        adivinadas = true;
    } else if (numero > numeroSecreto){
        alert("el numero es menor que " +numero);
    }else if (numero < numeroSecreto){
        alert("el numero es mayor que " + numero);
    }
    intentos--; 
}
if (!adivinadas) {
    alert(" :(lo siento, el numero secreto era " + numeroSecreto);
}*/

/// permita que el usuario elija el rango






///ej 6 

let agenda = [];
//funciona pára agendar contactos 

function agregarContacto(nombre, telefono, email) {
    const contacto = {
        nombre,
        telefono,
        email
    };
    agenda.push(contacto);
    console.log(`Contacto agregado: ${nombre}`);
}


///funcnion para mostrar contactos 


function mostrarAgenda(){
    console.log("lista de contactos");
    agenda.forEach(({nombre, telefono, email}, i) =>{
        console.log(`${i +1}. ${nombre} - ${telefono} - ${email}`);
    });
}

//// funcion para buscar contacto 

function buscarContacto(nombre) {
    const contacto = agenda.find(
        (c) => c.nombre.tolowerCase() === nombre.tolowerCase()
    );
    if (contacto) {
        console.log(`encontrado : ${contacto.nombre} - ${contacto.telefono}`);
    } else {
        console.log("contacto no encontrado");
    }
};

///funccion para esportar agenda a JSON

function  exportarAgenda() {
    const json = JSON.stringify(agenda, null, 2);
    console.log("Agenda exportada en formato JSON:");
}

// programa principal 

agregarContacto("ana", "123456789", "ana@example.com");
agregarContacto("juan", "987654321", "juan@example.com");
mostrarAgenda();

buscarContacto("ana");
exportarAgenda();