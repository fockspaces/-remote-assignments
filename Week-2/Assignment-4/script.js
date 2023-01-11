const welcome = document.querySelector(".welcome");
const btn = document.querySelector(".button");
const contents = document.querySelectorAll(".folded");

const changeText = (e) => {
  e.preventDefault();
  document.querySelector("#welcome-text").innerHTML = "Have a GoodTime!";
};

const showContent = (e) => {
  e.preventDefault();
  contents.forEach((content) => content.classList.remove("hidden"));
};

welcome.addEventListener("click", changeText);
btn.addEventListener("click", showContent);
