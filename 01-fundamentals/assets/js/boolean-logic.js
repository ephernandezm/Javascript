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
