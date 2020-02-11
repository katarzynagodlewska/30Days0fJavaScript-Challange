const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const pattern = /\d+/g
const matches = text.match(pattern)
console.log(matches)
const sum=parseInt(matches[0]*12) + parseInt(matches[1]) + parseInt(matches[2]*12)
console.log(sum) 