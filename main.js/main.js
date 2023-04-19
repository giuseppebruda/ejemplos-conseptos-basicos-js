/* calculadora de prmedio de estudiantes */
/* primero defino las variables */
let notas;
let cantidadNotas;
let promedio;
let suma=0;
let nombre = prompt("ingresa el nombre del estudiante")
/* funcion para dar el promedio a un estudiante  */
function calificacion() {
cantidadNotas = parseInt(prompt("ingresa la cantidad de notas a promediar"))
//ciclo for
for(i=1; i < cantidadNotas +1; i++){
    notas= parseFloat(prompt(`ingresa la nota #${i} de ${nombre}`));
    suma = suma + notas;
    }
promedio = suma / cantidadNotas
alert(`el promedio de ${nombre} es ${promedio}`)
/* if else */
if (promedio < 4.5 ) {
    alert(`${nombre} lamentablemente no aprobo`)
} else {
    alert(`${nombre} aprobo con un promedio de ${promedio}`)
}
}
calificacion()

/* calculo de cuotas de un prestamo */
/* funciones tipo flecha para rosolver el ejercicio */
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const divicion = (a, b) => a / b;
const interes = 1 / 100;
let tiempo;
let saludo;
const pow = (a, b) => Math.pow(a, b);
/* funcion para calcular prestamos con operaciones complejas */
function calculadoraPrestamos(){    
let personalizado = prompt("primero dinos tu nombre completo");
saludo = alert(`bienvenido ${personalizado} empecemos con tu simulador de creditos con taza del interes al 1%`)
let prestamo = parseInt(prompt(`${personalizado} por favor ingresa el monto  del prestamo`));
tiempo = parseInt(prompt(`${personalizado} ahora dinos a cuantos meses queres el prestamo`))

let cuotas = divicion(multiplicacion(interes , prestamo ),resta(1 , pow(interes,tiempo)));

alert(`pagaras cuotas de ${cuotas}`)
}
calculadoraPrestamos()