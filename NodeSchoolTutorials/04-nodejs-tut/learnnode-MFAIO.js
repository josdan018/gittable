var wcl = require('./wc-l.js');

var dir = process.argv[2];
var ext = process.argv[3];

function callback (err, data){
  if(err){
    console.log(err);
    return;
  }

  for(var i = 0; i < data.length ; i++){
    console.log(data[i]);
  }
}

wcl(dir, ext , callback);

