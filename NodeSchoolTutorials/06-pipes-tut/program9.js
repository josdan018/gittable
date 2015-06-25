var trumpet = require('trumpet');
var through = require('through2');
var tr = trumpet();

function write(buffer, encoding, next){
  this.push(buffer.toString().toUpperCase());
  next();
};

function end(done){
  done();
};

process.stdin.pipe(tr);

tr.selectAll('.loud',function(louded){
  var loudStream = louded.createStream();
  loudStream.pipe(through(write,end)).pipe(loudStream);
});

tr.pipe(process.stdout);
