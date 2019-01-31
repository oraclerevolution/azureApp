const http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world')
});

var port = process.env.PORT || 1337;
server.listen(port, ()=>{console.log('le serveur tourne sur la page ' + 1337)});
