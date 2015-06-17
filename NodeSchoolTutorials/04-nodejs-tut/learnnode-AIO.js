var fs = require('fs');
var file = process.argv[2];
var buffer = fs.readFile(file,'UTF-8',function(err,data){
  console.log(data.toString().split('\n').length - 1);
});

