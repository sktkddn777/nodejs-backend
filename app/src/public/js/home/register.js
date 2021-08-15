"use strict";

const id = document.querySelector("#id"), 
  name = document.querySelector('#name'),
  pw = document.querySelector("#pw"),
  checkPw = document.querySelector('#pw-check'),
  registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
  if (!id.value) return alert("Enter ID");
  if (pw != checkPw) {
    return alert("PASSWORD NOT SAME")
  }
  const req = {
    id: id.value,
    name: name.value,
    pw: pw.value,
  };

  console.log(req);

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("error occur"));
    })
}
