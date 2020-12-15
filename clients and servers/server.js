const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request made');
});

// 127.0.0.1
//when we're connecting to the local host domain
// in a browswer we are actually connecting back to our own
// computer which is then acting as a host to our website

//localhost are doors to computer which keeps the data seperate
server.listen(3000, 'localhost', () => {
  console.log('listening for request on port 3000');
});
