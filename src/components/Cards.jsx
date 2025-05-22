// card component
function Cards({ isFlipped, frontImage, backImage, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img
        src={isFlipped ? frontImage : backImage}
        alt="Carte de mémoire"
        className="card-image"
      />
    </div>
  );
}

export default Cards;