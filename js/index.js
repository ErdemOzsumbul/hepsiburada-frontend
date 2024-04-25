axios.defaults.baseURL = "http://localhost:3000";

const search = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");

search.onclick = async () => {
  if (!searchInput.value || searchInput.value.length < 2) return;
  window.location.href = "/pages/search/index.html?search=" + searchInput.value;
};

function createCard(product, containerId) {
  const productCard = document.createElement("div");
  productCard.style.cursor = "pointer";
  productCard.onclick = () => {
    window.open("/pages/detail/index.html?id=" + product._id, "_blank");
  };
  productCard.classList.add("preffer", "text-center");

  const img = document.createElement("img");

  img.src = "http://localhost:3000" + "/api/picture/?filename=" + product.src;
  img.classList.add("img-fluid", "img-thumbnail");
  img.alt = "preffer1";
  productCard.appendChild(img);

  const small = document.createElement("small");
  small.textContent = "Kredi ile 12 taksit";
  productCard.appendChild(small);

  const description = document.createElement("p");
  description.textContent = product.name;
  productCard.appendChild(description);

  const starRating = document.createElement("div");
  starRating.classList.add("preffer-star");

  for (let i = 0; i < 5; i++) {
    const star = document.createElement("i");
    star.classList.add(
      "bi",
      "bi-star-fill",
      product.starRating > i ? "text-warning" : "text-secondary"
    );
    starRating.appendChild(star);
  }

  const ratingCount = document.createElement("span");
  ratingCount.innerHTML = product.ratingCount.toLocaleString("en-US", {
    maximumFractionDigits: 4,
  });

  ratingCount.style.fontSize = "0.75rem";
  ratingCount.style.marginLeft = "0.25rem";
  starRating.appendChild(ratingCount);
  starRating.style.display = "flex";
  starRating.style.gap = "0.125rem";
  starRating.style.justifyContent = "center";
  starRating.style.alignItems = "center";
  productCard.appendChild(starRating);

  const price = document.createElement("p");
  price.classList.add("h6");
  const strong = document.createElement("strong");
  strong.textContent = `${product.price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  })} TL`;
  price.appendChild(strong);
  productCard.appendChild(price);

  const discount = document.createElement("span");
  discount.classList.add("indirim");
  discount.textContent = "Sepette %50 indirim";
  productCard.appendChild(discount);

  const addToCartButton = document.createElement("span");
  addToCartButton.classList.add("btn-basket");
  addToCartButton.textContent = "Sepete Ekle";
  productCard.appendChild(addToCartButton);

  const ringsContent = document.getElementById(containerId);
  ringsContent.appendChild(productCard);
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "decimal",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
function removeChildren(containerId) {
  const parentElement = document.getElementById(containerId);
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
}

function createProductCard(product, containerId) {
  const parentElement = document.getElementById(containerId);

  const card = document.createElement("div");
  card.classList.add("card", "position-relative");
  card.style.cursor = "pointer";

  card.onclick = () => {
    window.open("/pages/detail/index.html?id=" + product._id, "_blank");
  };

  const heartIcon = document.createElement("i");
  heartIcon.classList.add("bi", "bi-suit-heart", "position-absolute");
  card.appendChild(heartIcon);

  const img = document.createElement("img");
  img.src = "http://localhost:3000" + "/api/picture/?filename=" + product.src;
  img.classList.add("card-img-top");
  card.appendChild(img);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = "Hemen Al Sonra Öde";
  cardBody.appendChild(cardTitle);

  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent = product.name;
  cardBody.appendChild(cardText);

  const starRating = document.createElement("p");
  for (let i = 0; i < 5; i++) {
    const starIcon = document.createElement("i");
    starIcon.classList.add(
      "bi",
      "bi-star-fill",
      product.starRating > i ? "text-warning" : "text-secondary"
    );
    starRating.appendChild(starIcon);
  }
  const ratingCount = document.createElement("span");
  ratingCount.innerHTML = product.ratingCount.toLocaleString("en-US", {
    maximumFractionDigits: 4,
  });

  ratingCount.style.fontSize = "0.75rem";
  ratingCount.style.marginLeft = "0.25rem";
  starRating.appendChild(ratingCount);
  starRating.style.display = "flex";
  starRating.style.gap = "0.25rem";
  starRating.style.alignItems = "center";
  cardBody.appendChild(starRating);

  const price = document.createElement("p");
  price.classList.add("price");
  price.textContent = formatter.format(product.price) + " TL";
  cardBody.appendChild(price);

  const addToCartButton = document.createElement("a");
  addToCartButton.classList.add("btn");
  addToCartButton.textContent = "Sepete Ekle";
  addToCartButton.href = "#";
  cardBody.appendChild(addToCartButton);

  card.appendChild(cardBody);

  parentElement.appendChild(card);
}
