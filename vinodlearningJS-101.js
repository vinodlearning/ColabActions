/**if (false) console.log("false");
else console.log("else false");

if ("") console.log("");
else console.log("else ");
if (null) console.log("null");

if (0) console.log("fa0se");

if (undefined) console.log("undefined");

if (NaN) console.log("NAN");

let segments = ["users", "documents", "doanlaods"];

console.log(segments);

var str = segments.join();

console.log(str);

let arr1 = [1, 2, 3, 4, [5, 6, 7], [8, 9, 10]];

console.log(arr1.length);

console.log(arr1[4][2]);

arr1.push([]);

console.log("--------------Start---------------->");
console.log(studentObj);

console.log("------------------------------->");

console.log(arr1.length);

arr1.push(12);

console.log(arr1.length);

console.log(arr1);

console.log(arr1[7]);*/

//Objects

/**const studentObj = {
  name: "Vinod",
  marks: [10, 20, 30],
  address: {
    city: "gundugolanu",
    pincode: 534427,
  },
};
console.log("--------------Start---------------->");
console.log(studentObj);

console.log("------------------------------->");
//dot notation
console.log(studentObj.address);
//square bracket notation====> when we have spaces in key then we use this
console.log(studentObj["address"]);

//  updating Objects
studentObj.address.city = "bhimadole";

console.log(studentObj.address); // mutuble

//delete the Objects
delete studentObj.address.city;
console.log(studentObj.address);
//check exist
let res = studentObj.hasOwnProperty("address");

console.log("existed or not-->" + res);

console.log("------------------------------------>");
const shoppingCart = {
  1: "Apple",
  2: "Orange",
};

console.log(shoppingCart["1"]);

var arr = [1, 2, 3, 4, 5];
console.log(arr.includes(2, 1));

let ob = { name: "Crio", location: "Bengaluru" };
const result = ob.name + "" + ob.location;
console.log(result);*/
/*let arr = [
  {
    color: "red",

    type: "Station Wagon",

    capacity: 5,
  },

  {
    color: "green",

    type: "Convertible",

    capacity: 2,
  },

  {
    color: "white",

    type: "MiniVan",

    capacity: 4,
  },
];

let capacity = 0;
let type;
for (var i = 0; i < arr.length; i++) {
  const obj = arr[i];
  obj.capacity;

  if (capacity < obj.capacity) {
    capacity = obj.capacity;
    type = obj.type;
  }
}

console.log("FInal Type-->" + type);*/

/* const ourStorage = {
  cabinet: {
    "top drawer": {
      folder1: "it's a folder 1",
      folder2: "secrests",
    },
  },
};

console.log(ourStorage.cabinet);

console.log(ourStorage.cabinet["top drawer"]); */

// object destructuring
//order of variable doesn't matter

/* let person = {
  name: "Crio.Do",
  age: 10,
  title: "Edtech",
};

let { name, age, title } = person;

console.log(name, age, title);/*  */

/* let ob = {
  name: "Crio",
  location: "Bengaluru",
};
/* const a = ob.name;
  const b=ob.location;
  return  a+" "+b; */
/* let { name, location } = ob;
console.log(name, location);

let { name: a, location: b } = ob;
console.log("----------------------->");
console.log(a, b); */

//typeof--type checking but
//it will retur the data type in string format
/* 
console.log(typeof 42);

console.log(typeof "vinod");

console.log(typeof typeof true);

console.log(typeof true == Boolean); */

// Arrays are like objects in js

/* let n1 = [];
let n2 = {};

console.log(typeof n1);
console.log(typeof n2);
console.log(Array.isArray(n1));
console.log(Array.isArray(n2)); */

//array destructuring
//order of variable names iwll matter
/* let n1 = [1, 2, 3, 4, 5, 6];

let [a, b, c, d, e, f] = n1;

console.log(a, b, c, d, e, f);
let [, , , , h] = n1;
console.log(h);
console.log(303.3 * 3 === 909.9);
console.log(303.3 * 3); */

//array of objects
/* let vachicle = [
  {
    color: "red",
    type: "SUV",
    capacity: "3",
  },
  {
    color: "yellow",
    type: "sedan",
    capacity: "8",
  },
  {
    color: "green",
    type: "setback",
    capacity: 30,
  },
  { color: "white", type: "lorry", capacity: "3" },
];
//accessing the elements
console.log(vachicle[0].capacity);
console.log(vachicle[0]["capacity"]);
//accessing of array objects and find the max value
let [a, b, c, d] = vachicle;
let color;
let cap = 0;
for (var i = 0; i < vachicle.length; i++) {
  let obj = vachicle[i];
  console.log(obj.capacity + "    " + cap);

  if (obj.capacity > cap) {
    cap = obj.capacity;
    color = obj.color;
  }
}
console.log(` the final color ${color}`); */
/* 
console.log(typeof (5 / 0)); //maths infinity--> Number

// special number introduced in Javascript
console.log(-5 / 0); // negitive infinity==number type

console.log(-0 / 4); // negitive zero
console.log(typeof (-0 / 4)); // negitive zero---> number

console.log("JS" / 5); //NaN
console.log(typeof ("JS" / 5)); //number

console.log(0 / 0);
console.log(typeof (0 / 0)); */

//
var a = 4;
var b = 9;

//console.log(a / b);
/* 
console.log(Math.trunc(a / b));

console.log(Math.round(a / b));

console.log(Math.floor(a / b));

console.log(Math.ceil(a / b));
let arr = [1, 2, 3, 4, 5];

let max = Math.max(arr);

let min = Math.min(arr);
console.log(max, min);

let r = 10;
console.log(Math.PI * 2 * r);
12.566370614359172;
 */

//console.log(Math.abs(-89.09));

//functions====>anonymus functions

//function expression syntax

/* let result = function (a, b) {
  return a + b;
};
console.log(result(3, 4));
 */
//arrow functions ------
/* let sum = (a, b) => console.log(a + b);
sum(3, 4); */
//-- advantages of arrow functions
let sum = (a, b) => a + b;
console.log(`arrow functions--->${sum(20, 30)}`);

// --{} brackets are supported in arrow functions

const result = (sub1, sub2, sub3) => {
  let result = ((sub1 + sub2 + sub3) / 300) * 100;
  return result;
};

console.log(` multiple lines for arrows-->${result(100, 400, 600)}`);

//skip round brackets

const r1=()=>console.log("Hello--->");

const r2