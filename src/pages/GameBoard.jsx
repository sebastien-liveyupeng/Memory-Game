import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

function GameBoard({ cards, handleChoice, firstChoice, secondChoice, disabled }) {
  return (
    <>
      <Helmet>
        <title>Pokememory - Jeu</title>
      </Helmet>
      <Header />
      <div className="grid">
        <Cards
          cards={cards}
          handleChoice={handleChoice}
          firstChoice={firstChoice}
          secondChoice={secondChoice}
          disabled={disabled}
        />
      </div>
      <Footer />
    </>
  );
}

export default GameBoard;