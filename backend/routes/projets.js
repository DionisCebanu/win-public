/**
 * Ce fichier est un routeur Express pour gérer les différentes routes
 * associées aux pages des projets et études de cas.
 *
 * - Utilisation de Express.js pour créer un routeur.
 * - Utilisation de body-parser pour analyser les corps des requêtes POST.
 * - Définition de plusieurs routes GET pour servir des fichiers HTML spécifiques.
 *
 * Routes :
 *  - "/wechalet" : affiche la page du projet weChalet.
 *  - "/cliniq" : affiche la page du projet cliniQ.
 *  - "/colivex" : affiche la page du projet colivex.
 *  - "/damac" : affiche la page du projet damac.
 *  - "/doorDazzle" : affiche la page du projet doorDazzle.
 *  - "/easymove" : affiche la page du projet easymove.
 *  - "/fraction" : affiche la page du projet fraction.
 *  - "/impact" : affiche la page du projet impact.
 *  - "/laDb" : affiche la page du projet laDb.
 *  - "/ma-micro" : affiche la page du projet ma-micro.
 *  - "/pestControl" : affiche la page du projet pestControl.
 *  - "/renoAssistance" : affiche la page du projet renoAssistance.
 *  - "/timHortons" : affiche la page du projet timHortons.
 *  - "/tzCapitalNationale" : affiche la page du projet tzCapitalNationale.
 *  - "/etudes-cas/ma-micro" : affiche la page de l'étude de cas du projet ma-micro.
 *  - "/etudes-cas/timHortons" : affiche la page de l'étude de cas du projet tim hortons.
 *  - "/etudes-cas/impact" : affiche la page de l'étude de cas du projet impact.
 *
 * Les fichiers HTML correspondants sont servis depuis le répertoire "../../singleProjet"
 * ou "../../etudesDeCas" selon le projet ou l'étude de cas.
 */

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const router = express.Router();

// Middleware pour analyser le corps des requêtes POST
router.use(bodyParser.urlencoded({ extended: false }));

// Route pour afficher la page ddu projet weChalet
router.get("/wechalet", (req, res) => {
  res.sendFile(path.join(__dirname, "../../singleProjet/weChalet.html"));
});

// Route pour afficher la page ddu projet cliniq
router.get("/cliniq", (req, res) => {
  res.sendFile(path.join(__dirname, "../../singleProjet/cliniQ.html"));
});

// Route pour afficher la page ddu projet colivex
router.get("/colivex", (req, res) => {
  res.sendFile(path.join(__dirname, "../../singleProjet/colivex.html"));
});

// Route pour afficher la page ddu projet damac
router.get("/damac", (req, res) => {
  res.sendFile(path.join(__dirname, "../../singleProjet/damac.html"));
});

// Route pour afficher la page ddu projet doorDazzle
router.get("/doorDazzle", (req, res) => {
  res.sendFile(path.join(__dirname, "../../singleProjet/doorDazzle.html"));
});

// Route pour afficher la page ddu projet easymove
router.get("/easymove", (req, res) => {
  res.sendFile(path.join(__dirname, "../../singleProjet/easymove.html"));
});

// Route pour afficher la page ddu projet f
router.get("/fraction", (req, res) => {
  res.sendFile(path.join(__dirname, "../../singleProjet/fraction.html"));
});

// Route pour afficher la page ddu projet impact
router.get("/impact", (req, res) => {
  res.sendFile(path.join(__dirname, "../../singleProjet/impact.html"));
});

// Route pour afficher la page ddu projet laDb
router.get("/laDb", (req, res) => {
  res.sendFile(path.join(__dirname, "../../singleProjet/laDb.html"));
});

// Route pour afficher la page ddu projet ma-micro
router.get("/ma-micro", (req, res) => {
  res.sendFile(path.join(__dirname, "../../singleProjet/maMicro.html"));
});

// Route pour afficher la page ddu projet pestControl
router.get("/pestControl", (req, res) => {
  res.sendFile(path.join(__dirname, "../../singleProjet/pestControl.html"));
});

// Route pour afficher la page ddu projet renoAssistance
router.get("/renoAssistance", (req, res) => {
  res.sendFile(path.join(__dirname, "../../singleProjet/renoAssistance.html"));
});

// Route pour afficher la page ddu projet timHortons
router.get("/timHortons", (req, res) => {
  res.sendFile(path.join(__dirname, "../../singleProjet/timHortons.html"));
});

// Route pour afficher la page ddu projet tzCapitalNationale
router.get("/tzCapitalNationale", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../singleProjet/tzCapitalNationale.html")
  );
});

// Route pour afficher la page du projet etudeCasMaMicro
router.get("/etudes-cas/ma-micro", (req, res) => {
  res.sendFile(path.join(__dirname, "../../etudesDeCas/etudeCasMaMicro.html"));
});

// Route pour afficher la page du projet tim hortons
router.get("/etudes-cas/timHortons", (req, res) => {
  res.sendFile(path.join(__dirname, "../../etudesDeCas/etudeCasTim.html"));
});

// Route pour afficher la page du projet impact
router.get("/etudes-cas/impact", (req, res) => {
  res.sendFile(path.join(__dirname, "../../etudesDeCas/etudeCasImpact.html"));
});

module.exports = router;
