const showDateTime = () => {
    const now = new Date()
    const date = now.getDate()
    const month = now.getMonth() + 1 
    const year = now.getFullYear()
    const hours = now.getHours() 
    const minutes = now.getMinutes()
    return `${date}/${month}/${year} ${hours}:${minutes}`
}
showDateTime()


function sumAllNumbers() {
    let sum = 0
    for (let i=0; i < arguments.length; i++) {
        sum+= arguments[i]
    }
    return sum
}

console.log(sumAllNumbers(2,5,8))

