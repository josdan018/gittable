
var http = require ('http');

var urls = process.argv.slice(2);
var count = urls.length;
var recount = count;
var total = [];

function superCallBack(j){

  var index = j;
  total.push("");

  function gerenalCallback(response){
    
    function dataCallback(data){
      total[index] += data;
    };
  
    function errorCallback(error){
      console.log(error + " - " + index);
    };
  
    function endCallback(){
      recount--
      if(recount===0){
        for( var k = 0; k < count ; k++){
          console.log(total[k]);
        }
      }
    };
    
    response.on("data", dataCallback);
    response.on("error", errorCallback);
    response.on("end", endCallback);
  
  }

  http.get(urls[index],gerenalCallback);
}

for (var i = 0; i < count ; i++){
  superCallBack(i);
}
