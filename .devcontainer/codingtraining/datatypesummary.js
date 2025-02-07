// primitive data types
// 
// 7 types::String,Number,Boolean,Null,Undefined,Symbol,Bigint
let score = 100
let scoreValue=100.3
const isLoggedInn = true
let temprature = null
let gmailAccount;
const id = Symbol('1234')
const anotherId = Symbol('1234')
// console.log(id==anotherId);

const bigNumber=562454737337324886666666666666666n



// reference type/nonprimitive type:
// Array,Objects,Functions

// java script  is dynamically typed langage.
//  in JavaScript, the type of a variable is determined at runtime,
//  and type checking occurs during the execution of the program.

const heros= ["shakthiman","superman,","spiderman"];

let person = {
    name: "John",
    age: 30,
    city: "New York"
  };

const myFunction = function(){
    console.log("hello man");   
}

// console.log(typeof bigNumber );
myFunction();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// type of memmory allocations
// 2 types::stack(used in pimitive data types)
//  #we get a copy of the data

// ::::::::::::::::::::::::::::::::::::::::::::::
// ,Heap(used in non primitive data types) 
// # we get a refference of the data 
// #(original value changes)
  



