
const express = require('express');
const app = express();

// when server received the GET request, then perform this function.
// this function is provided by the express module.
// "get()" function takes the location that represent where the server received 
// the GET request, and the callback function that takes request and response parameter.
// when this function successfully gets called, then trigger the callback function
app.get('/', (req, res)=>{
    // send this header component to the browser, when the server receives GET request for main route ("/")
    res.send('<h1>Hello from server<h1>');
});

// GET request for "contact" route ("/contact")
app.get('/contact', (req, res) => {
    res.send('<h1>Contact Information:<h1>');
});

// GET request for "about" route ("/about")
app.get('/about', (req, res)=>{
    res.send('<h1>Author: Daniel Lee<h1>');
});

// listen to the port 3000 for listening any http request
app.listen(3000, ()=>{
    console.log('listening to port 3000');
});

// GET request
