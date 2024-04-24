(async () => {
  const res = await axios.get("/json/brands.json");

  function createCard(product) {
    const productCard = document.createElement("div");
    productCard.classList.add("brandsBox");

    const img = document.createElement("img");
    img.src = product.imageSrc;
    img.classList.add("img-fluid", "img-thumbnail");
    productCard.appendChild(img);

    const ringsContent = document.getElementById("brands-content");
    ringsContent.appendChild(productCard);
  }
  if (res.data) {
    res.data.forEach((item, idx) => {
      createCard(item);
    });
  }
})();
