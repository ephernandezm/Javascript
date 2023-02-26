const [
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',]

const day = 1 // 0: Sunday

switch (day) {
    case 0:
        console.log(sunday)
        break
    case 1:
       console.log(monday)
        break
    case 2:
        console.log(tuesday)
        break
    case 3:
        console.log(tuesday)
        break
    case 4:
        console.log(tuesday)
        break
    case 5:
        console.log(tuesday)
        break
    default:
        console.log(saturday)
}