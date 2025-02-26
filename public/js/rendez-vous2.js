var form = document.getElementById("myForm");
var btn2 = document.getElementById("btn2");

// Fonction pour vérifier si un champ est vide
function isEmpty(inputValue) {
  return inputValue.trim() === "";
}

// Fonction pour valider le formulaire
function validateForm() {
  var nomRespo = document.getElementById("nomRespo").value;
  var courriel = document.getElementById("courriel").value;
  var numTel = document.getElementById("numTel").value;

  // Vérifie si les champs obligatoires sont vides
  if (isEmpty(nomRespo)) {
    document.getElementById("errorNomRespo").textContent =
      "*Veuillez saisir le nom du responsable.";
    return false;
  } else {
    document.getElementById("errorNomRespo").textContent = "";
  }

  if (isEmpty(courriel)) {
    document.getElementById("errorCourriel").textContent =
      "*Veuillez saisir votre adresse e-mail.";
    return false;
  } else {
    document.getElementById("errorCourriel").textContent = "";
  }

  if (isEmpty(numTel)) {
    document.getElementById("errorNumTel").textContent =
      "*Veuillez saisir votre numéro de téléphone.";
    return false;
  } else {
    document.getElementById("errorNumTel").textContent = "";
  }

  // Si tout est valide, soumettre le formulaire
  return true;
}

// Ajouter un écouteur d'événements sur le bouton Suivant
btn2.addEventListener("click", function (event) {
  if (!validateForm()) {
    event.preventDefault(); // Empêcher le passage à la page suivante si le formulaire n'est pas valide
  }
});
