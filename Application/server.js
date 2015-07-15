var http = require('http');
var fs = require('fs');
var url = require('url');

var handleRequest = function (request, response) {
  if (request.url === "/") {
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream("views/data_plot.html").pipe(response);
    // response.end();

  } else if (request.url === "data_plot.html") {
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream("views/data_plot.html").pipe(response);
    // response.end();

  } else if (request.url === "/index.html") {
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream("views/index.html").pipe(response);
    // response.end();

  // } else if (request.url === '/favicon.ico') {
  //   response.writeHead(200, {"Content-type": "text/plain"});
  //   response.end('');
  //   return;

  } else {
    var reqUrl = url.parse(request.url);
    response.writeHead(200, {"Content-Type": "text/html"});
    // response.write("Could Not Find:");
    response.write("typo" + reqUrl);  //, url.parse(request.url)
    console.log(reqUrl);
    // response.writeHead(200, {"Content_Type": "text/html"});
    // fs.createReadStream("")
    response.end();
  }
};

var server = http.createServer(handleRequest);
server.listen(3000);
console.log('The sizzlevizzle is running on port 4000');
