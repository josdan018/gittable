var http = require('http');
var concat = require('concat-stream');



function callback(request, response){
  console.log("hola mundo");
  if(request.method === 'POST'){
    res.end("WHAAAAAAAAAAAAAAAAAAAAAAAAA");	

  } else {
    response.end();
  }
  
  
};

var server = http.createServer(callback);

server.listen(process.argv[2]);
