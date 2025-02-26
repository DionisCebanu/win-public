/* console.log(window.location.href)
window.addEventListener("beforeunload", function (e) {
    if(window.location.href != "/win_website/Rendez-vous2.html"){
        e.returnValue = "Votre progrès sera perdu. Êtes-vous certain ?";
    }
}); */

 document.getElementById("retour").addEventListener("click", function () {
  document.getElementById("popup").style.display = "flex";
});
document.getElementById("non").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});

document.getElementById("oui").addEventListener("click", function () {
  window.location.href = "/accueil";
}); 


console.log(window.location.pathname);

document.getElementById("ideaButton").addEventListener("click", function () {
  window.location.href = "/rendez-vous/informations-personnelles";
});

document
  .getElementById("businessButton")
  .addEventListener("click", function () {
    window.location.href = "/rendez-vous/informations-personnelles";
  });
