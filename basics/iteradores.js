// Iteradores en Arrays

/*
    forEach
    map
    filter
    reduce
    some
    every
*/

// forEach
const animals = ['cat','dog','bird','bear'];
animals.forEach(
    function (animal){
        console.log ('Hello ' + animal);
    }
);
animals.forEach(
    (animal) => {
        console.log ('Hello ' + animal);
    }
);

animals.forEach(animal => console.log('Hello ' + animal));

//map
//retorna nuevo array a partir del original
const animalColor = animals.map(
    animal => {
        return animal + " tricolor"
    }
);

const animalMayus = animals.map(animal => animal.toUpperCase());

console.log(animals);
console.log(animalColor);
console.log(animalMayus);

const numeros=[1,2,3,4,5,6,7];
const cuadrados = numeros.map(numero=>numero ** 2);

console.log(numeros);
console.log(cuadrados);

//filter 
//crear un array apartir del original
//mientras cumplan una condicion
const pares = numeros.filter(
    numero => {
        if (numero % 2 === 0){
            return numero;
        }    
    }
)

// const impares = numeros.filter(numero => % 2 !== 0);

console.log(numeros);
console.log(pares);
// console.log(impares);

//reduce
//regresa un unico valor a partir de array

const sumatoria = numeros.reduce(
    (a,b) => {
        return a + b;
    }
);

const factorial = numeros.reduce ((a,b) => a*b);

console.log();
console.log(numeros);
console.log(sumatoria);
console.log(factorial);


//same
console.log(numeros.some(numero=>numero >6 ));
console.log(numeros.some(numero=>numero >8 ));

//every
console.log(numeros.every(numero=>numero >6 ));
console.log(numeros.every(numero=>numero >8 ));

