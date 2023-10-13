/**
 * 6. Sort an array from lowest to highest
You could create a function for this solution as well, but be sure to try your program with varying lengths and types of arrays. Try one with all integers, another with negative numbers, and another with decimals.

 */
const numeros = [1, -2, 3, -8, -6, 8, 7]

const sortArray = (array) => array.sort((a, b) => a - b)

console.log(sortArray(numeros));