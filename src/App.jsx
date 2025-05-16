import './App.css'
import './footer.css'
import { Route, Routes } from "react-router-dom";
import Accueil from "./components/Accueil/Layout.jsx";
import Fournisseur from "./routes/Fournisseur.jsx";
import Layout from "./components/Accueil/Layout.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path={"/fournisseur/*"} element={<Fournisseur />} />
          <Route path={"*"} element={"ERROR"} />
        </Route>
      </Routes>
    </>
  )
}

export default App
