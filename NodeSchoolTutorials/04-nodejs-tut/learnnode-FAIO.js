var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];
function checkExt(word){
  return path.extname(word) === "."+ext;
}
var buffer = fs.readdir(dir,function callback(err,data){
  var filtered = data.filter(checkExt);
  for(var i = 0; i < filtered.length ; i++){
    console.log(filtered[i]);
  }
});

