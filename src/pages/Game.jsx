// pages/Game.jsx
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

const images = [
  "src/assets/img/absol.png",
  "src/assets/img/armaldo.png",
  "src/assets/img/bulbizare.png",
  "src/assets/img/chenipan.png",
  "src/assets/img/electro.png",
  "src/assets/img/fennekin.png",
  "src/assets/img/gengar.png",
  "src/assets/img/hericendre.png",
  "src/assets/img/pachirisu.png",
  "src/assets/img/phampy.png",
  "src/assets/img/totodile.png",
  "src/assets/img/vulpix.png",
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
      <title>Pokememory - Jeu</title>
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
      <Footer />
    </>
  );
}

export default Game;