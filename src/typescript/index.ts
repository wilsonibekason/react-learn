let tuple1: [string, boolean];
tuple1 = ["test", true];

// tuple destructuring
// using single array syntax
console.log(`tuple1[0]: ${tuple1[0]}`);
console.log(`tuple1[1]: ${tuple1[1]}`);
// assigning method or named varible syntax to destructure tuple
let [tupleString, tupleBoolean] = tuple1;
console.log(`tuple1: ${tupleBoolean}`);
console.log(`tuple1: ${tupleString}`);
