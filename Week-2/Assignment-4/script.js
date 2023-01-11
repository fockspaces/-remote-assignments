const welcome = document.querySelector(".welcome");
const btn = document.querySelector(".button");
const foldedContent = document.querySelectorAll(".folded");

const changeText = (e) => {
  e.preventDefault();
  document.querySelector("#welcome-text").innerHTML = "Have a GoodTime!";
};

const showContent = (e) => {
  e.preventDefault();
  foldedContent.forEach((content) => content.style.display = "flex");
};

foldedContent.forEach((content) => (content.style.display = "none"));

welcome.addEventListener("click", changeText);
btn.addEventListener("click", showContent);
