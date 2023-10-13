/**
 * 10. Return the number of vowels in a string
Create a function that'll return an integer of the number of vowels found in a string. This is a great way to practice determining the features of a dataset. If you use JavaScript later in your career, you'll be well-prepared to determine what datasets (or just strings) consist of. If you feel like an extra challenge, consider returning the number of characters.

 */


const nome = 'roberson'
const contarVogais = (str) => {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').reduce((contador, letra) => {
        if (vogais.includes(letra)) {
            contador++;
        }
        return contador;
    }, 0);
};

const getQntdCaracteres = (str) => str.length
console.log(`a quantidade de vogais é de: ${contarVogais(nome)}`)
console.log(`a quantidade de caracteres é de: ${getQntdCaracteres(nome)}`)

/* funcao que retorna qntd de consoantes
const contarVogais = (str) => {
  const vogais = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').reduce((contador, letra) => {
    if (!vogais.includes(letra)) {
      contador++;
    }
    return contador;
  }, 0);
};

*/