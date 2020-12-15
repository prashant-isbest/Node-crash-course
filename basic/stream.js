const fs = require('fs');

// const readStream = fs.createReadStream('./docs/blog3.txt', {
//   encoding: 'utf8',
// });
// readStream.on('data', (chunk) => {
//   console.log('=====New Chunk =====');
//   console.log(chunk);
// });

// const readStream2 = fs.createReadStream('./docs/blog3.txt');
// var x = 0;
// readStream2.on('data', (chunk) => {
//   console.log('============NEW CHUNK===========');
//   console.log(chunk.toString())
//   x++;
//   console.log(x);
// });

const writeStream = fs.createWriteStream('./docs/blog4.txt');
const readStream3 = fs.createReadStream('./docs/blog3.txt', {
  encoding: 'utf8',
});
var x = 0;
readStream3.on('data', (chunk) => {
  console.log('============NEW CHUNK===========');
  x++;
  writeStream.write(chunk);
  console.log(x);
});

//piping
readStream3.pipe(writeStream());
