"use strict";

// a ?? b
// a가 null도 아니고 undefined도 아니면 a 그 외는 b

let first = null,
second = null,
third = "Third";

console.log(first ?? second ?? third ?? "unknown");

// ||는 첫 번째 truthy 값을 반환합니다.
// ??는 첫 번째 정의된(defined) 값을 반환합니다.

let height = 0;
console.log(height || 100); // 100
console.log(height ?? 100); // 0

let x = (1 && 2) ?? 3; // x= 2