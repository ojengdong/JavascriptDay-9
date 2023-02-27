const form = document.querySelector("#form");
const sendButton = document.querySelector("#send");
const resetButton = document.querySelector('#reset');
const username = document.querySelector("#name");
const useremail = document.querySelector("#email");
const usermessage = document.querySelector("#message");

form.addEventListener('click', function(e) {
  e.preventDefault();
  console.log("submit");
})

sendButton.addEventListener('cilck')















































// let sendButton = document.getElementById("send");
// let resetButton = document.getElementById("reset");
// let form = document.getElementById("form");
// const username = document.getElementById("name");
// const useremail = document.getElementById("email");
// const usermessage = document.getElementById("message");

// form.addEventListener("submit", function (e) {
//   console.log("submit");
//   e.preventDefault();
// });

// resetButton.addEventListener("click", function (r) {
//   const input = document.querySelectorAll("input");
//   input.forEach((e) => {
//     e.value = " ";
//   });
//   message.value = " ";
//   window.localStorage.removeItem("username");
//   window.localStorage.removeItem("useremail");
//   window.localStorage.removeItem("usermessage");
// });

// sendButton.addEventListener("click", function (s) {
//   window.localStorage.setItem("username", username.value);
//   window.localStorage.setItem("useremail", useremail.value);
//   window.localStorage.setItem("usermessage", usermessage.value);
// });
