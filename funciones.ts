
// En este caso hay que poner el tipo porque sino seria un any y no queremos eso
// Las funciones no tienen inferencia si no tienen contexto
// function saludar(name: string) {
//     console.log(`hola ${name}`)
// }

// saludar("pedro")
// saludar(10)

// ----------------------------------------------------------------------------------------------------------------------------
// Esto está mal, porque al intentar poner tipos estamos refiriendonos en realidad a sintaxis JS, estamos renombrando los nombres de las propiedades del objeto
// function saludar({ name: string, age: number }) {
//     console.log(`Hola ${name} tienes ${age} años`)
// }

// saludar({ name: 10, age: "hola" })


// Esto se puede arreglar de dos formas 
// 1. Forma 
// function saludar({ name, age }: { name: string, age: number }) {
//     console.log(`Hola ${name} tienes ${age} años`)
// }

// // saludar({ name: 10, age: "hola" })
// saludar({ name: "pedro", age: 20 })
// ahora si estamos pudiendo recibir bien los datos

// 2. Forma
// function saludar(persona: { name: string, age: number }) {
//     const { name, age } = persona
//     console.log(`Hola ${name} tienes ${age} años`)
// }

// saludar({ name: 10, age: "hola" })
// saludar({ name: "pedro", age: 20 })


// Tambien podemos tipar lo que devuelve la funcion
// TS tiene inferencia sobre el tipo que devuelve la funcion
// function saludar(persona: { name: string, age: number }) {
//     const { name, age } = persona
//     console.log(`Hola ${name} tienes ${age} años`)
//     return age
// }

// let username: string
// En el error de abajo no se puede asignarle la funcion saludar porque la variable username es de tipo string y la funcion retorna un number, esto es gracias a la inferencia
// username = saludar({ name: "pedro", age: 20 })


// Para decirle lo que queremos que devuelva se hace asi
// function saludar(persona: { name: string, age: number }): number {
//     const { name, age } = persona
//     console.log(`Hola ${name} tienes ${age} años`)
//     return age
// }


// fn recibe una funcion que tiene un parametro llamado name que es un strign y retorna un void porque no devuelve nada
// Una forma de tipar funciones es de la siguiente manera
// const sayHiFromFunction = (fn: (name: string) => void) => {
//     fn("pedro")
// }

// const sayHi = (name: string) => {
//     console.log(`Hola ${name}`)
// }

// sayHiFromFunction(sayHi)


// Void: se utiliza para indicar que una función no devuelve un valor. Es el tipo que se le asigna a una función cuyo propósito es realizar una acción sin retornar nada al código que la llama. tambien se usa cuando no importa si devuelve un valor o no
// Ejemplo básico
// function sayHello(): void {
//     console.log("Hello, world!");
// }

// Si la funcion no se especifica el return devuelve undefined


// Tipar las arrow functions
// const sumar = (a: number, b: number): number => {
//     return a + b
// }

// const restar: (a: number, b: number) => number = (a, b) => {
//     return a - b
// }

