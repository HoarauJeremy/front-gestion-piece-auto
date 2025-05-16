import { Outlet } from "react-router-dom";
import List from "./List";

const Index = () => {
  return (
    <div className="fournisseur-container">
      <h1>Gestion des Fournisseurs</h1>
      <List />
      <Outlet />
    </div>
  );
}

export default Index;