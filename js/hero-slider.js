(async () => {
  const res = await axios.get("/json/hero-slider.json");

  function changePicture(item) {
    const title = document.getElementById("heroTitle");
    const Subtitle = document.getElementById("heroSubtitle");
    const selectedImg = document.getElementById("mainProdeImage");

    title.innerText = item.title;
    Subtitle.innerText = item.subtitle;
    selectedImg.src = item.srcLarge;
  }

  function createSliderItem(item) {
    const parentElement = document.getElementById("hero-slider-content");

    const productImageDiv = document.createElement("div");
    productImageDiv.classList.add("productImages");

    const img = document.createElement("img");
    img.src = item.srcSmall;
    img.onclick = () => changePicture(item);
    productImageDiv.appendChild(img);

    parentElement.appendChild(productImageDiv);
  }
  if (res.data) {
    res.data.forEach((item, idx) => {
      if (idx === 0) {
        changePicture(item);
      }
      createSliderItem(item);
    });
  }
})();
