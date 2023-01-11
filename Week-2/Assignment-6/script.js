const welcome = $(".welcome");
const btn = $(".button");
const foldedContent = $(".folded");

const changeText = () => {
  $("#welcome-text").text("Have a GoodTime!");
};

const showContent = () => {
  foldedContent.show();
};

foldedContent.hide();

welcome.click(changeText);
btn.click(showContent);
