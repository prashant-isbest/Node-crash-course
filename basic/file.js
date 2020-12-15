// fs core module built in node

const fs = require('fs');

//read file

// this is asynchronous it takes some time
fs.readFile('./docs/blog1.txt', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

console.log('last line');

//writing files

//overwrite if file exist
fs.writeFile('./docs/blog1.tx', 'Hello again', () => {
  console.log('file was written');
});

//newfile with data if not exist
fs.writeFile('./docs/blog2.txt', 'Hello again', () => {
  console.log('file was written');
});

//creating directory

if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  });
} else {
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('folder deleted');
    }
  });
}

//deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./d');
}
