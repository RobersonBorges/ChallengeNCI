/**
 * 4. Calculate the sum of numbers within an array
You can create your own array of numbers but consider trying this problem with a few different sets to verify your solution. Have one array with negative and positive numbers and another with integers and decimals.

You could also try using arrays of different lengths. If you're feeling comfortable with this, try the slightly more challenging bonus challenge below.

Bonus intermediate challenge: Create a function that can return the sum of a particular column or row number in a table.


const numeros = [1, -2, 3, 5, -6, 8, 7]

const soma = numeros.reduce((acumulador, numero) => {
    return acumulador + numero
}, 0)

console.log(soma)
 */

const input = require('prompt-sync')({ sigint: true })
const linhaEscolhida = input("escolha o índice da linha: ")
const colunaEscolhida = input("escolha o índice da coluna coluna: ")

const calcularSomaMatriz = (matriz, isLinha, indice) => {
    if (isLinha) {
        if (indice >= 0 && indice < matriz.length) {
            const soma = matriz[indice].reduce((acumulador, valor) => acumulador + valor, 0);
            return soma;
        } else {
            return "Índice de linha fora do intervalo.";
        }
    } else {
        if (indice >= 0 && indice < matriz[0].length) {
            const soma = matriz.reduce((acumulador, linha) => acumulador + linha[indice], 0);
            return soma;
        } else {
            return "Índice de coluna fora do intervalo.";
        }
    }
}
const matriz = [
    [1, 2, 3, -2],
    [4, 5, 6, 1],
    [7, 8, 9, -2],
    [14, -5, 10, -1]
];

const somaLinha1 = calcularSomaMatriz(matriz, true, linhaEscolhida);
const somaColuna2 = calcularSomaMatriz(matriz, false, colunaEscolhida);

console.log(`Soma da linha ${linhaEscolhida}: ${somaLinha1}`);
console.log(`Soma da coluna ${colunaEscolhida}: ${somaColuna2}`);