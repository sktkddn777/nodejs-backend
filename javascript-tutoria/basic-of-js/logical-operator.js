const a = true;
const b = false;

console.log(a || b); // true
console.log(a && b); // false

let first = "",
second = "",
third = "Third";

console.log(first || second || third || "unknown");

// AND연산자는 왼쪽 부터 시작해 boolean으로 변환하고 값이 false면 그 값을 변환 전 값으로 반환

console.log(1 || 5); // 1
console.log( 1 && 5); // 5
console.log(null && 3); // null
console.log(1 && 2 && 3); // 3

console.log(!1) //false
