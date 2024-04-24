(async () => {
  const res = await axios.get("/json/laptop.json");

  function createProductCard(productData) {
    // Get the parent element to which the card will be appended
    const parentElement = document.getElementById("laptop-content");

    // Create the card container element
    const card = document.createElement("div");
    card.classList.add("card", "position-relative");
    card.style.width = "15rem";

    // Create the heart icon (bi-suit-heart)
    const heartIcon = document.createElement("i");
    heartIcon.classList.add("bi", "bi-suit-heart", "position-absolute");
    card.appendChild(heartIcon);

    // Create the image element
    const img = document.createElement("img");
    img.src = productData.imageSrc;
    img.alt = productData.altText;
    img.classList.add("card-img-top");
    card.appendChild(img);

    // Create the card body element
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // Create the card title (h5) element
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = productData.cardTitle;
    cardBody.appendChild(cardTitle);

    // Create the card text (p) element
    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = productData.cardText;
    cardBody.appendChild(cardText);

    // Create the star rating and review count element
    const ratingContainer = document.createElement("p");
    for (let i = 0; i < productData.starRating; i++) {
      const starIcon = document.createElement("i");
      starIcon.classList.add("bi", "bi-star-fill", "text-warning");
      ratingContainer.appendChild(starIcon);
    }
    const reviewCount = document.createElement("span");
    reviewCount.textContent = productData.reviewCount;
    ratingContainer.appendChild(reviewCount);
    cardBody.appendChild(ratingContainer);

    // Create the price element
    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = productData.price;
    cardBody.appendChild(price);

    // Create the "Add to Cart" button element
    const addToCartButton = document.createElement("a");
    addToCartButton.classList.add("btn");
    addToCartButton.textContent = productData.buttonText;
    addToCartButton.href = "#";
    cardBody.appendChild(addToCartButton);

    // Append the card body to the card
    card.appendChild(cardBody);

    // Append the card to the parent element
    parentElement.appendChild(card);
  }

  if (res.data) {
    res.data.forEach((item, idx) => {
      createProductCard(item);
    });
  }
})();
