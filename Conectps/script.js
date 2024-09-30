const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

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