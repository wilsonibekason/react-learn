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
// tuples and spread syntax
let tupleRest: [number, ...string[]];
tupleRest = [1];
tupleRest = [1, "string"];
console.log(tupleRest);
// object destructuring
let complexObject = {
  anum: 1,
  beStru: "name",
  cBool: true,
};

let { anum, beStru, cBool } = complexObject;
console.log(`anum: ${anum}`);

let { anum: objId, beStru: objName, cBool: isValid } = complexObject;
console.log(`objId : ${objId}`);

//functions
// optional parameters

let func = function (a: number, b: string) {
  return a + b;
};
function concatValues(a: string, b?: string) {
  //   b === "undefined" && "please add a valid input";
  if (b === "undefined") "please add a valid input";
  return a + b;
}
console.log(`concat values : ${concatValues("first", "second")}`);
console.log(`concat values : ${concatValues("first")}`);

// rest parameters
function testArguements() {
  for (var i = 0; i < arguments.length; i++) {
    console.log("arguments " + arguments[i]);
  }
}
testArguements(1, 2);
testArguements("string", "second", "third");

// define function spread args
function textArguements(...args: string[] | number[]) {
  for (let i in args) {
    console.log(`${i} ${args[i]}`);
  }
}
textArguements(10, 20);

/// function callback
var myCallback = function (text) {
  console.log("my callback with" + text);
};
function withCallbackArg(message, callbackfn) {
  console.log(`withCallbackArg message: ${message}`);
  callbackfn(message + " from withCallbackArg");
}

withCallbackArg("initial text", myCallback);
/// function signatures as parameters
function myCallbacks(text: string): void {
  console.log("my callback with" + text);
}

function withCallbackArgs(
  message: string,
  args: string[],
  callbackfn: (message: string) => void
) {
  console.log(`withCallbackArgs message: ${message}`);
  callbackfn(message + " from withCallbackArgs");
}

//function overrides
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any) {
  return a + b;
}
add("first", "second");

// literals will limit the allowed values to a set of values specified
type AllowedStringValues = "one" | "two" | "three";
type AllowedNumericValues = 1 | 20 | 65535;

function withLiterals(input: AllowedNumericValues | AllowedStringValues) {
  console.log(`called with ${input}`);
}
// the syntax used by the literal is almost like that of the allias where we use the type keyword followed by a case of values
//literal specify set of allowed types
// allias specify set of different types
// enums specify set of allowed types
