function Cards({ cards, handleChoice, firstChoice, secondChoice, disabled }) {
  const isFlipped = (card) =>
    card === firstChoice || card === secondChoice || card.matched;

  return (
    <>
      {cards.map((card) => (
      <div className={`card${isFlipped(card) ? " flipped" : ""}`} onClick={() => !disabled && handleChoice(card)}>
  <div className="card-inner">
    <div className="card-front">
      <img src="/src/assets/img/card-back.png" alt="Dos de carte" />
    </div>
    <div className="card-back">
      <img src={card.img} alt={card.name} />
    </div>
  </div>
</div>

      ))}
    </>
  );
}


export default Cards;