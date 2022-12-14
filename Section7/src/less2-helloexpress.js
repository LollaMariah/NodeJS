const express = require('express')

const app = express()

// app.com
app.get('', (req, res) => {
    res.send('Hello Olls!')
})

// app.com/help
app.get('/help', (req, res) => {
    res.send('Help page!')
})

// app.com/about
app.get('/about', (req, res) => {
    res.send('About me!')
})

app.get('/hobby', (req, res) => {
    res.send('What is your hobby?')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})