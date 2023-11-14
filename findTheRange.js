// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:
let lowestInt = array[0]
let largestInt = array[0]

for (let i = 0; i < array.length; i++) {
    if (array[i] < lowestInt) {
        lowestInt = array[i]
    } else if (array[i] > largestInt) {
        largestInt = array[i]
    }
}

console.log("Lowest Integer:", lowestInt)
console.log("Largest Integer:", largestInt)
console.log(lowestInt, largestInt)