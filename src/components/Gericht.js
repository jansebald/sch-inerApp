import React from 'react';

function Gericht({ name, preis, bild }) {
  return (
    <div className="gericht">
<img src={`${process.env.PUBLIC_URL}/images/${bild}`} alt={name} className="gericht-bild" />
      <div className="gericht-info">
        <h3>{name}</h3>
        <p>{preis}</p>
      </div>
    </div>
  );
}

export default Gericht;