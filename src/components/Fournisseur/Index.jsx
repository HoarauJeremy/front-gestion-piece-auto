import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <h1>Fournisseur</h1>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Index;