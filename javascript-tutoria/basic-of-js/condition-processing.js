"use strict";

let year = 2015;
if (year === 2015) {
  console.log(true);
} else {
  console.log(false);
}

if (1) {
  console.log("항상 실행된다.");
}


let condition = true,
value1 = "Good",
value2 = "Bad";
let result = condition? value1 : value2;

console.log(result);