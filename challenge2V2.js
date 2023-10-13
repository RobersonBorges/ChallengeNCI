/**
 * 2. Print a table containing multiplication tables
Let's start with the tables that many of us had to memorize in school. Can you print a table that contains all the answers to the multiplication tables from 1 through 10?

Like Challenge #1, can you create an efficient solution that you could easily expand should you need the 12 times table?

*/


for (let count = 1; count <= + 10; count++) {
    for (let count2 = 1; count2 <= 10; count2++) {
        console.log(`${count} x ${count2} = ${count * count2}`)
    }
    console.log("\n")
}