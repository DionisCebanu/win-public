const lien1 = document.getElementById("lien1");
const lien2 = document.getElementById("lien2");
const lien3 = document.getElementById("lien3");
const lien4 = document.getElementById("lien4");
const lien5 = document.getElementById("lien5");
const lien6 = document.getElementById("lien6");
const en = document.getElementById("en");
document.querySelector(".langue").addEventListener("click", function (event) {
  event.preventDefault();
  if (en.textContent == "En") {
    en.textContent = "Fr";
    lien1.textContent = "Home";
    lien2.textContent = "Our Solutions";
    lien3.textContent = "Projects";
    lien4.textContent = "About";
    lien5.textContent = "Contact";
    lien6.textContent = "Appointment";
  } else if (en.textContent="Fr") {
    en.textContent = "En";
    lien1.textContent = "Accueil";
    lien2.textContent = "Nos Solutions";
    lien3.textContent = "Projets";
    lien4.textContent = "À propos";
    lien5.textContent = "Contact";
    lien6.textContent = "Rendez-Vous";
  }
});
