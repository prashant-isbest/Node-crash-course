const xyz = require('./people2');

console.log(xyz);
// {
//     people: [ 'yoshi', 'ryu', 'chun-li', 'mario' ],
//     ages: [ 20, 25, 30, 35 ]
// }

console.log(xyz.people, xyz.ages);

const { people } = require('./people2');

console.log(people, ages);
//ReferenceError: ages is not defined
