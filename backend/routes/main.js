/**
 * Ce fichier définit plusieurs routes pour un serveur Express, servant des pages HTML
 * et gérant des opérations d'email et des abonnements à une infolettre. Il utilise les
 * modules `express`, `nodemailer`, `body-parser` et `path`, ainsi que des modèles Mongoose
 * pour les rendez-vous et les abonnements à une infolettre. Voici une description détaillée
 * des fonctionnalités fournies :
 *
 * 1. Importation des modules nécessaires :
 *    - `express` : Cadre de serveur web.
 *    - `nodemailer` : Module pour l'envoi d'emails.
 *    - `body-parser` : Middleware pour analyser le corps des requêtes HTTP.
 *    - `path` : Module pour travailler avec les chemins de fichiers.
 *    - `Appointment` : Modèle Mongoose pour les rendez-vous.
 *    - `NewsletterSubscription` : Modèle Mongoose pour les abonnements à l'infolettre.
 *
 * 2. Création d'un routeur Express pour définir les routes.
 *
 * 3. Définition des routes GET pour servir des pages HTML :
 *    - `"/"` : Page principale.
 *    - `"/header"` : Contenu du header.
 *    - `"/footer"` : Contenu du footer.
 *    - `"/accueil"` : Page d'accueil.
 *    - `"/contact"` : Page de contact.
 *    - `"/solutions"` : Page "Nos Solutions".
 *    - `"/projets"` : Page "Nos Projets".
 *    - `"/a-propos"` : Page "À propos".
 *    - `"/faq"` : Page "FAQ".
 *    - Routes sous `/rendez-vous` pour différentes étapes du formulaire de rendez-vous.
 *
 * 4. Configuration du service d'envoi d'email avec `nodemailer` pour les actions suivantes :
 *    - `"/send-contact"` : Envoi d'un email de confirmation à l'utilisateur et d'un email
 *      de notification à l'administrateur lorsqu'un formulaire de contact est soumis.
 *    - `"/send-newsletter"` : Gestion des abonnements à l'infolettre, vérification de
 *      l'existence de l'email dans la base de données, enregistrement d'un nouvel abonnement
 *      et envoi d'un email de confirmation.
 *
 * 5. Définition des routes POST pour gérer les soumissions de formulaires :
 *    - `"/rendez-vous/sauvegarder"` : Sauvegarde des informations de rendez-vous, vérification
 *      des contraintes (plages horaires, nombre de rendez-vous par semaine) et envoi d'emails
 *      de confirmation à l'utilisateur et à l'administrateur.
 *
 * 6. Route GET pour récupérer tous les rendez-vous du mois courant jusqu'à la fin de l'année :
 *    - `"/rendez-vous/appointments"` : Renvoie les rendez-vous avec leurs dates et plages horaires.
 *
 * 7. Routes GET pour servir des pages HTML à partir du footer :
 *    - `"/conditions"` : Page des conditions d'utilisation.
 *    - `"/confidentialite"` : Page de la politique de confidentialité.
 *    - `"/accessibilite"` : Page sur l'accessibilité.
 *    - `"/temoins"` : Page sur les témoins de connexion (cookies).
 *
 * 8. Exportation du routeur pour utilisation dans d'autres parties de l'application.
 */

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");
const Appointment = require("../models/appointment");
const NewsletterSubscription = require("../models/newsletterSubscription");
const {
  validateContactForm,
  validateNewsletterSubscription,
  validateAppointment,
} = require("../utils/validations/validateForms"); // Vérifie ce chemin

const router = express.Router();

// Route pour afficher la page principale
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../pages/index.html"));
});

// Route pour le Placeholder
// router.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../../placeholder.html"));
// });

//_____________________

// Route pour afficher le contenu du header
/* router.get("/header", (req, res) => {
  res.sendFile(path.join(__dirname, "../../components/header.html"));
}); */

// Route pour servir le contenu du footer
/* router.get("/footer", (req, res) => {
  res.sendFile(path.join(__dirname, "../../components/footer.html"));
});
 */

// Route to serve the header
router.get('/header', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../components/header.html'));
});

// Route to serve the footer
router.get('/footer', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../components/footer.html'));
});
//_____________________

// Route pour afficher la page d'accueil
router.get("/accueil", (req, res) => {
  res.sendFile(path.join(__dirname, "../../pages/index.html"));
});

// Route pour afficher la page d'accueil
router.get("/404", (req, res) => {
  res.sendFile(path.join(__dirname, "../../pages/404.html"));
});

// Route pour afficher la page contact
router.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../../pages/contact.html"));
});

// Route pour afficher la page Nos-solutions
router.get("/solutions", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../pages/NosSolutions/nosSolutions.html")
  );
});

// Route pour afficher les Single-page
router.get("/single-project", (req, res) => {
  const minPage = 0;
  const maxPage = 14;
  const id = parseInt(req.query.id, 10);
  if (isNaN(id) || id < minPage || id > maxPage) {
    return res.sendFile(path.join(__dirname, "../../pages/404.html"));
  }
  res.sendFile(path.join(__dirname, "../../pages/single-projet.html"));
});

