import React from 'react';
import Gericht from './Gericht';

const kategorien = [
  {
    name: 'Currywurst',
    gerichte: [
      { name: 'mit Pommes', preis: '5,50 €', bild: '/images/currywurst.jpg' },
    ]
  },
  {
    name: 'Pommes',
    gerichte: [
      { name: 'Pommes Frites', preis: '3,00 €', bild: 'pommes.jpg' },
      { name: 'Pommes mit Mayo', preis: '3,50 €', bild: 'pommes-mayo.jpg' }
    ]
  },
  {
    name: 'Getränke',
    gerichte: [
      { name: 'Cola', preis: '2,00 €', bild: 'cola.jpg' },
      { name: 'Wasser', preis: '1,50 €', bild: 'wasser.jpg' }
    ]
  }
];

function SpeisekartenKategorien() {
  return (
    <div className="speisekarten-container">
      {kategorien.map((kategorie, index) => (
        <div key={index} className="kategorie">
          <h2>{kategorie.name}</h2>
          <div className="gerichte">
            {kategorie.gerichte.map((gericht, idx) => (
              <Gericht
                key={idx}
                name={gericht.name}
                preis={gericht.preis}
                bild={gericht.bild}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SpeisekartenKategorien;