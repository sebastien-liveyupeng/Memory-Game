import React, { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard";
import "./App.css";

const pokemonList = [
  { name: "absol", img: "/assets/img/absol.png" },
  { name: "armaldo", img: "/assets/img/armaldo.png" },
  { name: "bulbizare", img: "/assets/img/bulbizare.png" },
  { name: "totdile", img: "/assets/img/totdile.png" },
  { name: "chenipan", img: "/assets/img/chenipan.png" },
  { name: "electro", img: "/assets/img/electro.png" },
  { name: "fennekin", img: "/assets/img/fennekin.png" },
  { name: "gengar", img: "/assets/img/gengar.png" },
  { name: "hericendre", img: "/assets/img/hericendre.png" },
  { name: "pachirisu", img: "/assets/img/pachirisu.png" },
  { name: "phampy", img: "/assets/img/phampy.png" },
  { name: "vulpix", img: "/assets/img/vulpix.png" }
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

  







}