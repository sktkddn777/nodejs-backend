"use strict";

let value = true;
console.log(typeof value);

value = String(value);
console.log(typeof value);

value = Number(value);
console.log(typeof value);


let age = Number("What..??");
console.log(age); //NaN -> 형변환 실패

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

console.log(Boolean("HI")); // true
console.log(Boolean("")); // false