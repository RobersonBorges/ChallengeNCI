/**
 * 7. Create a function that filters out negative numbers
In this challenge, you'll have a function that takes an array as an input and returns an array. But if all goes according to plan, it'll remove the negative numbers. This is another example of a task that'll be useful when combing through data and looking for clever ways to eliminate "bad data."

const numerosPositivos = numeros.filter((numero) => numero >= 0)

console.log(numerosPositivos)
*/

const numeros = [1, -2, 3, -8, -6, 8, 7]

const positivos = (array) => {
    const num = array.filter((numero) => numero >= 0)
    return num
}
console.log(positivos(numeros))