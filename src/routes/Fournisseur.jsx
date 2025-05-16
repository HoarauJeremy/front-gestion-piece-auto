import {Route, Routes} from "react-router-dom";
import Index from "../components/Fournisseur/Index.jsx";
import List from "../components/Fournisseur/List.jsx";

const Fournisseur = () => {
  return (
    <>
      <Routes>
        <Route element={<Index />}>
          <Route index element={<List />} />
        </Route>
      </Routes>
    </>
  )
}

export default Fournisseur;