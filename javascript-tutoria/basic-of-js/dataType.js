
// Js 변수는 자료형에 관계 없이 모든 데이터일 수 있다.
// dynamically typed언어
let message = "Hello";

message = 123;


// 숫자형
console.log("Not num" / 2); //NaN(계산 중에 에러가 발생했을 때)

// 문자형
let name = "John";
console.log(`Hello ${name}`); // Hello John


//boolean형
const trueCheck = true;
const falseCheck = false;

let isGreater = 4 > 1;
console.log(isGreater);

// null값
// 존재하지 않는 값, 비어있는 값, 알 수 없는 값

// undefined값
// null처럼 자신만의 자료형을 형성
// 값이 할당되지 않은 상태 -> 변수는 선언 했지만 값을 할당하지 않을 때
// 변수가 비어있음을 나타내려면 null을 쓰세요
let age;
console.log(age);

// 객체와 심볼

// typeof 연산자
console.log(typeof(true)); //boolean
console.log(typeof(Math)); //object -> 수학 연산을 해주는 내장 객체
console.log(typeof(alert)); //undefined -> 함수는 원래 객체형에 속하지만, 오래전 규칙임.



