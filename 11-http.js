const http = require('http')

const server = http.createServer((req, res)=> {
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
    <h1>We can't find the page</h1>
    `)
})

server.listen(5001)