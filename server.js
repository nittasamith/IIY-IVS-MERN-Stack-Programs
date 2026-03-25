const http = require('http');

//create Web server 
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h2>Node.js Web Server</h2>');
    res.write('<p>javascript code executed on the server</p>');
    res.end();
}).listen(4000);

//server listens on port 3000
