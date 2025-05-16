import {Route, Routes} from "react-router-dom";
import Index from "../components/Fournisseur/index.jsx";
import List from "../components/Fournisseur/List.jsx";

const Fournisseur = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Index />} />
        <Route index element={<List />} />
      </Routes>
    </>
  )
}

export default Fournisseur;