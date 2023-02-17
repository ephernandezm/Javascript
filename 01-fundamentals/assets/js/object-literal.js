const character = {
    name: 'Tony Stark',
    codeName: 'Ironman',
    alive: false,
    age: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    suits: ['Mark I', 'Mark V', 'Hulkbuster'],
    address: {
        zip: '1080, 90265',
        location: 'Malibu, California'
    },
    'last-movie': 'Infinite War'
}

console.log(character)
console.log('Name', character.name)
console.log('Name', character['name'])
console.log('Age', character.age)

console.log('Coors', character.coords)
console.log('Lat', character.coords.lat)

console.log('Number of suits', character.suits.length)
console.log('Last suit', character.suits[character.suits.length - 1])

const aliveKey = 'alive'
console.log('Vivo', character[aliveKey])

console.log('Last movie', character['last-movie'])

// Más detalles

delete character.age

console.log(character)

character.married = true

const entriesPairs = Object.entries(character)
console.log(entriesPairs)

Object.freeze(character)

character.money = 1000000000000000000000
character.married = false
character.address.location = 'Venezuela'

const properties = Object.getOwnPropertyNames(character)
const values = Object.values(character)

console.log({ properties, values })



