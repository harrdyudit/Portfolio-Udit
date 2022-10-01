const mobailBtn = document.querySelector(".mobail-navbar-btn");
const header = document.getElementById("header");

const toggleMenu = () => {
  header.classList.toggle("active");
};
mobailBtn.addEventListener("click", () => toggleMenu());

// sticky menu-bar
window.addEventListener("scroll", function () {
  if (window.pageYOffset >= 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// scroll to top button
function goTo() {
  window.scrollTo(0, 0);
}
