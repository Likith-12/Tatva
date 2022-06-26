const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-type', 'text/html');
    
    let path = './outlines/';
    switch(req.url){
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += 'error.html';
            break;
    }

    fs.readFile(path, (err, data) =>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.end(data);
        }
    })
    
});

server.listen(3000, 'localhost', () =>{
    console.log('Listening for requests on port 3000');
});