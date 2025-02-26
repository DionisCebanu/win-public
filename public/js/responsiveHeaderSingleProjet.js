// const menuHamburger = document.querySelector(".menu-hamburger");
// const nav = document.querySelector("nav");
// const source = document.querySelector(".menu-hamburger");

// menuHamburger.addEventListener("click", (event) => {
//   event.stopPropagation();
//   if (window.innerWidth <= 950) {
//     nav.classList.toggle("mobile-menu");
//     if (source.src.includes("+")) {
//       source.src = "../assets/images/header/Hamburger menu-.png";
//       nav.style.display = "flex";
//     } else if (source.src.includes("-")) {
//       source.src = "../assets/images/header/Hamburger menu+.png";
//       nav.style.display = "none";
//     }
//   }
// });

// document.addEventListener("click", (event) => {
//   if (window.innerWidth <= 950) {
//     if (!nav.contains(event.target) && !menuHamburger.contains(event.target)) {
//       nav.classList.remove("mobile-menu");
//       source.src = "../assets/images/header/Hamburger menu+.png";
//       nav.style.display = "none";
//     }
//   }
// });

// function handleNavigationDisplay() {
//   if (window.innerWidth > 950) {

//     nav.style.display = "flex";
//   } else {

//     nav.style.display = "none";
//     source.src = "../assets/images/header/Hamburger menu+.png";
//   }
// }

// window.addEventListener("resize", handleNavigationDisplay);

// handleNavigationDisplay();
document.addEventListener("DOMContentLoaded", (event) => {
  let storedLanguage = localStorage.getItem("language") || "en";
  let pageId = document.body.getAttribute("data-page-id");
  setLanguageText(pageId, storedLanguage);
});

function changeLanguage(event) {
  event.preventDefault();

  let currentLanguage = localStorage.getItem("language") || "fr";
  let newLanguage = currentLanguage === "en" ? "fr" : "en";

  localStorage.setItem("language", newLanguage);

  let pageId = document.body.getAttribute("data-page-id");
  setLanguageText(pageId, newLanguage);
}

// document.querySelector("#en").addEventListener("click", changeLanguage);
document.getElementById("en").addEventListener("click", changeLanguage);
document.getElementById("vector").addEventListener("click", changeLanguage);
// document.querySelector("#vector").addEventListener("click", changeLanguage);

function setLanguageText(pageId, lang) {
  let content = translations[pageId][lang];
  for (let key in content) {
    if (content.hasOwnProperty(key)) {
      let element =
        document.querySelector(`.${key}`) || document.querySelector(`#${key}`);
      if (element) {
        element.innerHTML = content[key];
      }
    }
  }

  document.querySelector("#en").textContent = lang === "en" ? "Fr" : "En";
}
