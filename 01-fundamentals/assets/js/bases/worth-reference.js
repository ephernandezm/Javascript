let a = 10
let b = a

a = 30

console.log({ a, b })

let john = { name: 'John' }
let anna = {...john }

anna.name = 'Anna'

console.log({ john, anna })

const changeName = ({ ...person }) => {
    person.name = 'Tony'
    return person
}

let peter = { name: 'Peter' }
let tony = changeName(peter)

console.log({ peter, tony })

// Arrays
const fruits = ['Apple', 'Pear', 'Pineapple']

console.time('slice')
const fruitsTwo = fruits.slice()
console.timeEnd('slice')

console.time('spread')
const otherFruits = [...fruits ]
console.timeEnd('spread')

otherFruits.push('Mango')
fruitsTwo.push('Orange')
console.table({ fruits, otherFruits, fruitsTwo })



