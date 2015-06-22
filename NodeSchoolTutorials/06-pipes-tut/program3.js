var tr = require('through2');


function write(buffer, encoding, next){
  this.push(buffer.toString().toUpperCase());
  next();
};

function end(done){
  done();
};

var stream = tr(write,end);

process.stdin.pipe(stream).pipe(process.stdout);
