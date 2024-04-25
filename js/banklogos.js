(async () => {
  const res = await axios.get(window.location.origin + "/json/banklogos.json");

  function createCard(product) {
    const img = document.createElement("img");
    img.src = product.src;
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
