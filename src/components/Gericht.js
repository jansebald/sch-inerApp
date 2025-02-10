import React from 'react';
import currywurstBild from '../images/currywurst.jpg';  // Bild importieren

function Gericht({ name, preis, bild }) {
  let imagePath;
  
  // Falls du das Bild dynamisch setzen möchtest, kannst du die Pfade hier importieren
  if (bild === 'currywurst.jpg') {
    imagePath = currywurstBild;
  }
  else {
    // Hier kannst du weitere Bilder importieren
    imagePath = require(`../images/${bild}`).default;
  }

  return (
    <div className="gericht">
      <img src={imagePath} alt={name} className="gericht-bild" />
      <div className="gericht-info">
        <h3>{name}</h3>
        <p>{preis}</p>
      </div>
    </div>
  );
}

export default Gericht;