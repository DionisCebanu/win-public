/**
 * Ce fichier définit le modèle Mongoose pour la collection "project" dans une base de
 * données MongoDB. Ce modèle est utilisé pour représenter et manipuler les projets
 * dans l'application. Voici une description détaillée des différentes parties de ce fichier :
 *
 * 1. Importation des modules nécessaires :
 *    - `mongoose` : Bibliothèque pour travailler avec MongoDB dans un environnement Node.js.
 *
 * 2. Définition du schéma pour la collection "newsletterSubscription" :
 *    - Le schéma spécifie la structure des documents dans la collection.
 *    - `_id` : Identifiant unique de l'abonnement, généré automatiquement en tant que chaîne de caractères.
 *    - `email` : Adresse email de l'abonné, obligatoire, unique, en minuscules, et avec les espaces enlevés aux extrémités.
 *    - `subscribedAt` : Date d'abonnement, par défaut la date actuelle.
 *
 * 3. Création du modèle à partir du schéma :
 *    - Utilisation de la méthode `mongoose.model` pour créer le modèle "NewsletterSubscription" basé sur le schéma défini.
 *
 * 4. Exportation du modèle pour utilisation dans d'autres parties de l'application.
 */

// models/Project.js

const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },

  hero: {
    heading: { type: String, required: true },
    text1: { type: String, required: true },
    text2: { type: String, required: true },
    image1: { type: String, required: true },
    image2: { type: String, required: true },
  },
  section2: {
    heading1: { type: String, required: true },
    text1: { type: String, required: true },
    heading2: { type: String, required: true },
    text2: { type: String, required: true },
  },

});

module.exports = mongoose.model("Project", projectSchema);
