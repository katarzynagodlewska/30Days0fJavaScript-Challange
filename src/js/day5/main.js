//ex 2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(/,/g, '').replace('.', '').replace('.', '').split(' ')
console.log(words);
console.log(words.length);

//ex 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
let indexOfMeat = shoppingCart.indexOf('Meat')
indexOfMeat == -1 
    ? shoppingCart.unshift('Meat') : console.log('Meat is already added to shopping card')
;
console.log(shoppingCart)

let indexOfSugar = shoppingCart.indexOf('Sugar')
indexOfSugar == -1
    ? shoppingCart.push('Sugar') : console.log('Sugar is already added to shopping card')
;
console.log(shoppingCart)

console.log(shoppingCart.indexOf('Tea'));
shoppingCart[3] = 'Green Tea'
console.log(shoppingCart)

//ex 4
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  let indexOfEthiopia = countries.indexOf('Ethiopia')
  indexOfEthiopia != -1
      ? console.log(countries[indexOfEthiopia].toUpperCase()) : countries.push('Ethiopia')
  ;
  

//ex 5
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  let indexOfSass = webTechs.indexOf('Sass')
  indexOfSass != -1 
    ? console.log('Sass is a CSS preprocess') : webTechs.push('Sass')
;
console.log(webTechs)

//ex 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)

