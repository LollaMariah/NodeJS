const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
//    }
//    // Covert JavaScript object into JSON string
//    const bookJSON = JSON.stringify(book)
//    console.log(bookJSON)
   
//    // Covert JSON string into object
//    const bookObject = JSON.parse(bookJSON)
//    console.log(bookObject.title) // Print: Ego is the Enemy

//    fs.writeFileSync('Sec4Less5.json', bookJSON)

const dataBuffer = fs.readFileSync('Sec4Less5.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name='olls'
user.planet='planet'
user.age = 54

const userJSON = JSON.stringify (user)
fs.writeFileSync('Sec4Less5.json',userJSON)