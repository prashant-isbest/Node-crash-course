//requiring or importing the people file
const xyz = require('./people');

//when we require a file node looks for that file and runs it

//an empty object is returned
console.log(xyz);

//just because we import a file doesn't automatically give us access
console.log(people);
// people is not defined

//to access it we have to manually export it
