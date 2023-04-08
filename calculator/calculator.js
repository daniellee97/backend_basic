const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// use the bodyParser module to retrieve the data from form
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    // "__dirname" will retrieve the current directory path depending on the evironment 
    // (can be a personal computer or cloud directory parth)
    res.sendFile(__dirname + "/index.html");
});

app.get('/bmicalculator', (req, res)=>{
    res.sendFile(__dirname+'/bmicalculator.html');
});

app.post('/', (req, res)=>{
    var result = Number(req.body.num1) + Number(req.body.num2);
    res.send('The result is '+ result);
});

app.post('/bmicalculator', (req, res)=>{
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / (height*height);
    res.send("Your BMI score is " + bmi);
});

app.listen(3000, ()=>{
    console.log('Listening on port 3000');
});
