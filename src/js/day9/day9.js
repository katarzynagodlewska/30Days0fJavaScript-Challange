const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' }
  ]

countries.forEach(element => console.log(element));
names.forEach(element => console.log(element));
numbers.forEach(element => console.log(element));

const namesToUpperCase = names.map(name => name.toUpperCase());
console.log(namesToUpperCase);

const lengthOfCountries = countries.map(country => country.length);
console.log(lengthOfCountries);

const sqareOfNumbers = numbers.map(number => number * number);
console.log(sqareOfNumbers);

const countryContainingLand = countries.filter (country => 
  country.includes('land')
);
console.log(countryContainingLand);

const countriesHaveSixLetters = countries.filter (country => country.length === 6);
console.log(countriesHaveSixLetters);

const countrieStartWithE = countries.filter (country => country.startsWith('F'));
console.log(countrieStartWithE);

const sumOfNumbers = numbers.reduce((accum, curr) => accum + curr);
console.log(sumOfNumbers);

const countriesAllContainingLand = countries.every(country => country.includes('land'));
console.log(countriesAllContainingLand);

const positionOfRussia = countries.findIndex(country => country === 'Russia');
console.log(positionOfRussia);

const positionOfNorway = countries.findIndex(country => country === 'Norway');
console.log(positionOfNorway);