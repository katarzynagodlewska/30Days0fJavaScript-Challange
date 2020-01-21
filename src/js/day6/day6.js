//ex 1
/*let result= ''
for (let i=0; i<10; i++) {
    result+=String.fromCharCode(Math.random()* 100+ 56)
};
console.log(result)
*/

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
const newArr = []

  for (let i=0; i < countries.length; i++) {
      newArr.push(countries[i].toUpperCase())
  }
;
console.log(newArr)


//ex 5
const lenghts = []

  for (let i=0; i < countries.length; i++) {
      lenghts.push(countries[i].length)
  }
;
console.log()

//ex 6
const shortcuts = []
for (const country of countries) {
    shortcuts.push(country[0]+country[1].toUpperCase()+country[2].toUpperCase())
}
console.log(shortcuts)

let result = [] 
for (let i = 0; i < countries.length; i++) {
    let resultArray=[];
    resultArray.push(countries[i]);
    resultArray.push(shortcuts[i]);
    resultArray.push(lenghts[i]);
    result.push(resultArray);
}

console.log(result);