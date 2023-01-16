const number = 10;
axios.get(`http://localhost:3000/data?number=${number}`).then((res) => {
  console.log(res);
});
