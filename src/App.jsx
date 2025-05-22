// App.jsx
import React, { useEffect, useState } from "react";
import GameBoard from "./pages/GameBoard";
// import "./App.css";

const pokemonList = [
  { name: "absol", img: "/src/assets/img/absol.png" },
  { name: "armaldo", img: "/src/assets/img/armaldo.png" },
  { name: "bulbizare", img: "/src/assets/img/bulbizare.png" },
  { name: "totodile", img: "/src/assets/img/totodile.png" },
  { name: "chenipan", img: "/src/assets/img/chenipan.png" },
  { name: "electro", img: "/src/assets/img/electro.png" },
  { name: "fennekin", img: "/src/assets/img/fennekin.png" },
  { name: "gengar", img: "/src/assets/img/gengar.png" },
  { name: "hericendre", img: "/src/assets/img/hericendre.png" },
  { name: "pachirisu", img: "/src/assets/img/pachirisu.png" },
  { name: "phampy", img: "/src/assets/img/phampy.png" },
  { name: "vulpix", img: "/src/assets/img/vulpix.png" }
];

function App() {
  const [cards, setCards] = useState([]);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [disabled, setDisabled] = useState(false);

    const shuffleCards = () => {
    const duplicated = [...pokemonList, ...pokemonList];
    const shuffled = duplicated
      .map(card => ({ ...card, id: Math.random(), matched: false }))
      .sort(() => Math.random() - 0.5);
    
    setCards(shuffled);
    setFirstChoice(null);
    setSecondChoice(null);
    setDisabled(false);
  };

    useEffect(() => {
    shuffleCards();
  }, []);

    const handleChoice = (card) => {
    if (!disabled) {
      firstChoice ? setSecondChoice(card) : setFirstChoice(card);
    }
  };

    useEffect(() => {
    if (firstChoice && secondChoice) {
      setDisabled(true);

      if (firstChoice.name === secondChoice.name) {
        setCards(prev =>
          prev.map(card =>
            card.name === firstChoice.name ? { ...card, matched: true } : card
          )
        );
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [firstChoice, secondChoice]);

    const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setDisabled(false);
  };

    return (
    <div className="App">
      <GameBoard
        cards={cards}
        handleChoice={handleChoice}
        firstChoice={firstChoice}
        secondChoice={secondChoice}
        disabled={disabled}
      />
    <button onClick={shuffleCards}>Nouvelle partie</button>
    </div>
  );
}

export default App;