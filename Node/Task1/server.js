const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/home' || '/Home'){
        res.write('<h1>Home Page </h1>');
        res.end()
    }
    else if(req.url === '/About' || '/about'){
        res.write('<h1>About Page </h1>');
        res.end()
    }
    else if(req.url === '/contact' || '/Contact'){
        res.write('<h1>Contact Page </h1>');
        res.end()
    }
    
})

server.listen(9000);

console.log('listening');