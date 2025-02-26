const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 8000;
app.use(cors());

// Connexion à MongoDB
const dbURI =
  "mongodb+srv://dbUser:hQx661MV9ReBKpVQ@ladb.opiabpu.mongodb.net/win_website";

mongoose
  .connect(dbURI)
  .then(() => console.log("Connexion à MongoDB win_website réussie"))
  .catch((err) => console.error("Erreur de connexion à MongoDB :", err));

// Configuration des dossiers statiques pour les ressources
app.use("/css", express.static(path.join(__dirname, "../css")));
app.use("/assets", express.static(path.join(__dirname, "../assets")));
app.use("/fonts", express.static(path.join(__dirname, "../fonts")));
app.use("/js", express.static(path.join(__dirname, "../js")));
app.use("/public", express.static(path.join(__dirname, "../public")));

// Middleware pour parser le corps des requêtes
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuration des vues
app.set("views", path.join(__dirname, "../"));

// Middleware pour utiliser les routes
app.use("/", require("./routes/main"));
app.use("/projets", require("./routes/projets"));

// Middleware pour gérer les erreurs 404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "../pages/404.html"));
});

// Middleware pour gérer les erreurs 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).sendFile(path.join(__dirname, "../pages/404.html"));
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur est démarré sur le port ${port}`);
});
