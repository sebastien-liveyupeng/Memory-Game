// pages/Home.jsx
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '/src/index.css'

function Home() {
  return (
    <div className="page-container">
      <Helmet>
        <title>Pokememory - Accueil</title>
      </Helmet>
      <Header />
      <main className="main-content">
        <h1>Page d'accueil.</h1>
        <Link to="/game">
          <button>Jouer</button>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
export default Home;