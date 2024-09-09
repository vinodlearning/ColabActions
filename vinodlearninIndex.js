console.log("Hello CodeSandbox");

let data = [
  {
    id: 1,
    name: "vinod",
  },
  {
    id: 2,
    name: "Vivek",
  },
  {
    id: 3,
    name: "Virendhar",
  },
  {
    id: 4,
    name: "Vijay",
  },
];

let res = data.find((element) => element.id === 2 && element.name === "Vivek1");

let arr = [11, 21, 31, 41];
let res1 = arr.find((element) => element % 2 == 0);
//console.log(res1);

//---------------Sort-----------

let arr1 = [4, 20, 12, 12, 1, 100];
console.log(`Before sorting: ${arr1}`); // lexicography --dictonary
arr1.sort((a, b) => a - b); // sort with comparator function --> ascendeing order
//console.log(`After sorting: ${arr1}`);

let arr2 = [4, 20, 12, 12, 1, 100];
console.log(`Before sorting: ${arr2}`); // lexicography --dictonary
arr2.sort((a, b) => b - a); // sort with comparator function --> ascendeing order
//console.log(`After sorting: ${arr2}`);

const emps = [
  {
    name: "Kevi",
    age: 25,
  },
  {
    name: "Arnold",
    age: 6,
  },
  {
    name: "Sheila",
    age: 56,
  },
];

emps.sort((a, b) => a.age - b.age);

console.log(emps);

emps.forEach((e) => console.log(e.name));

let arr = [10, 30, 50];
let temp = [];
arr.forEach((e) => temp.push(e * e));
temp.sort((a, b) => a - b);
console.log(temp);
console.log(arr); 

let arr = [1, 2, 3, 4];
let resultArr = [];

arr.forEach((elmt) => resultArr.push(elmt * 3));

console.log(resultArr); 
//foreach won't return any values
//------------------------map method---------------
// map methos is capable of creating a new array and iterate the existin array and store the values into new array
let arr = [1, 2, 3, 4];

let result = arr.map((e) => e * 3);
console.log(result); 

 let circels = [10, 30, 50];
let areas = circels.map((elm) => Math.PI * (elm * elm));
// circle area-> PI r^2 formula
console.log(areas);
//find method filter the values and stops at 1st occurance of the elemnt but fildetr will iterate entire array and store the respective elemenst in new array
let resultArr = areas.filter((area) => area > 400);
console.log(resultArr); 

 let cart = [
  {
    item: "Garnier Face Scrubber",
    price: 600,
    quantity: 2,
  },
  {
    item: "Garnier Face Mask",
    price: 500,
    quantity: 3,
  },
  {
    item: "Garnier Body Syrum",
    price: 600,
    quantity: 2,
  },
];
let priecsForEachItem = cart.map((e) => e.price * e.quantity);
console.log(priecsForEachItem);
//------Reduce method--------------
let result = cart.reduce((sum, elm) => (sum += elm.price * elm.quantity), 0);
console.log(result);

//no initial values
let withoutIntVal = cart.reduce(
  (sum, elm) => (sum += elm.price * elm.quantity)
);
console.log(withoutIntVal); //[object Object]15001200 */

//slice method --In place method.

let playlist = ["song 1", "song 2", "song 3", "song 4"];

console.log(playlist);

// i want to delete song 3 and replace with new song 5
//playlist.splice(1, 1);

let rr = playlist.splice(1, 1, "Song 5");
//playlist.push(1, "Song 5");

console.log(playlist);
console.log(rr); 
//replace

//-----------------slice method --. getting piece of item
let arr = [1, 2, 3, 4, 5];
// starting index---> inclusive
//ending index--> exclusiive
// if we not provided then it will take end of the array
 let result = arr.find((elemt) => elemt == 10);

if (result) console.log("true");
else console.log("false");

console.log(result); 

//
let arr = [
  { firstname: "Robert", lastname: "Obrain" },

  { firstname: "Kevin", lastname: "Hart" },

  { firstname: "Dane", lastname: "Cobby" },
];
let result = arr.map((elmt) => elmt.firstname + " " + elmt.lastname);

console.log(result); 

let daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let arr = daysOfWeek.slice(0, 3);
console.log(arr);
let arr2 = arr.splice(1, 2, "Sunday");
console.log(arr); 

//new sessions--------------------->

 function isFourDigit(num) {
  let count = (num) => num.toString().length;
  console.log(count);
}

isFourDigit(1237);
console.log(isFourDigit(1237)); 

// check miraculuos number or not

function isFourDigit(numberPlate) {
  if (numberPlate >= 1000 && numberPlate <= 9999) return true;
  else return false;
}
function sumOfDigits(numberPlate) {
  let sum = 0;

  while (numberPlate > 0) {
    sum += numberPlate % 10;
    numberPlate = Math.floor(numberPlate / 10);
  }

  return sum;
}
function isPrime(numberPlate) {
  for (var i = 2; i < numberPlate; i++) {
    if (numberPlate % i == 0) return false;
  }
  return true;
}
/* 
Efficiency: The second function is more efficient because it reduces the number of iterations significantly. Instead of checking up to numberPlate - 1, it only checks up to sqrt(numberPlate).
Reason: If a number numberPlate is not prime, it must have a factor less than or equal to its square root. Therefore, checking up to the square root is sufficient to determine if the number is prime.
*/

function isPrime(numberPlate) {
  for (var i = 2; i <=Math.sqrt(numberPlate); i++) {
    if (numberPlate % i == 0) return false;
  }
  return true;
} 
function isPerfectSq(numberPlate) {
  const sq = Math.sqrt(numberPlate);
  // giving perfect value making round of digit
  return Math.floor(sq);
}
function derivedFunction(numberPlate) {
  let flag = 0;

  if (isFourDigit(numberPlate)) {
    var sum = sumOfDigits(numberPlate);

    if (isPrime(sum)) {
      var newSum = sumOfDigits(sum);
      if (isPerfectSq(newSum)) {
        flag = 1;
      }
    }
  }

  if (flag) {
    return "Miraculous";
  } else {
    return "Non Miraculous";
  }
}

let result = derivedFunction(1237);

//console.log(result);

let students = [
  { name: "William", age: 21, grade: 82 },
  { name: "Benjamin", age: 20, grade: 95 },
];
let passingGrade = 80;
//students.sort((a, b) => b.grade - a.grade);
let resultsStudents = students
  .filter((elmt) => elmt.grade >= passingGrade)
  .map((elmt) => elmt.name);

//console.log(resultsStudents);

let subjects = [1, 2, 2, 3, 4, 4, 5, 5];
let uniqueSubjects = subjects.filter((subject, index) => {
  return subjects.indexOf(subject) === index;
});

//console.log(uniqueSubjects);

function removeDeduplicate(arr) {
   let uniqueSubjects = subjects.filter((subject, index) => {
    return subjects.indexOf(subject) === index;
  });
  console.log(uniqueSubjects);
  return uniqueSubjects; */
  let uniqueSet = new Set();
  return arr.filter((item) => {
    if (!uniqueSet.has(item)) {
      uniqueSet.add(item);
      return true;
    }
    return false;
  });
}

const input = [1, 2, 2, 3, 4, 4, 5, 5];
console.log(removeDeduplicate(input));
