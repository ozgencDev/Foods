document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change");
    // burada toogle ile change classlını ekleyerek ..menuchange ve .navbarchange üzerinden combo yaptık menu ve nabar üzerinden 2 farklı durum ürettik tekbir classtan
  });
});

const icons = document.querySelectorAll(".section-1-icons i");
let i = 1;
setInterval(() => {
  //tekrar tekrar kodu yürütür ama son simgenin karşdei olmadğıından changeyi devredemez kardeşine o yüzden sayaç ayarladık uzulnuktan büyük olunca başa sardık
  i++;
  const icon = document.querySelector(".section-1-icons i.change");

  icon.classList.remove("change");
  if (i > icons.length) {
    icons[0].classList.add("change");
    i = 1;
  } else {
    icon.nextElementSibling.classList.add("change");
  }
}, 4000);
