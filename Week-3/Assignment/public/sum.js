// axios method
const setTextAxios = async (number) => {
  const res = await axios.get(`http://localhost:3000/data?number=${number}`);
  const data = await res.data;
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

// Fetch API method
const setTextFetch = async (number) => {
  try {
    const res = await fetch(`http://localhost:3000/data?number=${number}`);
    const data = await res.json();
    document.querySelector(".message").innerHTML = data.text;
  } catch (e) {
    // needed further knowledge to solve this
    setTextAxios(number);
  }
};

const inputForm = document.getElementById("inputForm");
const inputText = document.getElementById("inputText");

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // setTextAxios(inputText.value);
  setTextHTTP(inputText.value);
  // setTextFetch(inputText.value);
});
