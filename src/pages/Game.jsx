// pages/Game.jsx
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Cards from "../components/Cards";

const images = [
  "src/assets/img/pikachu.png",
  "src/assets/img/eevee.png",
  "src/assets/img/squirtle.png",
  "src/assets/img/bulbasaur.png",
  "src/assets/img/pikachu.png",
  "src/assets/img/eevee.png",
  "src/assets/img/squirtle.png",
  "src/assets/img/bulbasaur.png",
  "src/assets/img/pikachu.png",
  "src/assets/img/eevee.png",
  "src/assets/img/squirtle.png",
  "src/assets/img/bulbasaur.png",
];

function shuffleArray(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(obj => obj.value);
}

function Game() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const pairedImages = [...images, ...images]; // 12 x 2 = 24
    const shuffled = shuffleArray(pairedImages).map((image, index) => ({
      id: index,
      image: image,
      isFlipped: false,
      isMatched: false,
    }));

    setCards(shuffled);
  }, []);

  const handleCardClick = (index) => {
    // Logique de jeu à venir
    console.log("Carte cliquée :", index);
  };

  return (
    <>
      <Header />
      <div className="grid">
        {cards.map((card, index) => (
          <Cards
            key={card.id}
            isFlipped={card.isFlipped}
            frontImage={card.image}
            backImage="../src/assets/img/card-back.png"
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </>
  );
}

export default Game;