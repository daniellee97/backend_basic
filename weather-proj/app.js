const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res)=>{
    const query = req.body.city;
    console.log(query);
    const apiKey = "f58259b816074b548f5236e4a358a106";
    const unit = "metric";

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;


    // get request to the external server (weather API)
    https.get(url, (response)=>{

        console.log(response.statusCode);

        //holding the data from API call
        response.on("data", (data)=>{

            // parse hexadecimal type into JSON
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const condition = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            console.log("Current temparature is " + temp + " degree celcius.");
            console.log("Currently " + condition);
            // convert data in JSON type into a string format
            // const object = {"name":"Daniel", "hobby":"golf"};
            // JSON.stringify(object);

            // by using res.write(), you can write multiple responses. 
            // if you only use res.send(), only one response can be sent.
            res.write(`<h1>Current temparature of ${query} is ${temp} degrees celcius.<h1>`);
            res.write("<p>Currently " + condition + "<p>");
            res.write(`<image src=\"https://openweathermap.org/img/wn/${icon}@2x.png\">`);
            res.send();
        })
    });

});



app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})