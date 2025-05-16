import './App.css'
import './footer.css'
import './header.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Accueil from "./components/Accueil/index.jsx";
import Fournisseur from "./routes/Fournisseur.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Accueil />} />
        <Route path="/fournisseur" element={<Fournisseur />} />
      </Routes>
    </>
  )
}

export default App
