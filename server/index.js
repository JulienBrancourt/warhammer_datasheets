const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const Unit = require('./unitSchema.js');

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware pour gérer les en-têtes CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Middleware pour servir les fichiers du build de React
app.use(express.static(path.resolve(__dirname, '../war40k/build')));

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Connexion à MongoDB
mongoose.connect('mongodb+srv://JB:jbpswd@cluster0.lusxvsy.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connexion à MongoDB réussie.');
  })
  .catch((error) => {
    console.error('Erreur de connexion à MongoDB :', error);
  });

// Route GET pour vérifier la connexion du serveur
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!!!' });
});

// Route GET pour récupérer tous les Unit
app.get('/api/units', (req, res) => {
  Unit.find({})
    .then((units) => {
      res.json(units);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Erreur lors de la récupération des Unit.' });
    });
});

// Route POST pour créer une nouvelle Unité
app.post('/api/units', (req, res) => {
  const unitData = req.body;
  console.log('Données reçues :', unitData);

  const unit = new Unit(unitData);

  unit.save()
    .then((savedUnit) => {
      res.status(201).json(savedUnit);
    })
    .catch((error) => {
      console.error('Erreur lors de la création du document Unit :', error);
      res.status(500).json({ error: 'Une erreur est survenue lors de la création du document Unit.' });
    });
});

// Middleware pour servir l'application React
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
