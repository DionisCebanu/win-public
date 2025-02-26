const menuHamburger = document.querySelector(".menu-hamburger");
const nav = document.querySelector("nav");
const source = document.querySelector(".menu-hamburger");

menuHamburger.addEventListener("click", () => {
  if (window.innerWidth <= 950) {
    nav.classList.toggle("mobile-menu");
    if (nav.classList.contains("mobile-menu")) {
      source.src = "./assets/images/header/Hamburger menu-.png";
      nav.style.display = "flex";
    } else {
      source.src = "./assets/images/header/Hamburger menu+.png";
      nav.style.display = "none";
    }
  }
});

document.addEventListener("click", (event) => {
  if (window.innerWidth <= 950) {
    if (!nav.contains(event.target) && !menuHamburger.contains(event.target)) {
      nav.classList.remove("mobile-menu");
      source.src = "./assets/images/header/Hamburger menu+.png";
      nav.style.display = "none";
    }
  }
});

function handleNavigationDisplay() {
  const nav = document.querySelector("nav");
  const source = document.querySelector(".menu-hamburger");

  if (window.innerWidth > 950) {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
    source.src = "./assets/images/header/Hamburger menu+.png";
  }
}

window.addEventListener("resize", handleNavigationDisplay);
handleNavigationDisplay();