// Route pour afficher la page Nos Projets
router.get("/projets", (req, res) => {
  res.sendFile(path.join(__dirname, "../../pages/nosProjets.html"));
});

// Route pour afficher la page Nos Projets
router.get("/a-propos", (req, res) => {
  res.sendFile(path.join(__dirname, "../../pages/aPropos.html"));
});

// Route pour afficher la page Nos Projets
router.get("/logIn", (req, res) => {
  res.sendFile(path.join(__dirname, "../../pages/dashboard/logIn.html"));
});

// Route pour afficher la page Nos Projets
router.get("/faq", (req, res) => {
  res.sendFile(path.join(__dirname, "../../FAQ/faq2.html"));
});

// Route pour afficher la page rendez-vous qui demande si vous etes un particulier ou une entreprise
router.get("/rendez-vous", (req, res) => {
  res.sendFile(path.join(__dirname, "../../rendezVous/rendezVous.html"));
});

// Route pour afficher la page rendez-vous qui demande vos info personnel
router.get("/rendez-vous/informations-personnelles", (req, res) => {
  res.sendFile(path.join(__dirname, "../../rendezVous/rendezVous2.html"));
});

// Route pour afficher la page rendez-vous qui demande votre budget
router.get("/rendez-vous/budget", (req, res) => {
  res.sendFile(path.join(__dirname, "../../rendezVous/rendezVous3.html"));
});

// Route pour afficher la page rendez-vous qui demande la date
router.get("/rendez-vous/date", (req, res) => {
  res.sendFile(path.join(__dirname, "../../rendezVous/rendezVous4.html"));
});

// Route pour afficher les info du rendez-vous
router.get("/rendez-vous/info", (req, res) => {
  res.sendFile(path.join(__dirname, "../../rendezVous/rendezVous5.html"));
});

// Route pour la soumission
router.get("/rendez-vous/soumission-info", (req, res) => {
  res.sendFile(path.join(__dirname, "../../rendezVous/rendezVous6.html"));
});

// Configuration du service d'envoi d'email
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  port: 587,
  auth: {
    user: "wintechnobackend@gmail.com", // a remplir
    pass: "ceue yidk xasx ormk", // a remplir
  },
});

// Route pour l'envoi de l'infolettre
router.post("/send-newsletter", async (req, res) => {
  const { email } = req.body;

  // Valider les données d'inscription à l'infolettre
  const validation = validateNewsletterSubscription({ email });
  if (!validation.isValid) {
    return res.status(400).json({
      success: false,
      message: validation.message,
    });
  }

  // Vérifier si l'email existe déjà dans la base de données
  try {
    let existingSubscription = await NewsletterSubscription.findOne({ email });

    if (existingSubscription) {
      return res.status(400).json({
        success: false,
        message: "Cet email est déjà inscrit à notre infolettre.",
      });
    }

    // Créer un nouvel enregistrement d'abonnement à l'infolettre
    const newSubscription = new NewsletterSubscription({
      email,
    });

    // Sauvegarder l'abonnement dans la base de données
    await newSubscription.save();

    // Préparer l'email de confirmation
    const mailOptions = {
      from: "wintechnobackend@gmail.com", // a remplir
      to: email,
      subject: "Inscription à notre infolettre",
      text: "Merci de vous être inscrit à notre infolettre. Vous recevrez bientôt nos dernières nouvelles et mises à jour.",
    };

    // Envoyer l'email de confirmation
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Erreur lors de l'envoi de l'infolettre :", error);
        return res.status(500).json({
          success: false,
          message: "Une erreur s'est produite lors de l'envoi de l'infolettre.",
        });
      }
      res.json({
        success: true,
        message: "Inscription à l'infolettre réussie.",
      });
    });
  } catch (error) {
    console.error(
      "Erreur lors de la vérification de l'abonnement à l'infolettre :",
      error
    );
    res.status(500).json({
      success: false,
      message:
        "Une erreur s'est produite lors de l'inscription à l'infolettre.",
    });
  }
});

