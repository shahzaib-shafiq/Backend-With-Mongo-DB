const express = require('express');
const ejs = require('ejs');
const app = express();
const path=require('path')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')))


app.get('/', function (req, res) {
  res.render('index'); 
});


app.get('/profile/:username', function (req, res) {
  res.send(`welcome ${req.params.username}`); 
  
});


app.get('/profile/:username/:age', function (req, res) {
  //res.send(`welcome ${req.params.username} and Age ${req.params.age}`);
  res.send(req.params);
   
  
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
