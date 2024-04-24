const moreBtn = document.getElementById("more");
const lessBtn = document.getElementById("less");
const hiddenParagraphs = document.querySelectorAll(
  "#footerdesc p:not(:first-of-type)"
);

moreBtn.addEventListener("click", function () {
  for (let i = 0; i < hiddenParagraphs.length; i++) {
    hiddenParagraphs[i].style.display = "block";
  }
  moreBtn.style.display = "none";
});

lessBtn.addEventListener("click", function () {
  for (let i = 0; i < hiddenParagraphs.length; i++) {
    hiddenParagraphs[i].style.display = "none";
  }
  moreBtn.style.display = "block";
});
