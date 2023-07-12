const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  carac: {
    type: {
      M: { type: Number, required: true },
      E: { type: Number, required: true },
      SV: { type: Number, required: true },
      PV: { type: Number, required: true },
      CD: { type: Number, required: true },
      CO: { type: Number, required: true }
    },
    required: true
  
  },
  tir: [{
    nom_tir: { type: String, required: true },
    portee: { type: Number, required: true },
    A: { type: Number, required: true },
    CT: { type: Number, required: true },
    F: { type: Number, required: true },
    PA: { type: Number, required: true },
    D: { type: Number, required: true },
    Capa: { type: String, required: true }
  }],
  melee: [{
    nom_tir: { type: String, required: true },
    portee: { type: Number, required: true },
    A: { type: Number, required: true },
    CT: { type: Number, required: true },
    F: { type: Number, required: true },
    PA: { type: Number, required: true },
    D: { type: Number, required: true },
    Capa: { type: String, required: true }
  }],
  aptitude: {
    base: [{ type: String, required: true }],
    faction: { type: String, required: true },
    autres: [{ type: String }]
  },
  svg_inv: { type: String },
  mots_cles_faction: [{ type: String, required: true }],
  mots_cles: [{ type: String }],
  cout: { type: Number, required: true },
  equipement: [{
    nom_equipement: { type: String, required: true },
    valeur: { type: Number, required: true }
  }],
  meneur: [{ type: String }]
});


module.exports = mongoose.model('Unit', unitSchema);
