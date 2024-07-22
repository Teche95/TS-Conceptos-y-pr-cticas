
// A diferencia de javascript en typescript el tipado es fuerte y estatico 

// El tipado fuerte es cuando declaras una variable con string por ejemplo a = "hola" pero no se puede modificar el valor de la variable a por ejemplo a = 10 


// Ejemplo de tipado debil y dinamico en JS
// let a = 10
// a = "hola"

// anotacion de tipos
let a: number = 10


// typescript no funciona en tiempo de ejecucion, nuestro codigo de TS se tranforma a JS en tiempo de compilacion, el navegador no entiendo TS

// concepto de inferencia: TS es capaz de ver el objeto y mostrarte la forma que tiene, por ejemplo nombre es de tipo string y edad de tipo number

const persona = {
    nombre: "pedro",
    edad: 20
}

persona.nombre = "hola"

// Otro ejemplo de inferencia seria que si declaramos una variable
let ab = "hola"
// No necesitamos poner el tipo porque TS ya sabe que tipo es. let ab:string 



// En TS hay que intentar escribir los menos tipos posibles 

// Tipo any: no le estamos diciendo que es cualquier tipo de dato, lo que le estamos diciendo es que ignore el tipado de TS
let anyValue: any = "hola"
// anyValue. por eso vscode no muestra opciones para trabajar con el string porque any está ignorando el tipo

// Tipo unknown: no sabemos cual es el tipo


