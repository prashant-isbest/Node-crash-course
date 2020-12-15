//Global object

setTimeout(() => {
  console.log('in the timeout');
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log('in the interval');
}, 1000);

console.log(__dirname);
console.log(__filename);

// document is in window and we don't have it in global namespace of node
console.log(document.querySelector);
