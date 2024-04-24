(async () => {
  const res = await axios.get("/json/super-price.json");

  function createProductCards(item) {
    const parentElement = document.getElementById("superPrice-content");

    const productCard = document.createElement("div");
    productCard.style.cursor = "pointer";
    productCard.onclick = () => {
      window.open("/pages/detail/index.html?id=" + item.id, "_blank");
    };
    productCard.classList.add("prodCard", "p-2");

    if (item.productName) {
      const productName = document.createElement("span");
      productName.textContent = item.productName;
      productCard.appendChild(productName);
    }

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("prodCardImage");
    const image = document.createElement("img");
    image.src = item.imageSrc;
    imageContainer.appendChild(image);
    productCard.appendChild(imageContainer);

    const price = document.createElement("p");
    price.textContent = item.price;
    productCard.appendChild(price);

    const button = document.createElement("div");
    button.classList.add("btn-basket");
    button.textContent = "Sepete Ekle";
    productCard.appendChild(button);
    button.style.display = "none";

    productCard.addEventListener("mouseover", () => {
      button.style.display = "block";
      price.style.display = "none";
    });
    productCard.addEventListener("mouseout", () => {
      button.style.display = "none";
      price.style.display = "block";
    });
    parentElement.appendChild(productCard);
  }
  if (res.data) {
    res.data.forEach((item, idx) => {
      createProductCards(item);
    });
  }
})();
