const ft1 = document.querySelector('.ft1');
const ft2 = document.querySelector(".ft2");
const ft3 = document.querySelector(".ft3");
const ft4 = document.querySelector(".ft4");
const ft5 = document.querySelector(".ft5");
const ft6 = document.querySelector(".ft6");
const ft7 = document.querySelector(".ft7");
const ft8 = document.querySelector(".ft8");
const ft9 = document.querySelector(".ft9");
const ft10 = document.querySelector(".ft10");
const ft11 = document.querySelector(".ft11");
const ft12 = document.querySelector(".ft12");
const ft13 = document.querySelector(".ft13");
const ft14 = document.querySelector(".ft14");
const ft15 = document.querySelector(".ft15");
const enf = document.querySelector('.langue #en');
document.querySelector(".langue").addEventListener("click", function (event) {
  event.preventDefault();
  if (enf.textContent == "En") {
    ft1.textContent = "Gardez une longueur d'avance";
    ft2.textContent = "abonnez-vous pour decouvrir nos offres avant tout le monde";
    ft3.textContent = "Accueil";
    ft4.textContent = "Nos Solutions";
    ft5.textContent = "Projets";
    ft6.textContent = "À propos";
    ft7.textContent = "Contact";
    ft8.innerHTML = "<span>Rendez-vous</span>";
    ft9.textContent = "Condition d'utilisation et notes légales";
    ft10.textContent = "Confidentialité";
    ft11.textContent = "Accessibilité";
    ft12.textContent = "Personnaliser les témoins";
    ft13.textContent = "Plan du site";
    ft14.textContent = "FAQ";
    ft15.textContent = "Win Technologie® et mettez vos idées en application® sont des marques déposées de Win Technologie Inc.";

} else if (enf.textContent == "Fr") {
    // this.textContent = "En";
    ft1.textContent = "Stay ahead of the curve";
    ft2.textContent = "Subscribe to discover our offers before anyone else.";
    ft3.textContent = "Home";
    ft4.textContent = "Our Solutions";
    ft5.textContent = "Projects";
    ft6.textContent = "About us";
    ft7.textContent = "Contact";
    ft8.innerHTML = "<span>Appointment</span>";
    ft9.textContent = "Terms of Use and Legal Notices";
    ft10.textContent = "Confidentiality";
    ft11.textContent = "Accessibility";
    ft12.textContent = "Customizing cookies";
    ft13.textContent = "Site map";
    ft14.textContent = "FAQ";
    ft15.textContent = "Win Technologie® and Put Your Ideas Into Action® are registered trademarks of Win Technologie Inc.";

  }
});
