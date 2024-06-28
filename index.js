// alert displays to the user
alert(`Hello`);

// console.log displays in the dev tools -> console tab
console.log(`Hey there`)

// variables are placeholders for values
const age = 16;
const name = `William Shakespeare`

// variable values have data types
const cookiesEaten = 12; // number
const message = `There's a snake in my boot!` // string
const isInAntarctica = false // boolean
const blackHole = null; // null
const carName = undefined // undefined

// you can do math with numbers
const daysToGo = 46 + 12; // 58
const remainder = 13 % 2; // 1

// you can concatenate strings
const firstName = `Lucy`;
const lastName = `Ford`;

const fullName = `Your full name is ${firstName} ${lastName}`;


// typeof tells us the data type of a variable
console.log(typeof firstName) // string
console.log(typeof cookiesEaten) // number

// logical operators tell us if something is true or false
const isSuperman = false;
const livesInCalifornia = false;
const isOlderThan21 = true;
const livesInSotuhCarolina = true;

console.log(isSuperman && livesInSotuhCarolina) // false
console.log(isOlderThan21 && livesInSotuhCarolina) // true

console.log(isSuperman || livesInSotuhCarolina) // true
console.log(isSuperman || livesInCalifornia) // false


// comparison operators tell us if two things are the same or not
const bunnyCount = 2;
const kidsCount = 2;
const furColor = `brown`;
const numberAsString = `2`;

console.log(bunnyCount === kidsCount) // true
console.log(bunnyCount === numberAsString) // false
console.log(kidsCount === furColor) // false
