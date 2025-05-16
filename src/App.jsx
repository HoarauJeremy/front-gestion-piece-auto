import './App.css'
import Fournisseur from "./Components/Fournisseur.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
      <header>
        <h1>Gestion Pièces Auto</h1>
        <nav>
          <ul>
            <li>
              <a href="/" title="Accueil">
                <i className="fas fa-home"></i> Accueil
              </a>
            </li>
            <li>
              <a href="/fournisseur" title="Gestion des fournisseurs">
                <i className="fas fa-truck"></i> Fournisseurs
              </a>
            </li>
            <li>
              <a href="/piece" title="Gestion des pièces">
                <i className="fas fa-cogs"></i> Pièces
              </a>
            </li>
            <li>
              <a href="/stock" title="Gestion du stock">
                <i className="fas fa-warehouse"></i> Stock
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default App
