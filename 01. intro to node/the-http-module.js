const http = require("http");
const port = 3000;

const server = http.createServer((request, responce) => {
  console.log("Request resieved.");

  if (request.url == "/") {
    const url = new URL(request.url, `http://${request.headers.host}`);
    console.log(url);
    // add Headers
    responce.writeHead(200,[
      "Content-Type", "text/plain",
      "second-Header", "text/plain"
    ])

    responce.write("Hello!");
    responce.end();
  } else {
    responce.statusCode = 404;
    responce.end();
  }
});
server.listen(port);
