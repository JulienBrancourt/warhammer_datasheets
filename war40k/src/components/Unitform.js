import React, { useState } from 'react';

const UnitForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    carac: {
      M: '',
      E: '',
      SV: '',
      PV: '',
      CD: '',
      CO: ''
    }
    // Autres champs du formulaire
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleCaracChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      carac: {
        ...prevFormData.carac,
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données du formulaire au backend ou effectuer des opérations supplémentaires
    console.log(formData);
    // Réinitialiser le formulaire
    setFormData({
      nom: '',
      carac: {
        M: '',
        E: '',
        SV: '',
        PV: '',
        CD: '',
        CO: ''
      }
      // Réinitialiser les autres champs du formulaire
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom:
        <input
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Caractéristiques:
        <br />
        M: <input
          type="number"
          name="M"
          value={formData.carac.M}
          onChange={handleCaracChange}
        />
        E: <input
          type="number"
          name="E"
          value={formData.carac.E}
          onChange={handleCaracChange}
        />
        SV: <input
          type="number"
          name="SV"
          value={formData.carac.SV}
          onChange={handleCaracChange}
        />
        PV: <input
          type="number"
          name="PV"
          value={formData.carac.PV}
          onChange={handleCaracChange}
        />
        CD: <input
          type="number"
          name="CD"
          value={formData.carac.CD}
          onChange={handleCaracChange}
        />
        CO: <input
          type="number"
          name="CO"
          value={formData.carac.CO}
          onChange={handleCaracChange}
        />
      </label>
      <br />
      {/* Ajoutez les autres champs du formulaire */}
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default UnitForm;
