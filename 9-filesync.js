const {readFileSync, writeFileSync} = require('fs')
const { start } = require('repl')
console.log(start)
//This is how you read a file

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first, second)

//This is how you write a file

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`,
    { flag: 'a'}
)

console.log('done with this task')
console.log('starting the next one')