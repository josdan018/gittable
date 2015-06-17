var http = require ('http');

http.get(process.argv[2], function callback(response){
  response.setEncoding('UTF-8');
  response.on('data',function(data){
    console.log(data);
  });
  response.on('error', function(error){
    console.log(error)
  });
});

