const express = require('express')

const app = express()

// app.com
app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})

// app.com/help
app.get('/help', (req, res) => {
    res.send([{
        name: 'olls',
        // age: 27
    }, {
        name: 'olls'
    }])
})

// app.com/about
app.get('/about', (req, res) => {
    res.send('<h1>About me!<h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})