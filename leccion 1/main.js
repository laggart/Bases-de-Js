//  EJERCICIOS I
// ---------------------------Ejercicio 1--------------------------------------

// Crea tu primer hola mundo por consola!

console.log('Hola mundo')

// ---------------------------Ejercicio 2--------------------------------------

// Crea una variable llamada nombre y asígnale tu nombre como valor.

const name = 'Juan Carlos'

// Crea una variable llamada edad y asígnale tu edad como valor.

const age = 43

// Crea una variable llamada mayorDeEdad y asígnale un valor booleano que indique si eres mayor de edad.
const mayorDeEdad = true

// Crea una variable llamada direccion y asígnale un objeto con tu dirección.

const direccion = {
   calle: 'Mi calle',
   numero: 1234,
   piso: 2,
   puerta: 'A' 
}

// Crea una variable llamada coloresFavoritos y asígnale un array con tus colores favoritos.

const coloresFavoritos = [
    'verde', 'naranja', 'azul'
]

// Crea una variable llamada lenguajesFavoritos y asígnale un array con tus lenguajes de programación favoritos.

const lenguajesFavoritos = [
    'JavaScript', 'Python', 'node.js', 'Ruby', 'PHP'
]

// Crea una variable llamada mejorLenguaje y asígnale el primer elemento del array lenguajesFavoritos.

const mejorLenguaje = lenguajesFavoritos[0]

// Crea una variable llamada peorLenguaje y asígnale el último elemento del array lenguajesFavoritos.

const peorLenguaje = lenguajesFavoritos[lenguajesFavoritos.length - 1]

// ---------------------------Ejercicio 3--------------------------------------

// Crea dos variables, una llamada numero1 y otra llamada numero2.

const numero1 = 3
const numero2 = 5

// Suma las dos variables y muestra el resultado por consola.

let sumaDeValores = numero1 + numero2
console.log({ sumaDeValores })

// ---------------------------Ejercicio 4--------------------------------------

// Crea una variable llamada saludo y asígnale un string que contenga hola.

const saludo ='hola'

// Comprueba con un if si el string saludo es igual a hola. Y saca por consola un mensaje que diga "Ha saludado".

if (saludo === 'hola') {
    console.log('Ha saludado')
}

// ---------------------------Ejercicio 5--------------------------------------

// Crea un array de 3 pokemons.

const pokemons = ['Bulbasur', 'Charmander','Squirtle']

// Muestra por consola el nombre de cada pokemon.

console.log(pokemons[0])
console.log(pokemons[1])
console.log(pokemons[2])


//bonus 1 en una línea

console.log(pokemons.join(' '))
console.log(pokemons[0], pokemons[1], pokemons[2])

//en bucle

for (let i=0; i < pokemons.length; i++) {
    console.log(pokemons[i])
}

for (const pokemon of pokemons) {
    console.log(pokemon)
}

pokemons.forEach((pokemon) => {
    console.log(pokemon);
});

// ---------------------------Ejercicio 6--------------------------------------
// Crea un array de 3 pokemons, el tipo de dato a usar será un objeto. Deberá contener nombre, tipoDePokemon.

const pokemonArray = [
    {
    nombre: 'Bulbasur',
     tipo: 'planta', 
    },
    {
    nombre: 'Charmander',
    tipo: 'fuego'
    },
    {
    nombre: 'Squirtle',
    tipo: 'agua'
    }
];

// Crea una condición y si el tipo de pokemon es fuego muestra por consola el mensaje ¡Es un pokemon de fuego!.

if (pokemonArray[0].tipo === 'fuego') {
    console.log('¡Es un pokemon de fuego! 🔥');
} else if (pokemonArray[1].tipo === 'fuego') {
    console.log('¡Es un pokemon de fuego! 🔥');
} else if (pokemonArray[2].tipo === 'fuego') {
    console.log('¡Es un pokemon de fuego! 🔥');
}

// o solucionamos con bucle

for (let i = 0; i < pokemonArray.length; i++) {
    const pokemon = pokemonArray[i];
    if (pokemon.tipo === 'fuego') {
        console.log('¡Es un pokemon de fuego! 🔥');
    }
}

pokemonArray.forEach((pokemon) => {
   if (pokemon.tipo === 'fuego') {
    console.log('¡Es un pokemon de fuego! 🔥');
   }
});

// -----------------------------------------------Ejercicios Función----------------------------

// ---------------------------Ejercicio 1--------------------------------------
// Crea una función que reciba un número y devuelva el doble de ese número.

function doble(numero) {
    return numero * 2
}

console.log(doble(4));

// ---------------------------Ejercicio 2--------------------------------------
// Crea una función que reciba un número y devuelva el cuadrado de ese número.

function cuadrado(numero) {
    return numero * numero
}

console.log(cuadrado(3));

// ---------------------------Ejercicio 3--------------------------------------
// Crea una función que calcule el área de un rectángulo y la muestre por consola.

function areaRectangulo(base, altura) {
    return base * altura
}

console.log(areaRectangulo(5, 10))

// ---------------------------Ejercicio 4--------------------------------------
// Crea una función que reciba un número y muestre por consola si es par o impar.

function parImparComparador(numero) {
    if (numero % 2 === 0) {
        return 'par'
    }
    return 'impar'
}

console.log(parImparComparador(4))


function parImparComparadorTernary(numero) {
    return numero % 2 === 0 ? 'par' : 'impar' 
}

console.log(parImparComparadorTernary(11))

// ---------------------------Ejercicio 5--------------------------------------
// Dado el siguiente array de personas:

const personas = [

    { nombre: 'Juan', edad: 18 },
  
    { nombre: 'María', edad: 16 },
  
    { nombre: 'Pedro', edad: 20 },
  
    { nombre: 'Pablo', edad: 15 },
  
    { nombre: 'Laura', edad: 19 },
  
  ];

// Crea una función que reciba un array de personas y devuelva un array con las personas mayores de edad.

  function mayoresDeEdad(personas) {
    const mayores = []
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].edad >= 18) {
            mayores.push(personas[i])
        }
    }
    return mayores;
  }

  console.log(mayoresDeEdad(personas));

  // For of 

  function mayoresDeEdadForOf(personas) {
    const mayores = []
    for (const persona of personas) {
        if (persona.edad >= 18) {
            mayores.push(persona)
        }
    }
    return mayores
  }
console.log(mayoresDeEdadForOf(personas))

// Dime cual es la persona más joven del array.
// Mas Joven reduce


function masJovenRed(personas) {
    const masJoven = personas[0]
    return personas.reduce((masJoven, persona) => {
        if (persona.edad < masJoven.edad) {
            return persona
        }
        return masJoven
    })
}
console.log(masJovenRed(personas))

// Dime cual es la persona más mayor del array.
// Mas Mayor reduce

function masMayorRed(personas) {

    return personas.reduce((masMayor, persona) => {
        if (persona.edad > masMayor.edad) {
            return persona
        }
        return masMayor
    })
}
console.log(masMayorRed(personas))

const str = "hola Mundo!"
function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
  }
  console.log(reverseWords(str))












