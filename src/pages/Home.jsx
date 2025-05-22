// pages/Home.jsx
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Helmet>
        <title>Pokememory - Accueil</title>
      </Helmet>
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