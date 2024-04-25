(async () => {
  const res = await axios.get("/api/products?keyword=superPrice");

  function createProductCards(item) {
    const parentElement = document.getElementById("superPrice-content");

    const productCard = document.createElement("div");
    productCard.style.cursor = "pointer";
    productCard.onclick = () => {
      window.open("/pages/detail/index.html?id=" + item._id, "_blank");
    };
    productCard.classList.add("prodCard", "p-2");

    const productName = document.createElement("span");
    productName.textContent = item.name || "Bilinmeyen Ürün";
    productCard.appendChild(productName);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("prodCardImage");
    const image = document.createElement("img");
    image.src = "http://localhost:3000" + "/api/picture/?filename=" + item.src;
    imageContainer.appendChild(image);
    productCard.appendChild(imageContainer);

    const price = document.createElement("p");
    price.textContent = formatter.format(item.price || 0);
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
