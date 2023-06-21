import React from "react";
import UnitForm from './components/Unitform'
// import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const handleSubmit = (formData) => {
    fetch('/api/units', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Enregistrement réussi :', data);
      })
      .catch((error) => {
        console.error('Erreur lors de lenregistrement du document Unit :', error);
      });
  };

  return (
    <div>
      <h1>Mon Application</h1>
      <UnitForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;