// Route pour la soumission du formulaire de rendez-vous
router.post("/rendez-vous/sauvegarder", async (req, res) => {
  const {
    type,
    nom,
    courriel,
    telephone,
    idee_application,
    budget,
    financement,
    date,
    timeSlot,
    questions,
  } = req.body;

  // Valider les données du rendez-vous
  const validation = validateAppointment({
    type,
    nom,
    courriel,
    telephone,
    idee_application,
    budget,
    financement,
    date,
    timeSlot,
    questions,
  });

  if (!validation.isValid) {
    return res.status(400).json({
      success: false,
      message: validation.message,
    });
  }

  // Convertir la date reçue en objet Date
  const appointmentDate = new Date(date);

  try {
    // Vérifier les plages horaires spécifiques pour la même date
    const existingAppointmentSameTimeSlot = await Appointment.findOne({
      date: appointmentDate,
      timeSlot,
    });
    if (existingAppointmentSameTimeSlot) {
      console.log("Cette plage horaire est déjà prise pour cette date.");
      return res.status(400).json({
        success: false,
        message: "Cette plage horaire est déjà prise pour cette date.",
      });
    }

    // Vérifier si l'utilisateur a déjà pris un rendez-vous le même jour
    const existingAppointmentSameEmailSameDay = await Appointment.findOne({
      date: appointmentDate,
      courriel,
    });
    if (existingAppointmentSameEmailSameDay) {
      console.log("Vous avez déjà un rendez-vous pour cette date.");
      return res.status(400).json({
        success: false,
        message: "Vous avez déjà un rendez-vous pour cette date.",
      });
    }

    // Vérifier si l'utilisateur a pris plus de deux rendez-vous dans la même semaine
    const startOfWeek = new Date(appointmentDate);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay()); // Début de la semaine (dimanche)
    const endOfWeek = new Date(appointmentDate);
    endOfWeek.setDate(endOfWeek.getDate() + (6 - endOfWeek.getDay())); // Fin de la semaine (samedi)

    const appointmentsSameWeek = await Appointment.find({
      courriel,
      date: { $gte: startOfWeek, $lte: endOfWeek },
    });

    if (appointmentsSameWeek.length >= 2) {
      console.log(
        "Vous ne pouvez pas prendre plus de deux rendez-vous dans la même semaine."
      );
      return res.status(400).json({
        success: false,
        message:
          "Vous ne pouvez pas prendre plus de deux rendez-vous dans la même semaine.",
      });
    }

    // Créer un nouveau rendez-vous avec les données reçues
    const newAppointment = new Appointment({
      type,
      nom,
      courriel,
      telephone,
      idee_application,
      budget,
      financement,
      date: appointmentDate,
      timeSlot,
      questions,
    });

    // Sauvegarder le rendez-vous dans la base de données
    await newAppointment.save();

    // Définir les options de mail
    const mailOptionsUser = {
      from: "wintechnobackend@gmail.com", // a remplir
      to: courriel,
      subject: "Confirmation de votre rendez-vous",
      text: `Bonjour ${nom},\n\nVotre rendez-vous a été confirmé pour le ${appointmentDate.toDateString()} à ${timeSlot}.\n\nMerci,\nWinTechnologie`,
    };

    const mailOptionsAdmin = {
      from: "wintechnobackend@gmail.com",
      to: "info@wintechnologie.app",
      subject: "Nouveau rendez-vous confirmé",
      text: `Un nouveau rendez-vous a été pris.\n\nDétails:\nType: ${type}\nNom: ${nom}\nCourriel: ${courriel}\nTéléphone: ${telephone}\nIdée d'application: ${idee_application}\nBudget: ${budget}\nFinancement: ${financement}\nDate: ${appointmentDate.toDateString()}\nPlage horaire: ${timeSlot}\nQuestions: ${questions}`,
    };

    // Envoyer les emails
    await Promise.all([
      transporter.sendMail(mailOptionsUser),
      transporter.sendMail(mailOptionsAdmin),
    ]);

    res.json({
      success: true,
      message: "Rendez-vous sauvegardé avec succès et emails envoyés.",
    });
  } catch (error) {
    console.error("Erreur lors de la sauvegarde du rendez-vous :", error);
    res.status(500).json({
      success: false,
      message:
        "Une erreur s'est produite lors de la sauvegarde du rendez-vous.",
    });
  }
});

// Route pour récupérer tous les rendez-vous du mois courant jusqu'à la fin de l'année
router.get("/rendez-vous/appointments", async (req, res) => {
  try {
    // Obtenir la date courante
    const currentDate = new Date();

    // Définir la date de début du mois courant à 00:00:00.000
    const startOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1,
      0,
      0,
      0,
      0
    );

    // Définir la date de fin de l'année courante à 23:59:59.999
    const endOfYear = new Date(
      currentDate.getFullYear(),
      11,
      31,
      23,
      59,
      59,
      999
    );
    const appointments = await Appointment.find({
      date: {
        $gte: startOfMonth,
        $lte: endOfYear,
      },
    }).select("date timeSlot");

    res.json(appointments);
    console.log(appointments);
  } catch (error) {
    console.error("Erreur lors de la récupération des rendez-vous :", error);
    res.status(500).send(error);
  }
});

//Route pour afficher les pages dans le footer
router.get("/conditions", (req, res) => {
  res.sendFile(path.join(__dirname, "../../pages/conditions.html"));
});

router.get("/confidentialite", (req, res) => {
  res.sendFile(path.join(__dirname, "../../pages/confidentialite.html"));
});

router.get("/accessibilite", (req, res) => {
  res.sendFile(path.join(__dirname, "../../pages/accessibilite.html"));
});

router.get("/temoins", (req, res) => {
  res.sendFile(path.join(__dirname, "../../pages/temoins.html"));
});
module.exports = router;
