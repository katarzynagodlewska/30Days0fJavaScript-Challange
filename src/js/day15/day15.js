class Animal {
    constructor (name, age, color, legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }

    getColorAndName() {
        const colorAndName = this.color + ' ' + this.name
        return colorAndName
    }

    get getAge() {
        return this.age
    }

    set setLegs(legs) {
        this.legs.push(4)
    }

}

const animal1 = new Animal('dog', 3, 'black and white', 4)

console.log(animal1.getColorAndName())

