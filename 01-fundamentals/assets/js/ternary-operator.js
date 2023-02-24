const day = 1 // 0: Sunday... 1: Monday...
const currentTime = 10

let openingTime
let message

// if (day === 0 || day === 6) {
// if ([0, 6].includes(day)) {
//     console.log('Weekend')
//     openingTime = 9
// } else {
//     console.log('Day of the week')
//     openingTime = 11
// }

openingTime = ([0, 6].includes(day)) ? 9 : 11

// if (currentTime >= openingTime) {
//     message = "It's open"
// } else {
//     message = `Is closed today we open at ${openingTime}`
// }

message = (currentTime >= openingTime) ? "It's open" : `Is closed today we open at ${openingTime}`

console.log({ openingTime, message })
