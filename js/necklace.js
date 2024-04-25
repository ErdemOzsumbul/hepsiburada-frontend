(async () => {
  const res = await axios.get("/api/products", {
    params: { keyword: "necklace" },
  });

  if (res.data) {
    res.data.forEach((item, idx) => {
      createCard(item, "necklace-content");
    });
  }
})();
