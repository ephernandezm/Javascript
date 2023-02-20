// function createPerson(name, lastName) {
//     return { name, lastName }
// }

const createPerson = (name, lastName) => ({ name, lastName })
const person = createPerson('Emilio', 'Hernández')
console.log(person)

function printsArguments() {
    console.log(arguments)
}

const printsArgumentsArrowFunction = (age, ...arguments) => {
    // console.log({ age, arguments })
    return arguments
}

const [ married, alive, name, greet ] = printsArgumentsArrowFunction(10, true, false, 'Emilio', 'Hello')
console.log({ married, alive, name, greet })

const { lastName: newLastName } = createPerson('Emilio', 'Hernández')
console.log({ newLastName })

const tony = {
    name: 'Tony Stark',
    codeName: 'Ironman',
    alive: false,
    age: 40,
    suits: ['Mark I', 'Mark V', 'Hulkbuster'],
}

const printProperties = ({ name, codeName, alive, age = 15, suits }) => {
    console.log({ name })
    console.log({ codeName })
    console.log({ alive })
    console.log({ age })
    console.log({ suits })
}

printProperties(tony)