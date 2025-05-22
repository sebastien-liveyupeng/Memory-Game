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
          <img style={{ width: "180px", backgroundColor: "black" }}
            src={isFlipped(card) ? card.img : "/src/assets/img/card-back.png"}
            alt={isFlipped(card) ? card.name : ""}
            className="card-image"
          />
        </div>
      ))}
    </>
  );
}

export default Cards;