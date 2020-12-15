const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request made');
  console.log(req.url, req.method);
  // *! set header content type
  res.setHeader('Content-Type', 'text/plain'); //text/html
  res.write('hello, ninjas');
  res.end();
});

//req.url   output text after localhost:3000

server.listen(3000, 'localhost', () => {
  console.log('listening for request on port 3000');
});
