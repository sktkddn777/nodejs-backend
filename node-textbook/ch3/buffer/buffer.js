const buffer = Buffer.from("저를 버퍼로 바꿔주세요");

console.log(buffer);
console.log(buffer.length);
console.log(buffer.toString());
// 대부분은 알아서 버퍼나 문자열로 바꿔준다.

const array = [Buffer.from("띄엄"), Buffer.from("띄엄"), Buffer.from("띄엄")];
console.log(Buffer.concat(array).toString());
// 버퍼가 여러개 들어왔을 때 concat으로 합칠 수 있다.

console.log(Buffer.alloc(5));
// 비어있는 5byte 버퍼