import React from 'react';
import './loading.css';

function buildingBlocks() {
  return (
    <div>
      <div className="loader-container">
        <div className="spinner"></div>
        <div className="text-blue-500 font-poppins m-10">
          Chargement En Cours ... <br />
          Nous Sommes Train De Vous Connecter <br />
          Veuillez Patienter Un Instant.
        </div>
      </div>
    </div>
  );
}

export default buildingBlocks;
