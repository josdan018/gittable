var tr = require('through2');
var split = require('split');
var sw = false;

function write(buffer, encoding, next){
  if(sw){
    this.push(buffer.toString().toUpperCase()+'\n');
   
  }else{
    this.push(buffer.toString().toLowerCase()+'\n');
  }
  sw = !sw;
  next();
};

function end(done){
  done();
};

var stream = tr(write,end);

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
