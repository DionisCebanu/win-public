const montantPersoDiv = document.getElementById("montant-perso");
const montantProjetRadios = document.querySelectorAll(
  ".montant-projet input[type='radio']"
);

montantProjetRadios.forEach(function (radio) {
  radio.addEventListener("change", function () {
    if (this.checked && this.classList.contains("option6")) {
      montantPersoDiv.style.display = "block";
    } else {
      montantPersoDiv.style.display = "none";
    }
  });
});

//la partie financement:

const ouiOption = document.getElementById("RadioOn");
const nonOption = document.getElementById("RadioOff");
const boutonsImgs = document.querySelectorAll(".btnFinancement");

ouiOption.addEventListener("change", function () {
  if (ouiOption.checked) {
    boutonsImgs.forEach(function (boutonImg) {
      boutonImg.style.display = "block";
    });
  } else {
    boutonsImgs.forEach(function (boutonImg) {
      boutonImg.style.display = "none";
    });
  }
});
nonOption.addEventListener("change", function () {
  if (nonOption.checked) {
    boutonsImgs.forEach(function (boutonImg) {
      boutonImg.style.display = "none";
    });
  }
});

//changer couleur des boutons de financement:

const boutonFinance1 = document.getElementById("btnFinancement1");
const boutonFinance2 = document.getElementById("btnFinancement2");

boutonFinance1.addEventListener("click", function () {
  boutonFinance1.style.backgroundColor = "#FC6136";
  boutonFinance2.style.backgroundColor = "white";
});

boutonFinance2.addEventListener("click", function () {
  boutonFinance2.style.backgroundColor = "#FC6136";
  boutonFinance1.style.backgroundColor = "white";
});
