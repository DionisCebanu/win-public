document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner toutes les images à l'intérieur des éléments avec la classe .compteur
  const images = document.querySelectorAll(".compteur img");
  const dureeRotation = 500;
  const rotationAngles = [180, 90, 270, 135, 225, 180];

  // Fonction pour démarrer la rotation d'une image
  function startRotation(el, index) {
    let startTime = null;
    const targetAngle = rotationAngles[index];
    let currentAngle = 0;

    // Fonction pour animer la rotation image par image
    const stepRotation = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      // Progression de l'animation de 0 à 1
      const progress = Math.min(elapsed / dureeRotation, 1);
      // Calcul de l'angle actuel en fonction de la progression
      currentAngle = progress * targetAngle;

      // Appliquer la rotation à l'image
      el.style.transform = "rotate(" + -currentAngle + "deg)";

      if (progress < 1) {
        // Continuer l'animation
        window.requestAnimationFrame(stepRotation);
      } else {
        // Démarrer le comptage une fois la rotation terminée
        comptageChiffres(
          el.parentElement.querySelector(".number"),
          parseInt(
            el.parentElement
              .querySelector(".number")
              .getAttribute("data-target")
          )
        );
      }
    };

    // Démarrer l'animation
    window.requestAnimationFrame(stepRotation);
  }

  // Fonction pour démarrer le comptage des chiffres
  function comptageChiffres(el, target) {
    let count = 0;
    // Durée plus courte pour un défilement fluide
    const intervalDeDuree = 50;
    // Incrémentation par étape
    const step = target / (dureeRotation / intervalDeDuree);

    // Intervalle pour incrémenter le compteur
    let interval = setInterval(() => {
      count += step;
      if (count >= target) {
        count = target; // Assurer que le dernier nombre est le nombre cible
        clearInterval(interval); // Arrêter l'intervalle
      }
      // Afficher le nombre arrondi
      el.innerHTML = Math.floor(count) + ' <span class="plus-sign">+</span>';
    }, intervalDeDuree);
  }

  // Observer la section pour déclencher l'animation lorsqu'elle devient visible
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Section visible
          const section = entry.target;
          // Sélectionner tous les compteurs dans la section
          const counters = section.querySelectorAll(".compteur");
          counters.forEach((counter, index) => {
            // Réinitialiser la rotation et le compteur
            const img = counter.querySelector("img");
            img.style.transform = "rotate(0deg)";
            const number = counter.querySelector(".number");
            number.innerHTML = '0 <span class="plus-sign">+</span>';
            // Démarrer la rotation de chaque image
            startRotation(img, index);
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  // Sélectionner la section .section4
  const section4 = document.querySelector(".section4");
  // Observer la section .section4
  sectionObserver.observe(section4);
});
