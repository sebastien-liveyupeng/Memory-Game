// pages/Home.jsx
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <h1>Page d'accueil.</h1>
      <Link to="/game">Jouer</Link>
    </>
  );
}

export default Home;