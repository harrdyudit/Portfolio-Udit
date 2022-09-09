const mobailBtn = document.querySelector(".mobail-navbar-btn");
const header = document.getElementById("header");

// const sticky=header.offsetTop;

const toggleMenu = () => {
  header.classList.toggle("active");
};
mobailBtn.addEventListener("click", () => toggleMenu());

window.addEventListener("scroll", function () {
 
  if (window.pageYOffset >= 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
