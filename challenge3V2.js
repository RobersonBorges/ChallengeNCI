/*

3. Create a length converter function
Creating a function is a skill that'll be useful in many settings, and as you progress, you'll be working on much more complicated functions than this one. But a function that converts units of measure can be pretty handy in multiple professions and industries.

Let's start with a conversion from kilometers to miles. The function should include the input in kilometers and return the answer in miles.
*/
const input = require('prompt-sync')({ sigint: true })
const entrada = input("Qual valor em KM quer converter para Milhas? ")
const converterKMtoMiles = (number) => {
    number = number / 1.60934
    return Number(number).toFixed(0)
}
console.log(`o valor convertido para milhas é: ${converterKMtoMiles(entrada)}`)