function greet(name) {
    console.log(arguments)
    console.log(`Hello ${name}`)
}

const greetTwo = function (name) {
    console.log(`Hello ${name}`)
}

const greetArrow = (name) => {
    console.log(`Hello ${name}`)
}

greet('Emilio', 34, true, 'Venezuela')
greetTwo('Emiliano')
greetArrow('Maria')