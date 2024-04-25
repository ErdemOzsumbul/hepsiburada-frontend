(async () => {
  const res = await axios.get("/api/product/details", {
    params: {
      id: new URLSearchParams(window.location.search).get("id"),
    },
  });

  const name = document.getElementById("product-name");
  const model = document.getElementById("product-model");
  const price = document.getElementById("product-price");
  const image = document.getElementById("product-image");
  const point = document.getElementById("product-seller-point");
  const tax = document.getElementById("product-tax");
  const rating = document.getElementById("product-rating");
  const stars = document.getElementById("product-stars");

  if (res.data) {
    name.textContent = res.data.name;
    price.textContent = formatter.format(res.data.price) + " TL";
    model.textContent = res.data.model;
    image.src =
      "http://localhost:3000" + "/api/picture/?filename=" + res.data.src;
    point.textContent = res.data.sellerPoints;
    tax.textContent = formatter.format(res.data.price / 12) + " TL";
    rating.textContent = res.data.starRating.toFixed(1);
    for (let i = 0; i < 5; i++) {
      const star = document.createElement("i");
      if (res.data.starRating > i) {
        stars.children[i + 1].classList.add("text-warning");
      }
    }
  }
})();
