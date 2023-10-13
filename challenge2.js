/**
 * 2. Print a table containing multiplication tables
Let's start with the tables that many of us had to memorize in school. Can you print a table that contains all the answers to the multiplication tables from 1 through 10?

Like Challenge #1, can you create an efficient solution that you could easily expand should you need the 12 times table?

 */
const input = require('prompt-sync')({ sigint: true })

const table = input("quer a tabuada de qual número? ")
for (let count = 0; count <= 10; count++) {
    console.log(`${count} * ${table} = ${count * table}`);
}

