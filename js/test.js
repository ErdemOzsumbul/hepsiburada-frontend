(async () => {
  const res = await axios.get("/json/spring.json");

  function createCard(product) {
    const productCard = document.createElement("div");
    productCard.style.cursor = "pointer";
    productCard.onclick = () => {
      window.open("/pages/detail/index.html?id=" + product.id, "_blank");
    };
    productCard.classList.add("preffer", "text-center");

    const img = document.createElement("img");
    img.src = product.imageSrc;
    img.classList.add("img-fluid", "img-thumbnail");
    img.alt = "preffer1";
    productCard.appendChild(img);

    const small = document.createElement("small");
    small.textContent = "Kredi ile 12 taksit";
    productCard.appendChild(small);

    const description = document.createElement("p");
    description.textContent = product.productName;
    productCard.appendChild(description);

    const starRating = document.createElement("div");
    starRating.classList.add("preffer-star");

    for (let i = 0; i < 5; i++) {
      const star = document.createElement("i");
      star.classList.add("bi", "bi-star-fill");
      starRating.appendChild(star);
    }

    const reviewCount = document.createElement("span");
    reviewCount.innerHTML = "&nbsp;219";
    starRating.appendChild(reviewCount);

    productCard.appendChild(starRating);

    const price = document.createElement("p");
    price.classList.add("h6");
    const strong = document.createElement("strong");
    strong.textContent = `${product.price} TL`;
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

    const ringsContent = document.getElementById("spring-content");
    ringsContent.appendChild(productCard);
  }
  if (res.data) {
    res.data.forEach((item, idx) => {
      createCard(item);
    });
  }
})();
