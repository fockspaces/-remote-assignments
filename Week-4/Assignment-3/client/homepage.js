import axios from "axios";

const signupForm = document.getElementById("signup");
const loginForm = document.getElementById("login");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("signup");
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("login");
});

const reqSending = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
};
