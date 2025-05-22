import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

function GameBoard({ cards, handleChoice, firstChoice, secondChoice, disabled, onShuffle }) {
  return (
    <>
      <Helmet>
        <title>Pokememory - Jeu</title>
      </Helmet>
      <Header />
 <main>
  <div className="card-grid">
    <Cards
      cards={cards}
      handleChoice={handleChoice}
      firstChoice={firstChoice}
      secondChoice={secondChoice}
      disabled={disabled}
    />
  </div>

  <div className="button-container">
    <button onClick={onShuffle}>Nouvelle partie</button>
  </div>
</main>

      <Footer />
    </>
  );
}

export default GameBoard;
