
//ex 1
let base = prompt('Enter a base of the triangle');
let height = prompt('Enter a height of the triangle');
let area = base * height * 0.5
alert(`The area is ${area}`);

//ex 2
let sideA = prompt('Enter a side a of triangle');
let sideB = prompt('Enter a side b of triangle');
let sideC = prompt('Enter a side c of triangle');
let perimeter = parseInt(sideA) + parseInt(sideB) + parseInt(sideC);
console.log(`Enter side a: ${sideA}`);
console.log(`Enter side b: ${sideB}`);
console.log(`Enter side c: ${sideC}`);
console.log(`The perimeter of the triangle is ${perimeter}`);

//ex 3
let length = prompt('Enter a length of rectangle');
let width = prompt('Enter a width of rectangle');
let rectangleArea = length * width;
let rectanglePerimeter = 2 * (parseInt(length) + parseInt(width));
console.log(`Enter length: ${length}`);
console.log(`Enter length: ${width}`);
console.log(`The perimeter o the rectangle is ${rectanglePerimeter} and the area is ${rectangleArea}`);

//ex 4
let PI = 3.14;
let radius = prompt('Enter radius of the circle');
let circleArea = PI * radius * radius;
let circleCircumference = 2 * PI * radius;
console.log(`Enter radius: ${radius}`);
console.log(`The area of the circle is ${circleArea} and the circumerence is ${circleCircumference}`);

//ex 5
let a = 2;
let b = -2;
let y0 = a * 0 + b;
let x0 = 2 / 2;
console.log(`y0 = ${y0}`);
console.log(`x0 = ${x0}`);

//ex 9
let hoursOfWork = prompt('Enter hours');
let ratePerHour = prompt('Enter rate per hour');
let earning = hoursOfWork * ratePerHour;
console.log(`Your weekly earning is ${earning}`);

//ex 10
let myName = 'Katarzyna';
myName.length > 7
    ? console.log('My name is long')
    : console.log('My name is short')
;

//ex 11
let firstName = prompt('Enter your first name')
let lastName = prompt('Enter your family name')
firstName.length > lastName.length
    ? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
    : (firstName.length < lastName.length ?
     console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`) 
     : console.log(`Your first name, ${firstName} and your family name, ${lastName} have got the same length`))
;

//ex 12
let myAge = 23;
let yourAge = 37;
let diff = yourAge - myAge
console.log(`You are ${diff} years older than me`);

//ex 13
let birthYear = prompt('Enter your birth year');
let nowTime = new Date()
const yearNow = nowTime.getFullYear()
let age = yearNow - birthYear
let difference = 18 - age
age >= 18 
    ? console.log(`You are ${age}. You are old enough to drive`)
    : console.log(`You are ${age}. You will be allowed to drive after ${difference} years.`)
;
//ex 14
const years = prompt('Enter number of years you live')
const seconds = years * 31536000;
console.log(`You lived ${seconds} seconds.`)

//ex 15
const now = new Date();
const year = now.getFullYear()
const month = now.getMonth() + 1
const date = now.getDate()
const hours = now.getHours()
const minutes = now.getMinutes()
console.log(`${year}-${month}-${date} ${hours}:${minutes}`);
console.log(`${date}-${month}-${year} ${hours}:${minutes}`);
console.log(`${date}/${month}/${year} ${hours}:${minutes}`);