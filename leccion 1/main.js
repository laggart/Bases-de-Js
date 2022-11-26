console.log('Hola mundo')

const name = 'Juan Carlos'

const age = 43

const mayorDeEdad = true

const direccion = {
   calle: 'Mi calle',
   numero: 1234,
   piso: 2,
   puerta: 'A' 
}

const coloresFavoritos = [
    'verde', 'naranja', 'azul'
]

const lenguajesFavoritos = [
    'JavaScript', 'Python', 'node.js', 'Ruby', 'PHP'
]

const mejorLenguaje = lenguajesFavoritos[0]

const peorLenguaje = lenguajesFavoritos[lenguajesFavoritos.length - 1]

const numero1 = 3
const numero2 = 5

let sumaDeValores = numero1 + numero2
console.log({ sumaDeValores })

const saludo ='hola'
if (saludo === 'hola') {
    console.log('Ha saludado')
}

const pokemons = ['Bulbasur', 'Charmander','Squirtle']
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

function doble(numero) {
    return numero * 2
}

console.log(doble(4));


function cuadrado(numero) {
    return numero * numero
}

console.log(cuadrado(3));

function areaRectangulo(base, altura) {
    return base * altura
}

console.log(areaRectangulo(5, 10))

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

const personas = [

    { nombre: 'Juan', edad: 18 },
  
    { nombre: 'María', edad: 16 },
  
    { nombre: 'Pedro', edad: 20 },
  
    { nombre: 'Pablo', edad: 15 },
  
    { nombre: 'Laura', edad: 19 },
  
  ];

  function mayoresDeEdad(personas) {
    
  }







