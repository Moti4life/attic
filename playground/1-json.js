/* const book = {
    title: 'top gear',
    author: 'hammond'
}

const bookToJSON = JSON.stringify(book)

console.log(bookToJSON)

const parsedData = JSON.parse(bookToJSON)

console.log(parsedData.title)
console.log(parsedData.author) */

//=====================


/* const fs = require('fs')
const book = {
    title: 'top gear',
    author: 'hammond'
}

const bookToJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookToJSON) */


//======================

/* const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(data.title) */

//=================================


const fs = require('fs')

var dataBuffer = fs.readFileSync('1-json.json')
var dataJSON = dataBuffer.toString() //convert
var user = JSON.parse(dataJSON)


console.log(user)

user.name = 'motiihi'
user.age = 19

const newInfoToJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', newInfoToJSON)


dataBuffer = fs.readFileSync('1-json.json')
dataJSON = dataBuffer.toString()
data = JSON.parse(dataJSON)


console.log(data)

//===================================