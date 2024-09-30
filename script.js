const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
  })
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/about', function (req, res) {
    res.send('Hello About')
  })

app.listen(3000)