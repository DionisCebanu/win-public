document.addEventListener("DOMContentLoaded", (event) => {
  const delay = 10;

  setTimeout(() => {
    let storedLanguage = localStorage.getItem("language") || "fr";
    let pageId = document.body.getAttribute("data-page-id");
    console.log("le data-page-id est : " + pageId);
    setLanguageText(pageId, storedLanguage);

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
            document.querySelector(`.${key}`) ||
            document.querySelector(`#${key}`);
          if (element) {
            element.innerHTML = content[key];
            console.log(content[key]);
          }
        }
      }

      document.querySelector("#en").textContent = lang === "en" ? "Fr" : "En";
    }
  }, delay);
});
