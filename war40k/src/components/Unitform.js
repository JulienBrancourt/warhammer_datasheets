import React, { useState } from 'react';

const UnitForm = () => {
  const [unitData, setUnitData] = useState({
    nom: '',
    carac: {
      M: "",
      E: "",
      SV: "",
      PV: "",
      CD: "",
      CO: ""
    }
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
          M: "",
          E: "",
          SV: "",
          PV: "",
          CD: "",
          CO: ""
        }
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
      
      <button type="submit">Créer</button>
    </form>
  );
};

export default UnitForm;
