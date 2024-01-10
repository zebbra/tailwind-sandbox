var static = require("node-static");
var http = require("http");

var file = new static.Server(__dirname);

http
  .createServer(function (req, res) {
    file.serve(req, res);
  })
  .listen(8008);

console.log("listening on port 8008");
