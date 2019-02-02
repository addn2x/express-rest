// Every file is a module

// console.log(module);

const moduleA = require('./module-a');

console.log(moduleA);

console.log(moduleA.a);
console.log(moduleA.b);

console.log(moduleA.getA);
console.log(moduleA.getB);

console.log(moduleA.getA());
console.log(moduleA.getB());


const get_a = require('./module-b');
const get_b = require('./module-b');

console.log(get_a());
console.log(get_b());
