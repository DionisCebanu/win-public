form.addEventListener("submit", (event) => {
  event.preventDefault();
  document
    .getElementById("submitButton")
    .addEventListener("click", async function () {
      const form = document.getElementById("contactForm");
      form.addEventListener("submit", (event) => {
        event.preventDefault();
      });
      const formData = new FormData(form);
      const formDataObject = {};
      for (let [key, value] of formData.entries()) {
        formDataObject[key] = value;
      }
      const jsonData = JSON.stringify(formDataObject);
      try {
        fetch("http://localhost:8000/send-contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: jsonData,
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              console.log("Données envoyées correctement:", data);
              form.reset();
            } else {
              console.log("Erreur lors de l'envoi de la data:", data);
            }
          })
          .catch((error) => {
            console.error("Erreur lors de l'envoi de la requête :", error);
          });
      } catch (error) {
        console.error("Erreur lors de l'envoi de la requête :", error);
      }
    });
});
