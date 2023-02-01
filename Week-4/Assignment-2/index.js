async function ajax(src, callback) {
  const res = await fetch(src);
  const data = await res.json();
  return callback(data);
}

function render(datasets) {
  for (const data of datasets) {
    const card = document.createElement("div");
    card.innerHTML = renderCard(data);
    document.body.appendChild(card);
  }
}

const renderCard = ({ name, price, description }) => {
  return `<div class="card" style="width: 18rem; margin-top: 15px;">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">$${price}</h6>
    <p class="card-text">${description}</p>
  </div>
</div>`;
};

document.querySelector("#display-btn").addEventListener("click", (e) => {
  ajax(
    "https://appworks-school.github.io/Remote-Assignment-Data/products",
    render
  ); // you should get product information in JSON format and render data in the page
  e.target.remove();
});
