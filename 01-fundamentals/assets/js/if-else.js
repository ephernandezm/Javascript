let a = 5

if (a >= 10) {
    console.log('A is greater than or equal to 10')
} else {
    console.log('A is less than 10')
}

// console.log('End of program')

const today = new Date()
let day = today.getDay() // 0: Sunday, 1: Monday, 3: Tuesday

console.log({ day })

if (day === 0) {
    console.log("It's Sunday")
} else if (day === 1) {
    // console.log('Is not Sunday')

    console.log('Monday')

    // if (day === 1) {
    //     console.log('Monday')
    // } else {
    //     console.log("It's not monday or sunday")
    // }
} else if (day === 2) {
    console.log('Tuesday')
} else {
    console.log("It's not Monday, Tuesday or Sunday")
}