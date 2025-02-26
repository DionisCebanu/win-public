document.addEventListener("DOMContentLoaded", function () {
  function loadHTML(containerId, url, callback) {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(containerId).innerHTML = data;
        if (callback) callback();
      })
      .catch((error) => console.error("Error loading HTML:", error));
  }

  loadHTML("header-container", "../components/header.html", initializePage);
  loadHTML("footer-container", "../../components/footer.html", function () {
    footerLogic();
  });

  function initializePage() {
    // Appel de la fonction pour contrôler le menu hamburger
    controlHamburgerMenu();
    initializeTranslation();
    initializeNavigation();
    setActiveNavLink();
  }

  function controlHamburgerMenu() {
    const menuHamburger = document.querySelector(".menu-hamburger");
    const nav = document.querySelector("nav");

    // Fonction pour basculer le menu mobile
    function toggleMenu() {
      if (window.innerWidth <= 950) {
        nav.classList.toggle("mobile-menu");
        if (nav.classList.contains("mobile-menu")) {
          menuHamburger.src = "/assets/images/header/Hamburger menu-.png";
          nav.style.display = "flex";
        } else {
          menuHamburger.src = "/assets/images/header/Hamburger menu+.png";
          nav.style.display = "none";
        }
      }
    }

    // Fonction pour gérer l'affichage du menu en fonction de la taille de la fenêtre
    function handleNavigationDisplay() {
      if (window.innerWidth > 950) {
        nav.style.display = "flex";
        nav.classList.remove("mobile-menu");
        menuHamburger.src = "/assets/images/header/Hamburger menu+.png";
      } else {
        nav.style.display = "none";
        menuHamburger.src = "/assets/images/header/Hamburger menu+.png";
      }
    }

    // Événement pour ouvrir/fermer le menu lorsque le bouton hamburger est cliqué
    menuHamburger.addEventListener("click", toggleMenu);

    // Événement pour fermer le menu si un clic est fait en dehors du menu
    document.addEventListener("click", (event) => {
      if (
        window.innerWidth <= 950 &&
        !nav.contains(event.target) &&
        !menuHamburger.contains(event.target)
      ) {
        nav.classList.remove("mobile-menu");
        menuHamburger.src = "/assets/images/header/Hamburger menu+.png";
        nav.style.display = "none";
      }
    });

    // Gestion de l'affichage lors du redimensionnement de la fenêtre
    window.addEventListener("resize", handleNavigationDisplay);

    // Initialisation de l'affichage
    handleNavigationDisplay();
  }

  function initializeTranslation() {
    let storedLanguage = localStorage.getItem("language") || "en";
    let pageId = document.body.getAttribute("data-page-id");
    setLanguageText(pageId, storedLanguage);

    document.getElementById("en").addEventListener("click", changeLanguage);
    document.getElementById("vector").addEventListener("click", changeLanguage);
  }

  function changeLanguage(event) {
    event.preventDefault();

    let currentLanguage = localStorage.getItem("language") || "fr";
    let newLanguage = currentLanguage === "en" ? "fr" : "en";

    localStorage.setItem("language", newLanguage);

    let pageId = document.body.getAttribute("data-page-id");
    setLanguageText(pageId, newLanguage);
    window.location.reload(true);
  }

  function setLanguageText(pageId, lang) {
    let content = translations[pageId][lang];
    for (let key in content) {
      if (content.hasOwnProperty(key)) {
        let element =
          document.querySelector(`.${key}`) ||
          document.querySelector(`#${key}`);
        if (element) {
          element.innerHTML = content[key];
        }
      }
    }

    document.querySelector("#en").textContent = lang === "en" ? "Fr" : "En";
  }

  function initializeNavigation() {
    const navLinks = document.querySelectorAll(".nav-ul a");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      });
    });
  }

  function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll(".nav-ul a");

    navLinks.forEach((link) => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      }
    });
  }

  function footerLogic() {
    const newsletterForm = document.querySelector("#newsletterForm");
    const emailInput = document.getElementById("email");
    const toastNotification = document.querySelector(".toast-notification");

    newsletterForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      if (!emailInput.checkValidity()) {
        toastNotification.showToast("Invalid email address!", "error");
        return;
      }

      try {
        const response = await fetch("http://localhost:8000/send-newsletter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: emailInput.value }),
        });
        const result = await response.json();

        if (!result.success) {
          throw new Error(result.message);
        }

        console.log("Success:", result);
        toastNotification.showToast(result.message, "success");
      } catch (error) {
        console.error("Error:", error);
        toastNotification.showToast(error.message, "error");
      }
    });
  }
});
