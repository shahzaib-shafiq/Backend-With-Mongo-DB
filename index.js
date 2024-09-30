const express = require('express')
const ejs = require('ejs');
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)