let challenge = '30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(0, 2));
console.log(challenge.substring(3));
console.log(challenge.includes('Script'));
console.log(challenge.split());
console.log(challenge.split(' '));

let names = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(names.split(', '));

console.log(challenge.replace('JavaScript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));

let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
console.log(sentence.lastIndexOf('because'));
console.log(sentence.search('because'));

let stringWithSpace = ' 30 Days Of JavaScript ';
console.log(stringWithSpace.trim());

console.log(challenge.startsWith('3'));
console.log(challenge.startsWith('30'));

let matchA = /a/gi
console.log(challenge.match(matchA));

let string = '30 Days of';
console.log(string.concat(' JavaScript'));

console.log(challenge.repeat(2));


console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");

let num1 = 10;
let num2 = '10';
let typeOfNum1 = typeof(num1);
let typeOfNum2 = typeof(num2);
console.log(typeOfNum1 == typeOfNum2);
let num2Int = parseInt(num2);
let typeOfNum2Int = typeof(num2Int);
console.log(typeOfNum1 == typeOfNum2Int);

let num3 = '9.8';
let num4 = 10;
let num3Float = parseFloat(num3);
console.log(num3Float == num4);
console.log(Math.round(num3Float) == num4);

let sentence2 = 'I hope this course is not full of jargon.'
console.log(sentence2.includes('jargon'));

let randomNum = Math.random(); 
let numBtnZeroAndHundred = randomNum * 101;
let randomNumRoundToFloor = Math.floor(numBtnZeroAndHundred);
console.log(randomNumRoundToFloor);


