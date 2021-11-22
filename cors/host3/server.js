const http = require('http')
const fs = require('fs')
const port = 80

const server = http.createServer((req, res) => {
    fs.readFile("index.html", (err, data) => {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.write(data);
        res.end();
    })
})

server.listen(port, () => {
    console.log(`Server is running on http://127.0.0.1:${port}/`)
})