(async () => {
  const res = await axios.get("api/products", {
    params: { keyword: "spring" },
  });

  if (res.data) {
    res.data.forEach((item, idx) => {
      createCard(item, "spring-content");
    });
  }
})();
