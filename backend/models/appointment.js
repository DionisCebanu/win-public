/**
 * Ce fichier définit le modèle Mongoose pour la collection "appointment" dans une base de
 * données MongoDB. Ce modèle est utilisé pour représenter et manipuler des documents de
 * rendez-vous dans l'application. Voici une description détaillée des différentes parties
 * de ce fichier :
 *
 * 1. Importation des modules nécessaires :
 *    - `mongoose` : Bibliothèque pour travailler avec MongoDB dans un environnement Node.js.
 *    - `Schema` : Classe de Mongoose utilisée pour définir le schéma du modèle.
 *
 * 2. Définition du schéma pour la collection "appointment" :
 *    - Le schéma spécifie la structure des documents dans la collection.
 *    - `_id` : Identifiant unique du rendez-vous, généré automatiquement en tant que chaîne de caractères.
 *    - `type` : Type de rendez-vous, obligatoire.
 *    - `nom` : Nom de la personne prenant le rendez-vous, obligatoire.
 *    - `courriel` : Adresse email de la personne prenant le rendez-vous, obligatoire.
 *    - `telephone` : Numéro de téléphone de la personne prenant le rendez-vous, obligatoire.
 *    - `idee_application` : Idée d'application ou de projet, par défaut vide.
 *    - `budget` : Budget prévu pour le projet, par défaut vide.
 *    - `financement` : Informations sur le financement, par défaut vide.
 *    - `date` : Date du rendez-vous, obligatoire.
 *    - `timeSlot` : Plage horaire du rendez-vous, obligatoire.
 *    - `questions` : Questions ou commentaires supplémentaires, par défaut vide.
 *
 * 3. Création du modèle à partir du schéma :
 *    - Utilisation de la méthode `mongoose.model` pour créer le modèle "Appointment" basé sur le schéma défini.
 *
 * 4. Exportation du modèle pour utilisation dans d'autres parties de l'application.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Définition du schéma pour la collection "appointment"
const appointmentSchema = new Schema({
    _id: {
            type: String,
            default: () => new mongoose.Types.ObjectId().toString(),
          },
    type: { 
           type: String, 
           required: true 
          },
    nom: { 
           type: String, 
           required: true 
         },
    courriel: { 
          type: String, 
          required: true 
         },
    telephone: { 
          type: String, 
          required: true
         },
    idee_application: { 
         type: String, 
         default: '' 
         },
    budget: { 
           type: String, 
           default: ''
          },
    financement: { 
           type: String, 
           default: ''
          },
    date: { 
          type: Date, 
          required: true 
          },
    timeSlot: { 
           type: String, 
           required: true 
          },
    questions: { 
           type: String, 
           default: '' 
        }
});

// Création du modèle à partir du schéma
const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
