var http = require('http');
var url = require('url');

function callback(request,response){
  var queryRequested = url.parse(request.url).query;
  var urlRequested = url.parse(request.url).pathname;
  var date = new Date(queryRequested.replace('iso=',''));
  var jsonable;
  if(urlRequested === '/api/parsetime'){
    jsonable = { "hour": date.getHours() , "minute" : date.getMinutes() , "second" : date.getSeconds()};
  } else if(urlRequested === '/api/unixtime'){
    jsonable = { "unixtime" : Date.parse(queryRequested.replace('iso=','')) };
  }
//  console.log(jsonable);

  response.write(JSON.stringify(jsonable));
  response.end();
  
};

var server = http.createServer(callback);
server.listen(process.argv[2]);

