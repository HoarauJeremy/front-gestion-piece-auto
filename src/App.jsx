import './App.css'
import Fournisseur from "./Components/Fournisseur.jsx";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";

function App() {

  const NotFound = () => {
    return <>
      <h1>Not Found</h1>
    </>
  }

  return (
    <>
      <Routes>
        <Route path="/fournisseur" component={Fournisseur} />
        <Route path="*" component={NotFound} />
      </Routes>
    </>
  )
}

export default App
