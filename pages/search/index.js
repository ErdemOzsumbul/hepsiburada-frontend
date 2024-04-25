(async () => {
  const res = await axios.get("/api/products", {
    params: {
      search: new URLSearchParams(window.location.search).get("search" || ""),
      tomorrow: false,
    },
  });
  const searchText = document.getElementById("search-item");
  const searchItemCount = document.getElementById("search-item-count");
  const flexCheckChecked34 = document.getElementById("flexCheckChecked34");
  const flexCheckChecked35 = document.getElementById("flexCheckChecked35");

  let provinces = "";
  searchText.textContent = new URLSearchParams(window.location.search).get(
    "search"
  );
  searchItemCount.textContent = res.data.length.toLocaleString("en-US", {
    maximumFractionDigits: 4,
  });
  if (res.data) {
    removeChildren("search-products");
    res.data.forEach((item, idx) => {
      createProductCard(item, "search-products");
    });
  }
  const tomorrow = document.getElementById("flexSwitchCheckDefault");

  tomorrow.addEventListener("change", async () => {
    try {
      const res = await axios.get("/api/products", {
        params: {
          search: new URLSearchParams(window.location.search).get(
            "search" || ""
          ),
          tomorrow: tomorrow.checked,
        },
      });
      removeChildren("search-products");

      res.data.forEach((item, idx) => {
        createProductCard(item, "search-products");
      });
      searchItemCount.textContent = res.data.length.toLocaleString("en-US", {
        maximumFractionDigits: 4,
      });
    } catch (error) {
      console.error(error);
    }
  });

  flexCheckChecked34.addEventListener("change", async () => {
    if (flexCheckChecked34.checked) {
      provinces += "34,";
    } else {
      provinces = provinces.replaceAll("34,", "");
    }

    try {
      const res = await axios.get("/api/products", {
        params: {
          search: new URLSearchParams(window.location.search).get(
            "search" || ""
          ),
          tomorrow: tomorrow.checked,
          provinces: provinces,
        },
      });
      removeChildren("search-products");

      res.data.forEach((item, idx) => {
        createProductCard(item, "search-products");
      });
      searchItemCount.textContent = res.data.length.toLocaleString("en-US", {
        maximumFractionDigits: 4,
      });
    } catch (error) {
      console.error(error);
    }
  });

  flexCheckChecked35.addEventListener("change", async () => {
    if (flexCheckChecked35.checked) {
      provinces += "35,";
    } else {
      provinces = provinces.replaceAll("35,", "");
    }

    try {
      const res = await axios.get("/api/products", {
        params: {
          search: new URLSearchParams(window.location.search).get(
            "search" || ""
          ),
          tomorrow: tomorrow.checked,
          provinces: provinces,
        },
      });
      removeChildren("search-products");

      res.data.forEach((item, idx) => {
        createProductCard(item, "search-products");
      });
      searchItemCount.textContent = res.data.length.toLocaleString("en-US", {
        maximumFractionDigits: 4,
      });
    } catch (error) {
      console.error(error);
    }
  });
})();
