import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SpeisekartenKategorien from './components/SpeisekartenKategorien';
import Partyservice from './components/Partyservice';

function App() {
  return (
    // Füge den basename hinzu, um das Routing unter einem Unterverzeichnis zu ermöglichen
    <Router basename="/sch-inerApp">
      <div className="App">
        <header className="App-header">
          <h1>Zum Schäiner</h1>
          <p>Die rustikale Imbissbude in Hersbruck</p>
          {/* Navigation Links */}
          <nav>
            <ul>
              <li>
                <Link to="/" className="nav-links">Speisekarte</Link>
              </li>
              <li>
                <Link to="/partyservice" className="nav-links">Partyservice</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Route für die Speisekarten-Seite */}
        <Routes>
          <Route path="/" element={<SpeisekartenKategorien />} />
          <Route path="/partyservice" element={<Partyservice />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;