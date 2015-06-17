module.exports = function( dir, ext, callback ){
  var fs = require('fs');
  var path = require('path');
  var filtered = [];
  function checkExt(word){
    return path.extname(word) === "."+ext;
  }
  var buffer = fs.readdir(dir,function readAndFilter(err,data){
    if(err)
      return callback(err);
    return callback(null, data.filter(checkExt));
  });
};
