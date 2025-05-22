function Cards({ cards, handleChoice, firstChoice, secondChoice, disabled }) {
  const isFlipped = (card) =>
    card === firstChoice || card === secondChoice || card.matched;

  return (
    <>
      {cards.map((card) => (
        <div
          className={`card${isFlipped(card) ? " flipped" : ""}`}
          key={card.id}
          onClick={() => !disabled && handleChoice(card)}
        >
          <img 
            className="card-image"
            src={isFlipped(card) ? card.img : "/src/assets/img/card-back.png"}
            alt={isFlipped(card) ? card.name : "Dos de carte"}
          />
        </div>
      ))}
    </>
  );
}

export default Cards;