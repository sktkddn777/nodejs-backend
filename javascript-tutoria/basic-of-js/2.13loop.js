
// while

let i = 0;

while (i < 3) {
  console.log(i);
  i++;
}

// i != 0  ->  i
while (i) {
  console.log(i);
  i--;
}

// do while
console.log('--------------------');
let x = 0;

do {
  console.log(x);
  x++;
} while ( x < 3 );

// for
console.log('--------------------');
let y = 0;
// for (y ; y < 3; y ++) {
//   console.log(y);
// }

for (; y < 3; y ++) {
  console.log(y);
}

// break -> 반복문이 즉시 중단.
// continue -> 전체 반복문이 멈추지 않고 다음 반복으로 넘어감
// ‘?’ 오른쪽엔 break나 continue가 올 수 없습니다

// label
console.log('--------------------');
outer: for(let z = 0; z < 5; z ++) {
  for (let j = 0; j < 5; j ++) {
    if (z + j > 4) {
      break outer;
    }
    console.log(z + j);
  }
}
console.log('outer is done');