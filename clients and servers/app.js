const express = require('express');
const path = require('path');

//to move one directory up
// console.log(path.join(__dirname + '/..'));

//express app
const app = express();

//listen for servers
app.listen(3000);

app.get('/', (req, res) => {
  // res.write('')
  // res.end()
  //automaticallys set the content-type header
  //also infers status code automatically
  //res.send('<p>home page</p>');

  res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', { root: __dirname });
});

//redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

//404 page
//use this function for every incoming request
//this must be at the end
//and we have to manually set the error code

app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});
