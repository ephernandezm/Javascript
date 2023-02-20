function greet(name) {
    // console.log(arguments)
    // console.log(`Hello ${name}`)
    return [1, 2, 3, 4, 5]

    // This will never run
    console.log('I am a code that is after the return')
}

const greetTwo = function (name) {
    console.log(`Hello ${name}`)
}

const greetArrow = (name) => {
    console.log(`Hello ${name}`)
}

const returnToSayHello = greet('Emilio', 34, true, 'Venezuela')

// greetTwo('Emiliano')
// greetArrow('Maria')

function addTwoNumbers(numberOne, numberTwo) {
    return numberOne + numberTwo
}

const addTwoNumbersArrowFunction = (numberOne, numberTwo) => numberOne + numberTwo

function getRandomNumber() {
    return Math.random()
}

const getRandomNumberArrowFunction = () => Math.random()

console.log(getRandomNumberArrowFunction())
