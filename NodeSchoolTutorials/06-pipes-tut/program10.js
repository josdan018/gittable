var spawn = require('child_process').spawn;
var duplexer = require('duplexer');
module.exports = function s (cmd, argv) {
  var child = spawn(cmd,argv);
  return duplexer(child.stdin,child.stdout);
};
