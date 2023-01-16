const fetchData = async (number) => {
  const res = await axios.get(`http://localhost:3000/data?number=${number}`);
  return res.data;
};

const setText = async (number) => {
  const data = await fetchData(number);
  document.querySelector(".message").innerHTML = data;
};



const inputForm = document.getElementById("inputForm");
const inputText = document.getElementById("inputText");

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  setText(inputText.value);
});
