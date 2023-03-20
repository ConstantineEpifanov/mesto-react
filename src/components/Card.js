import React from "react";

function Card({card, onCardClick}) {
  return (
    <article className="card">
      <button type="button" className="card__button-delete"></button>
      <img className="card__image" src={card.link} alt={card.name} onClick={() => onCardClick(card)}/>
      <div className="card__bottom">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__likes">
          <button type="button" className="card__button-like"></button>
          <p className="card__likes-number">{card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;