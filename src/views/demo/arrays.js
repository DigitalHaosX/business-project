const fruits = ['Apple', 'Banana', 'Strawberry']
const moreFruits = ['Mango', 'Cherry']
const combinedFruits = fruits.concat(moreFruits)
console.log(combinedFruits)
// ["Apple", "Banana", "Strawberry", "Mango", "Cherry"]

// The 'fruits' array remains unchanged.
console.log(fruits)
// ["Apple", "Banana", "Strawberry"]

// The 'moreFruits' array also remains unchanged.
console.log(moreFruits)
// ["Mango", "Cherry"]

const array1 = [1, 4, 9, 16]

// Pass a function to map
const map1 = array1.map((x) => x * 2)

const map2 = array1.map((x) => x * 4)

console.log(map1)
console.log(map2)
// Expected output: Array [2, 8, 18, 32]

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present']

const result = words.filter((word) => word.length > 6)

console.log(result)
// Expected output: Array ["exuberant", "destruction", "present"]

const array1 = [1, 2, 3, 4, 5]

// 0 + 1 + 2 + 3 + 4
const initialValue = 0
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
)

console.log(sumWithInitial)
// Expected output: 10
