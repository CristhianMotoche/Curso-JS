// Variables
var number = 4.4;
var string = "Hello world!";
var bool = true;
var array = [ 1, 2, true];
var date = new Date();
var object = {field1:"John", field2:"Doe", fieldi:{ fieldi1: 2, fieldi2: []}, fieldN:"blue"};
var myfunction = function(argument) {
  return argument;
};
var undefinedvalue;
var nullvalue = null;

console.log(number);
console.log(string);
console.log(bool);
console.log(date);
console.log(array);
console.log(object);
console.log(object.field1);
console.log(object.fieldi.fieldi1);
console.log(myfunction);
console.log(undefinedvalue);
console.log(nullvalue);

console.log(typeof undefined);           // undefined
console.log(typeof null);                // object
console.log(null === undefined);         // false
console.log(null == undefined);        // true
