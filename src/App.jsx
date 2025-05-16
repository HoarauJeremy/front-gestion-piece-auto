import './App.css'
import Fournisseur from "./components/Fournisseur/index.jsx";
import Accueil from "./components/Accueil/index.jsx";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import List from "./components/Fournisseur/List.jsx";
import {useEffect, useState} from "react";

const NotFound = () => {
  return <>
    <h1>Not Found</h1>
  </>
}

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/fournisseur');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <h1>Bonjour</h1>
    </>
    /*<BrowserRouter>
      <Routes>
        <Route index component={Accueil}/>
        <Route path="/fournisseur" component={Fournisseur}>
          <Route component={List}/>
        </Route>
        <Route path="*" component={NotFound}/>
      </Routes>
    </BrowserRouter>*/
  )
}

export default App
