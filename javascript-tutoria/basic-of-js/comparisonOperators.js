"use strict";

console.log( 2 > 1); // true
console.log(2 == 1); // false

console.log( 'Z' > 'A' ) // true

// 비교하는 값의 자료형이 다르면 값들을 숫자형으로 바꾼다.
console.log( '2' > 1) // true, '2'가 숫자로 변환되고 비교 진행


console.log( 0 == false); // true, 숫자형으로 바꾸기에 나타나는 문제
console.log( 0 === false ); // false


// null은 오직 undefined와 같습니다.
console.log( null == undefined) // true
console.log( null === undefined) // false

console.log( null > 0) // false
console.log( null == 0) //false
console.log( null >= 0) // true 

console.log( undefined > 0) // false , undefined -> NaN으로 변환
console.log( undefined == 0) //false
console.log( undefined >= 0) // false 
