var net = require("net");
function zeroPad( number ){
 return ("00"+number).slice(-2);
}

var server = net.createServer(function (socket){
  var d = new Date();
  socket.write(d.getFullYear()+"-"+
    zeroPad(d.getMonth()+1)+"-"+
    zeroPad(d.getDate())+" "+
    zeroPad(d.getHours())+":"+
    zeroPad(d.getMinutes())
  );
  socket.end("");
  
});

server.listen(process.argv[2]);


