import './Card.css';

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className='card-dog-training__list'>
      <img
        src={card.img}
        alt={card.name}
        className='card-dog-training__img'
        onClick={handleClick}
      />
    </li>
  );
}

export default Card;
