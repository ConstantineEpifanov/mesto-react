import React, { useEffect, useState } from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userInfo, cardData]) => {
        setUserAvatar(userInfo.avatar);
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setCards(cardData);
      })
      .catch(console.log);
  }, []);

  return (
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__avatar-cover" onClick={onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt={userName} />
        </div>
        <div className="profile__info">
          <h1 className="profile__info-title">{userName}</h1>
          <p className="profile__info-subtitle">{userDescription}</p>
          <button
            type="button"
            className="profile__edit-button"
            onClick={onEditProfile}></button>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}></button>
      </section>
      <section className="cards content__cards">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
