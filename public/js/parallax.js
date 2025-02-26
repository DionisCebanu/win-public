/* // function handleParallaxDisplay() {
// if (window.innerWidth >= 1024) {
// function conectarElementosConParallax(elementoA, elementoB) {
//     const rectA = elementoA.getBoundingClientRect();
//     const rectB = elementoB.getBoundingClientRect();

//     const puntoInicioX = rectA.left + window.scrollX + rectA.width;
//     const puntoInicioY = rectA.top + window.scrollY + rectA.height / 2;
//     const puntoFinX = rectB.left + window.scrollX;
//     const puntoFinY = rectB.top + window.scrollY + rectB.height / 2;

//     const linea = document.createElement('div');
//     linea.classList.add('linea-roja');
//     linea.style.position = 'absolute';
//     linea.style.left = puntoInicioX + 'px';
//     linea.style.top = puntoInicioY + 'px';

//     const longitud = Math.sqrt(Math.pow(puntoFinX - puntoInicioX, 2) + Math.pow(puntoFinY - puntoInicioY, 2));
//     const angulo = Math.atan2(puntoFinY - puntoInicioY, puntoFinX - puntoInicioX) * 180 / Math.PI;
//     linea.style.width = longitud + 'px';
//     linea.style.transform = 'rotate(' + angulo + 'deg)';

//     document.body.appendChild(linea);

//     function mostrarLineaGradualmente() {
//         if (isInViewport(elementoA) || isInViewport(elementoB)) {
//             setTimeout(() => {
//                 linea.style.width = longitud + 'px';
//                 linea.style.height= 10 +'px';
//             }, 100);
//         } else {
//             linea.style.width = '0';
//         }
//     }

//     window.addEventListener('scroll', mostrarLineaGradualmente);

//     window.addEventListener('load', mostrarLineaGradualmente);
// }

// function isInViewport(elemento) {
//     const rect = elemento.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// const etude1 = document.getElementById('etude1');
// const etude2 = document.getElementById('etude2');
// const etude3 = document.getElementById('etude3');
// const programmation = document.getElementById('programmation');
// const lancement = document.getElementById('lancement');
// conectarElementosConParallax(etude1, etude2);
// conectarElementosConParallax(etude2, etude3);
// conectarElementosConParallax(programmation, lancement);
// }}

// window.addEventListener('resize', handleParallaxDisplay);
// handleParallaxDisplay();

function handleParallaxDisplay() {
  function conectarElementosConParallax(elementoA, elementoB, isMobile) {
    const rectA = elementoA.getBoundingClientRect();
    const rectB = elementoB.getBoundingClientRect();

    let puntoInicioX, puntoInicioY, puntoFinX, puntoFinY;

    if (isMobile) {
      // Conecter la partie inférieure d'un div avec la partie supérieure du div suivant sur les appareils mobiles
      puntoInicioX = rectA.left + window.scrollX + rectA.width / 2;
      puntoInicioY = rectA.top + window.scrollY + rectA.height;
      puntoFinX = rectB.left + window.scrollX + rectB.width / 2;
      puntoFinY = rectB.top + window.scrollY;
    } else {
      if (elementoA.id === "etude3" && elementoB.id === "programmation") {
        // Sur bureau, connecter le coin inférieur gauche du troisième div avec le coin supérieur droit du quatrième div
        puntoInicioX = rectA.left + window.scrollX;
        puntoInicioY = rectA.top + window.scrollY + rectA.height;
        puntoFinX = rectB.left + window.scrollX + rectB.width;
        puntoFinY = rectB.top + window.scrollY;
      } else {
        // Connecter le centre du côté droit d'un div avec le centre du côté gauche du div suivant
        puntoInicioX = rectA.left + window.scrollX + rectA.width;
        puntoInicioY = rectA.top + window.scrollY + rectA.height / 2;
        puntoFinX = rectB.left + window.scrollX;
        puntoFinY = rectB.top + window.scrollY + rectB.height / 2;
      }
    }

    const linea = document.createElement("div");
    linea.classList.add("linea-roja");
    linea.style.position = "absolute";
    linea.style.left = puntoInicioX + "px";
    linea.style.top = puntoInicioY + "px";

    const longitud = Math.sqrt(
      Math.pow(puntoFinX - puntoInicioX, 2) +
        Math.pow(puntoFinY - puntoInicioY, 2)
    );
    const angulo =
      (Math.atan2(puntoFinY - puntoInicioY, puntoFinX - puntoInicioX) * 180) /
      Math.PI;
    linea.style.width = longitud + "px";
    linea.style.transformOrigin = "0 0";
    linea.style.transform = "rotate(" + angulo + "deg)";

    document.body.appendChild(linea);

    // Fonction pour afficher la ligne progressivement
    function mostrarLineaGradualmente() {
      if (isInViewport(elementoA) || isInViewport(elementoB)) {
        setTimeout(() => {
          linea.style.width = longitud + "px";
          linea.style.height = "5px";
          linea.style.backgroundColor = "var(--primary)";
        }, 100);
      } else {
        linea.style.width = "0";
      }
    }

    // Ajouter les événements de défilement et de chargement pour afficher la ligne
    window.addEventListener("scroll", mostrarLineaGradualmente);
    window.addEventListener("load", mostrarLineaGradualmente);
  }

  // Fonction pour vérifier si un élément est dans le viewport
  function isInViewport(elemento) {
    const rect = elemento.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  const etude1 = document.getElementById("etude1");
  const etude2 = document.getElementById("etude2");
  const etude3 = document.getElementById("etude3");
  const programmation = document.getElementById("programmation");
  const lancement = document.getElementById("lancement");

  const isMobile = window.innerWidth < 1024;

  // Connecter les divs avec des lignes de parallax
  conectarElementosConParallax(etude1, etude2, isMobile);
  conectarElementosConParallax(etude2, etude3, isMobile);
  conectarElementosConParallax(etude3, programmation, isMobile);
  conectarElementosConParallax(programmation, lancement, isMobile);
}

// Ajouter un écouteur d'événement pour redimensionner la fenêtre
window.addEventListener("resize", handleParallaxDisplay);
handleParallaxDisplay();
 */