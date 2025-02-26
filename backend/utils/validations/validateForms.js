/**
 * Ce fichier contient des fonctions de validation pour les formulaires de contact et de rendez-vous.
 * Les fonctions suivantes sont incluses :
 * - `validateNewsletterSubscription`: Valide les données d'inscription à l'infolettre.
 * - `validateAppointment`: Valide les données d'un rendez-vous.
 * 
 * Les validations incluent les vérifications suivantes :
 * - Pour les inscriptions à l'infolettre : adresse email au format correct.
 * - Pour les rendez-vous : type de rendez-vous, nom, adresse email, numéro de téléphone, idée d'application,
 *   budget, financement, date, créneau horaire, et questions supplémentaires.
 * 
 * Ces fonctions retournent un objet contenant un indicateur de validité (`isValid`) et un message d'erreur
 * expliquant les problèmes de validation, le cas échéant.
 */


const validator = require('validator');


/**
 * Valide les données d'inscription à l'infolettre.
 * @param {object} data - Les données du formulaire d'inscription.
 * @returns {object} - Retourne un objet avec un indicateur de validité et un message d'erreur, le cas échéant.
 */
const validateNewsletterSubscription = (data) => {
  const { email } = data;

  // Validation de l'email
  if (!email || typeof email !== 'string' || email.trim() === '') {
    return {
      isValid: false,
      message: "L'adresse email est requise et ne peut pas être vide."
    };
  }
  if (!validator.isEmail(email)) {
    return {
      isValid: false,
      message: "L'adresse email fournie est invalide."
    };
  }

  // Si toutes les validations passent
  return {
    isValid: true,
    message: "Les données sont valides."
  };
};


/**
 * Valide les données du rendez-vous.
 * @param {object} data - Les données du rendez-vous.
 * @returns {object} - Retourne un objet avec un indicateur de validité et un message d'erreur, le cas échéant.
 */
const validateAppointment = (data) => {
  const { type, nom, courriel, telephone, idee_application, budget, financement, date, timeSlot, questions } = data;

  // Validation du type
  if (!type || typeof type !== 'string') {
    return {
      isValid: false,
      message: "Le type de rendez-vous est requis"
    };
  }

  // Validation du nom
  if (!nom || typeof nom !== 'string' || nom.trim() === '') {
    return {
      isValid: false,
      message: "Le nom est requis et ne peut pas être vide."
    };
  }
  if (!/^[a-zA-Z\s-]+$/.test(nom)) {
    return {
      isValid: false,
      message: "Le nom ne peut contenir que des lettres, des espaces et des tirets."
    };
  }

  // Validation de l'email
  if (!courriel || typeof courriel !== 'string' || courriel.trim() === '') {
    return {
      isValid: false,
      message: "L'adresse email est requise."
    };
  }
  if (!validator.isEmail(courriel)) {
    return {
      isValid: false,
      message: "L'adresse email fournie est invalide."
    };
  }

  // Validation du téléphone
  if (!telephone || typeof telephone !== 'string' || telephone.trim() === '') {
    return {
      isValid: false,
      message: "Le numéro de téléphone est requis."
    };
  }
  if (!/^\+?\d{10,15}$/.test(telephone)) {
    return {
      isValid: false,
      message: "Le numéro de téléphone est invalide. Il doit contenir entre 10 et 15 chiffres."
    };
  }


  // Validation du budget
  if (budget !== undefined && (typeof budget !== 'string' || isNaN(Number(budget)) || Number(budget) < 0)) {
    return {
      isValid: false,
      message: "Le budget doit être une chaîne de caractères représentant un nombre positif."
    };
  }

  // Validation du financement
  const validFinancements = ['desjardins', 'win', '']; // Liste des valeurs valides pour le financement
  if (financement !== undefined && !validFinancements.includes(financement.trim().toLowerCase())) {
    return {
      isValid: false,
      message: "Le financement doit être 'desjardins', 'win', ou laissé vide."
    };
  }

  function validateDate(date) {
    // Vérifier si la date est au format "M/D/YYYY" ou "MM/DD/YYYY"
    const datePattern = /^(0?[1-9]|1[0-2])\/(0?[1-9]|[12][0-9]|3[01])\/\d{4}$/;
  
    if (!date || !datePattern.test(date)) {
      return {
        isValid: false,
        message: "Veuillez entrer une date valide au format 'M/D/YYYY' ou 'MM/DD/YYYY'."
      };
    }
  
    return {
      isValid: true,
      message: "Date valide."
    };
  }
  
  // Exemple d'utilisation
  const result = validateDate("8/28/2024");

  // Validation du créneau horaire
  if (!timeSlot || !/^\d{2}:\d{2}$/.test(timeSlot)) {
    return {
      isValid: false,
      message: "Le créneau horaire est requis et doit être au format 'HH:MM'."
    };
  }

  // Validation des questions
  if (questions && typeof questions !== 'string') {
    return {
      isValid: false,
      message: "Les questions doivent être une chaîne de caractères."
    };
  }

  // Si toutes les validations passent
  return {
    isValid: true,
    message: "Les données du rendez-vous sont valides."
  };
};


module.exports = {
  validateNewsletterSubscription,
  validateAppointment
};
