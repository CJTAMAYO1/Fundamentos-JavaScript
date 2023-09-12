// Strings en Javascript

let miString = "Este Es uN Text0" + ' de prueba'
console.log(miString);

console.log(miString.charAt(5));
console.log(miString.endsWith('a'));
console.log(miString.length);
console.log(miString.repeat(2));
console.log(miString.toLowerCase());
console.log(miString.toUpperCase());

console.log("I'm my name is Franck");

console.log('1\'m Franck');

// Strings Multilinea 
const menu=`
1 - Opcion 1
2 - Opcion 2
3 - Opcion 3
`;
console.log(menu);

// Sttings Templates 
// placeholder ${}

const name= 'Peter';
const supehero= 'Spiderman'
const age=20;

console.log("Soy "+ name + " soy " + supehero + ' y tengo ' + age + ' años')
console.log(`Soy ${ name } soy ${ supehero } y tengo ${ age } años`); 