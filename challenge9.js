/**
 * 9. Return a Boolean if a number is divisible by 10
Here, you'll create a function that'll give you a "true" or "false" Boolean as its output. The inputted number should only return a "true" if it's divisible by 10. Otherwise, your program should return a "false" answer.

 */


const input = require('prompt-sync')({ sigint: true })
const numero = input("digite um número, e eu te digo se é divisivel por 10:  ")
const funcao = (numero) => numero % 10 === 0

console.log(funcao(numero))