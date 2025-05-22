// pages/Home.jsx
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <title>Pokememory - Accueil</title>
      <Header />
      <h1>Page d'accueil.</h1>
      <Link to="/game">
        <button>Jouer</button>
      </Link>
      <Footer />
    </>
  );
}

export default Home;