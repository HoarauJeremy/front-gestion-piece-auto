import Header from "./header";
import Footer from "./footer";
import {Outlet} from "react-router-dom";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Accueil</h1>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Index;