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
//function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any) {
  return;
  a + b;
}
add("first", "second");

// literals will limit the allowed values to a set of values specified
// used when we need a standard values like string, boolean , number
type AllowedStringValues = "one" | "two" | "three";
type AllowedNumericValues = 1 | 20 | 65535;

function withLiterals(input: AllowedNumericValues | AllowedStringValues) {
  console.log(`called with ${input}`);
}
// the syntax used by the literal is almost like that of the allias where we use the type keyword followed by a case of values
//literal specify set of allowed types
// allias specify set of different types
// enums specify set of allowed types
withLiterals("one");
withLiterals(65535);

// typescript object oriented language
// classed inheritance interface and modules

// interface
// describes what properties and function an object is expected ro have in other to  be used byy our code

interface IIdName {
  id: number;
  name?: string;
}

let idObject: IIdName = {
  id: 2,
  name: "wilson ibekason",
};

// optional properties

interface IOptionalIdName {
  id?: number;
  name?: string;
}

// interface naming

let optionalIdObject: IOptionalIdName = {
  id: 3,
  name: "",
};

// interface naming
/// WEAK TYPES

interface IweakType {
  id?: number;
  name?: string;
}

let weakTypeOveride: IweakType = {
  name: "a e",
};

// the in operator
interface IIdNames {
  id: number;
  name: string;
}

interface IDescValue {
  desc: string;
  value: number;
}

function printNumOrValue(obj: IIdNames | IDescValue): void {
  if ("id" + obj) {
    console.log(`obj.name : ${obj.name}`);
  }
  if (`dec in ${obj}`) {
    console.log(`obj.value : ${obj.value}`);
  }
}

printNumOrValue({
  id: 1,
  name: "wilson",
});
printNumOrValue({
  desc: "hello world",
  value: 23,
});

// keyof
interface IPerson {
  id: number;
  name: string;
}
type personPropertyName = keyof IPerson;

function getProperty(key: personPropertyName, value: IPerson) {
  console.log(key + " " + value[key]);
}

getProperty("id", { id: 1, name: "wkiwsk" });

// CLASSES
// definition of an object what data it holds and what properties it can contain
class SimpleClass {
  id?: number | undefined;
  name: string;
  print(): void {
    console.log("functionis called");
  }
}

// the this keyword
// a simple class specifies the properties of its  class and the functions it can perform

class SimpleClass2 {
  id?: number | undefined;
  name: string;
  print(): void {
    console.log(`function is of perperty ${this.name}`);
  }
}

// implementing interfaces
// interface describes a custom type with properties and functions
// a class describes an object with properties and functions

interface IPrint {
  print(): void;
}

function printClass(a: IPrint) {
  a.print();
}
class ClassA implements IPrint {
  print(): void {
    console.log("classA print called");
  }
}
class ClassB implements IPrint {
  print(): void {
    console.log("classb is called");
  }
}

let classA = new ClassA();
let classB = new ClassB();

printClass(classA);
printClass(classB);

// class constructors
// this can accept arguement during initial construction
class ClassWithConstructor {
  id: number | undefined;
  constructor(id: number) {
    this.id = id;
    // {id}
  }
}
let classWithConstructor = new ClassWithConstructor(10);
console.log(`classWithConstructor = ${JSON.stringify(classWithConstructor)}`);

// class modifiers
