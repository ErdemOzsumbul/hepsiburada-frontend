(async () => {
  const res = await axios.get("/json/banklogos.json");

  function createCard(product) {
    const img = document.createElement("img");
    img.src = product.imageSrc;
    img.classList.add("img-fluid");
    img.height = product.height;
    img.width = product.width;

    const ringsContent = document.getElementById("bank-logos-content");
    ringsContent.appendChild(img);
  }
  if (res.data) {
    res.data.forEach((item, idx) => {
      createCard(item);
    });
  }
})();
