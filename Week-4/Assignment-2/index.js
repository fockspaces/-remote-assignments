async function ajax(src, callback) {
  const res = await fetch(src);
  const data = await res.json();
  callback(data);
}

function render(datasets) {
  for (const data of datasets) {
    const card = createCard(data);
    document.body.appendChild(card);
  }
}

ajax(
  "https://appworks-school.github.io/Remote-Assignment-Data/products",
  function (response) {
    render(response);
  }
); // you should get product information in JSON format and render data in the page

const createCard = (data) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.width = "18rem";
  card.style.marginTop = "15px";

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.innerText = data.name;

  const price = document.createElement("h6");
  price.classList.add("card-subtitle");
  price.classList.add("mb-2");
  price.classList.add("text-muted");
  price.innerText = `$${data.price}`;

  const text = document.createElement("p");
  text.classList.add("card-text");
  text.innerText = data.description;

  cardBody.appendChild(title);
  cardBody.appendChild(price);
  cardBody.appendChild(text);

  card.appendChild(cardBody);
  return card;
};
