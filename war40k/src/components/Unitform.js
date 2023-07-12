import React, { useState } from 'react';

const UnitForm = () => {
  const [unitData, setUnitData] = useState({
    nom: '',
    carac: {
      M: '',
      E: '',
      SV: '',
      PV: '',
      CD: '',
      CO: ''
    },
    tir: [{
      nom_tir: '',
      portee: '',
      A: '',
      CT: '',
      F: '',
      PA: '',
      D: '',
      Capa: ''
    }],
    melee: [{
      nom_tir: '',
      portee: '',
      A: '',
      CT: '',
      F: '',
      PA: '',
      D: '',
      Capa: ''
    }],
    aptitude: {
      base: [],
      faction: '',
      autres: []
    },
    svg_inv: '',
    mots_cles_faction: [],
    mots_cles: [],
    cout: '',
    equipement: [{
      nom_equipement: '',
      valeur: ''
    }],
    meneur: []
  });

  const handleChange = (e) => {
  const { name, value } = e.target;

  if (name.startsWith('carac.')) {
    const caracField = name.split('.')[1];
    setUnitData((prevState) => ({
      ...prevState,
      carac: {
        ...prevState.carac,
        [caracField]: value
      }
    }));
  } else if (name.startsWith('tir[')) {
    const index = parseInt(name.match(/\[(\d+)\]/)[1], 10);
    const tirField = name.split('.')[1];
    setUnitData((prevState) => ({
      ...prevState,
      tir: prevState.tir.map((tir, i) =>
        i === index ? { ...tir, [tirField]: value } : tir
      )
    }));
  } else if (name.startsWith('melee[')) {
    const index = parseInt(name.match(/\[(\d+)\]/)[1], 10);
    const meleeField = name.split('.')[1];
    setUnitData((prevState) => ({
      ...prevState,
      melee: prevState.melee.map((melee, i) =>
        i === index ? { ...melee, [meleeField]: value } : melee
      )
    }));
  } else if (name.startsWith('aptitude.')) {
    const aptitudeField = name.split('.')[1];
    setUnitData((prevState) => ({
      ...prevState,
      aptitude: {
        ...prevState.aptitude,
        [aptitudeField]: value
      }
    }));
  } else if (name === 'equipement') {
    const [index, equipementField] = value.split('.');
    setUnitData((prevState) => ({
      ...prevState,
      equipement: prevState.equipement.map((equipement, i) =>
        i === parseInt(index, 10)
          ? { ...equipement, [equipementField]: value }
          : equipement
      )
    }));
  } else {
    setUnitData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }
};


const handleSubmit = (e) => {
  e.preventDefault();

  fetch('/api/units', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(unitData)
  })
    .then((response) => response.json())
    .then((data) => {
      // Traitement de la réponse de l'API, par exemple, afficher un message de succès
      console.log('Unité créée avec succès:', data);

      // Réinitialiser les valeurs du formulaire
      setUnitData({
        nom: '',
        carac: {
          M: '',
          E: '',
          SV: '',
          PV: '',
          CD: '',
          CO: ''
        },
        tir: [{
          nom_tir: '',
          portee: '',
          A: '',
          CT: '',
          F: '',
          PA: '',
          D: '',
          Capa: ''
        }],
        melee: [{
          nom_tir: '',
          portee: '',
          A: '',
          CT: '',
          F: '',
          PA: '',
          D: '',
          Capa: ''
        }],
        aptitude: {
          base: [],
          faction: '',
          autres: []
        },
        svg_inv: '',
        mots_cles_faction: [],
        mots_cles: [],
        cout: '',
        equipement: [{
          nom_equipement: '',
          valeur: ''
        }],
        meneur: []
      });
    })
    .catch((error) => {
      // Gestion des erreurs
      console.error('Erreur lors de la création de l\'unité:', error);
    });
};



  return (
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="nom">Nom :</label>
      <input type="text" id="nom" name="nom" value={unitData.nom} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="m">M :</label>
      <input type="number" id="m" name="carac.M" value={unitData.carac.M} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="e">E :</label>
      <input type="number" id="e" name="carac.E" value={unitData.carac.E} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="sv">SV :</label>
      <input type="number" id="sv" name="carac.SV" value={unitData.carac.SV} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="pv">PV :</label>
      <input type="number" id="pv" name="carac.PV" value={unitData.carac.PV} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="cd">CD :</label>
      <input type="number" id="cd" name="carac.CD" value={unitData.carac.CD} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="co">CO :</label>
      <input type="number" id="co" name="carac.CO" value={unitData.carac.CO} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="nom_tir">Nom du tir :</label>
      <input type="text" id="nom_tir" name="tir[0].nom_tir" value={unitData.tir[0].nom_tir} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="portee_tir">Portée du tir :</label>
      <input type="text" id="portee_tir" name="tir[0].portee" value={unitData.tir[0].portee} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="A_tir">A :</label>
      <input type="text" id="A_tir" name="tir[0].A" value={unitData.tir[0].A} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="CT_tir">CT :</label>
      <input type="text" id="CT_tir" name="tir[0].CT" value={unitData.tir[0].CT} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="F_tir">F :</label>
      <input type="text" id="F_tir" name="tir[0].F" value={unitData.tir[0].F} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="PA_tir">PA :</label>
      <input type="text" id="PA_tir" name="tir[0].PA" value={unitData.tir[0].PA} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="D_tir">D :</label>
      <input type="text" id="D_tir" name="tir[0].D" value={unitData.tir[0].D} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="Capa_tir">Capacité :</label>
      <input type="text" id="Capa_tir" name="tir[0].Capa" value={unitData.tir[0].Capa} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="nom_melee">Nom de la mêlée :</label>
      <input type="text" id="nom_melee" name="melee[0].nom_melee" value={unitData.melee[0].nom_melee} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="portee_melee">Portée de la mêlée :</label>
      <input type="text" id="portee_melee" name="melee[0].portee" value={unitData.melee[0].portee} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="A_melee">A :</label>
      <input type="text" id="A_melee" name="melee[0].A" value={unitData.melee[0].A} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="CT_melee">CT :</label>
      <input type="text" id="CT_melee" name="melee[0].CT" value={unitData.melee[0].CT} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="F_melee">F :</label>
      <input type="text" id="F_melee" name="melee[0].F" value={unitData.melee[0].F} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="PA_melee">PA :</label>
      <input type="text" id="PA_melee" name="melee[0].PA" value={unitData.melee[0].PA} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="D_melee">D :</label>
      <input type="text" id="D_melee" name="melee[0].D" value={unitData.melee[0].D} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="Capa_melee">Capacité :</label>
      <input type="text" id="Capa_melee" name="melee[0].Capa" value={unitData.melee[0].Capa} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="aptitude_base">Aptitude de base :</label>
      <input type="text" id="aptitude_base" name="aptitude.base" value={unitData.aptitude.base} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="aptitude_faction">Aptitude de faction :</label>
      <input type="text" id="aptitude_faction" name="aptitude.faction" value={unitData.aptitude.faction} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="autres_aptitudes">Autres aptitudes :</label>
      <input type="text" id="autres_aptitudes" name="aptitude.autres" value={unitData.aptitude.autres} onChange={handleChange} />
    </div>
    {/* Ajouter les autres champs de l'objet 'aptitude' ici */}
    <div>
      <label htmlFor="svg_inv">SVG/INV :</label>
      <input type="text" id="svg_inv" name="svg_inv" value={unitData.svg_inv} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="mots_cles_faction">Mots-clés de faction :</label>
      <input type="text" id="mots_cles_faction" name="mots_cles_faction" value={unitData.mots_cles_faction} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="mots_cles">Mots-clés :</label>
      <input type="text" id="mots_cles" name="mots_cles" value={unitData.mots_cles} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="cout">Coût :</label>
      <input type="text" id="cout" name="cout" value={unitData.cout} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="nom_equipement">Nom de l'équipement :</label>
      <input type="text" id="nom_equipement" name="equipement[0].nom_equipement" value={unitData.equipement[0].nom_equipement} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="valeur_equipement">Valeur de l'équipement :</label>
      <input type="text" id="valeur_equipement" name="equipement[0].valeur" value={unitData.equipement[0].valeur} onChange={handleChange} />
    </div>
    {/* Ajouter les autres champs du tableau 'equipement' ici */}
    <div>
      <label htmlFor="meneur">Meneur :</label>
      <input type="text" id="meneur" name="meneur" value={unitData.meneur} onChange={handleChange} />
    </div>
    <button type="submit">Créer</button>
  </form>
);

};

export default UnitForm;
