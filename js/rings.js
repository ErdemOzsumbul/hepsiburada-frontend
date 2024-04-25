(async () => {
  const res = await axios.get("/api/products", {
    params: { keyword: "ring" },
  });

  if (res.data) {
    res.data.forEach((item, idx) => {
      createCard(item, "rings-content");
    });
  }
})();
