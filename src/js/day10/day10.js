const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

let c = [...a, ...b]

let set = new Set()
console.log(set);

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C);

let d = a.filter(num => B.has(num))
let D = new Set (d);
console.log(D);

setOfCountries = new Set (countries)
setOfCountries.delete('Sweden')
console.log(setOfCountries.size)

setOfCountries.clear()
console.log(setOfCountries)

setOfCountriesWithLoop = new Set()
for (const country of countries) {
    setOfCountriesWithLoop.add(country)
}
console.log(setOfCountriesWithLoop)

