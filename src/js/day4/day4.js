//ex 1
let scores = 115;
if (scores >= 0 && scores < 50) {
    console.log("Grade: F");
} else if (scores >= 50 && scores < 60) {
    console.log("Grade: E");
} else if (scores >= 60 && scores < 70) {
    console.log("Grade: D");
} else if (scores >= 70 && scores < 80) {
    console.log("Grade: C");
} else if (scores >= 80 && scores < 90) {
    console.log("Grade: B");
} else if (scores >= 90 && scores < 100) {
    console.log("Grade: A");
} else {
    console.log("Wrong scores");
}

//ex 2
/*let monthUserInput = prompt('What month is now?');
let month = monthUserInput.toLowerCase();

switch (month) {
    case 'december' :
        console.log('The season is Winter')
        break
    case 'january' :
        console.log('The season is Winter')
        break
    case 'february' :
        console.log('The season is Winter')
        break     
    case 'march' :
        console.log('The season is Spring')
        break
    case 'april' :
        console.log('The season is Spring')
        break      
    case 'may' :
        console.log('The season is Spring')
        break
    case 'june' :
        console.log('The season is Summer')
        break
    case 'july' :
        console.log('The season is Summer')
        break
    case 'august' :
        console.log('The season is Summer')
        break
    case 'september' :
        console.log('The season is Autumn')
        break
    case 'october' :
        console.log('The season is Autumn')
        break
    case 'november' :
        console.log('The seasen is Autumn')
        break
    default :
        console.log('It is not a month')
}
*/

//ex 3
let dayUserInput = prompt('What day is today?');
let day = dayUserInput.toLowerCase();

if (day == 'monday' || day == 'tuesday' || day == 'wednesday' || day =='thursday' || day == 'friday') {
    console.log(`${day} is a work day`);
} else if (day == 'saturday'|| day == 'sunday') {
    console.log(`${day} is a weekend day`);
} else {
    console.log('This is not a week day')
}

