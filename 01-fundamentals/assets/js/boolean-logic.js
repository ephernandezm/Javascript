const returnsTrue = () => {
    console.log('Returns true')
    return true
}

const returnsFalse = () => {
    console.log('Returns false')
    return false
}

console.warn('Not or negation')
console.log(true) // true
console.log(!true) // false
console.log(!false) // true

console.log(!returnsFalse()) // true

console.warn('And') // True if all values are true
console.log(true && true) // true
console.log(true && !false) // true

console.log('==================')
console.log(returnsFalse() && returnsTrue()) // false
console.log(returnsTrue() && returnsFalse()) // false

console.log('==== and ====')
returnsFalse() && returnsTrue()
console.log('Four conditions', true && true && true && false) // false

console.warn('OR')
console.log(true || false)
console.log(false || false)

console.log(returnsTrue() || returnsFalse())

console.log('Four conditions', true || true || true || false) // true

console.warn('Assignments')

const iAmUndefined = undefined
const iAmNull = null
const iAmFalse= false

const a1 = false && 'Hello World' && 150
const a2 = 'Hello' && 'World' && iAmFalse && true
const a3 = iAmFalse || "I'm not fake anymore"
const a4 = iAmFalse || iAmUndefined || iAmNull || "I'm not fake again" || true
const a5 = iAmFalse || iAmUndefined || returnsTrue() || "I'm not fake again"

console.log({a1, a2, a3, a4, a5,})

if (true || true || true || false) {
    console.log('Do something')
} else {
    console.log('Do something else')
}