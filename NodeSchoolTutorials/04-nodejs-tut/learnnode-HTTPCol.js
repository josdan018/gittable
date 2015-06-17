
var http = require ('http');

http.get(process.argv[2], function callback(response){
  var total = "";
  response.setEncoding('UTF-8');
  response.on('data',function(data){
    total += data;
  });
  response.on('error', function(error){
    console.log(error)
  });
  response.on('end', function(carajos){
    console.log(total.length);
    console.log(total);
  });
});

