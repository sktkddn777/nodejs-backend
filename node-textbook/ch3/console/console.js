const obj = {
  outside: {
    inside: {
      key: "value",
    }
  }
}

console.time("시간");

console.log("Hello log");
console.error("error메시지가 담겨요");

console.dir(obj);

function b() {
  console.trace("error위치 추적");
}

function a() {
  b();
}

a();

console.timeEnd("시간");

console.log(__filename);
console.log(__dirname);