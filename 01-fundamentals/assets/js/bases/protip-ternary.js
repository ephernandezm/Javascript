const biggerNumber = (number1, number2) => (number1 > number2) ? number1 : number2

console.log(biggerNumber(20, 15))

const haveMembership = (member) => (member) ? '2 dollars' : '10 dollars'

console.log(haveMembership(false))

const friend = false
const friends = [
    'Peter',
    'Tony',
    'Dr. Strange',
    friend ? 'Thor' : 'Loki',
    (() => 'Nick Fury')(),
    biggerNumber(10, 15)
]

console.log(friends)

const ratings = 82.5
const degree = ratings >= 95 ? 'A+' :
    ratings >= 90 ? 'A' :
    ratings >= 85 ? 'B+' :
    ratings >= 80 ? 'B' :
    ratings >= 75 ? 'C+' :
    ratings >= 70 ? 'C' : 'F'

 console.log({ ratings, degree })