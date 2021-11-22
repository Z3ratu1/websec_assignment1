const express = require('express');
const app = express();


app.get('/api/date', function (req, res) {
    let data = {date: 57118124}
    res.send(data)
})

app.get('/api/datecors', function (req, res) {
    let data = {date: 57118124}
    res.setHeader("Access-Control-Allow-Origin", "http://web.cybersecurity.seu.edu")
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS")
    res.send(data)
})

app.get('/api/datejsonp', function (req, res) {
    let data = {date: 57118124}
    let jsonp = "jsonp(" + JSON.stringify(data) + ")"
    res.header("Content-type", "application/javascript");
    res.send(jsonp)
})

app.listen(80, ()=>{
    console.log("app listening at 80")
})
