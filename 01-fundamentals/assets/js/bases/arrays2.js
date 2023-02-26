let games = ['Zelda', 'Mario', 'Metroid', 'Chrono']

console.log('Length:', games.length)

let first = games[0]
let last = games[games.length - 1]

console.log({ first, last })

games.forEach((element, index, arr) => {
    console.log({ element, index, arr })
})

let newLength = games.push('F-Zero')
console.log({ newLength, games })

newLength = games.unshift('Fire Emblem')
console.log({ newLength, games })

let gameErased = games.pop()
console.log({ gameErased, games })

let position = 1

console.log(games)

let deletedGames = games.splice(position, 2)
console.log({ deletedGames, games })

let metroidIndex = games.indexOf('Metroid')
console.log({ metroidIndex })

// TODO: Reference
