(async () => {
  const res = await axios.get("/api/products?keyword=trend");

  if (res.data) {
    res.data.forEach((item, idx) => {
      createCard(item, "trend-content");
    });
  }
})();
