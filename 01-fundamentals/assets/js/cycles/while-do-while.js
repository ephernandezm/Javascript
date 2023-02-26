const cars = ['Ford', 'Mazda', 'Honda', 'Toyota']

let i = 0
// while(i < cars.length) {
//     console.log(cars[i])
//     i++
// }

// Note: it will not be evaluated if the result is
// undefined
// null
// false

console.warn('While')
while(cars[i]) {
    if (i === 1) {
        i++
        continue
    }

    console.log(cars[i])
    i++
}

console.warn('Do While')
let j = 0

do {
    console.log(cars[j])
    j++
} while(cars[j])