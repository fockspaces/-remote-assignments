// axios method
const fetchData = async (number) => {
  const res = await axios.get(`http://localhost:3000/data?number=${number}`);
  return res.data;
};

const setText = async (number) => {
  const data = await fetchData(number);
  document.querySelector(".message").innerHTML = data;
};

// XMLHttpRequest method
const setTextHTTP = async (number) => {
  const xhttp = new XMLHttpRequest();

  function reqListener() {
    document.querySelector(".message").innerHTML = this.responseText;
  }

  xhttp.addEventListener("load", reqListener);
  xhttp.open("GET", `http://localhost:3000/data?number=${number}`);
  xhttp.send();
};

const inputForm = document.getElementById("inputForm");
const inputText = document.getElementById("inputText");

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // setText(inputText.value);
  setTextHTTP(inputText.value);
});
