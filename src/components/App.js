import { useState } from "react";
import "../page/index.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="App">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <input
          id="popup-profile-name"
          className="popup__input popup__input_edit_name"
          type="text"
          name="name"
          placeholder="Имя"
          required
          minLength={2}
          maxLength={40}
        />
        <span id="popup-profile-name-error" className="popup__error"></span>
        <input
          id="popup-profile-status"
          className="popup__input popup__input_edit_status"
          type="text"
          name="about"
          placeholder="Призвание"
          required
          minLength={2}
          maxLength={200}
        />
        <span id="popup-profile-status-error" className="popup__error"></span>
        <button className="popup__button" type="submit" value="save">
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm
        name="card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <input
          id="popup-card-title"
          className="popup__input popup__input_edit_title"
          type="text"
          name="name"
          placeholder="Название"
          required
          minLength={2}
          maxLength={30}
        />
        <span id="popup-card-title-error" className="popup__error"></span>
        <input
          id="popup-card-link"
          className="popup__input popup__input_edit_img"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span id="popup-card-link-error" className="popup__error"></span>
        <button
          className="popup__button popup__button_disabled"
          type="submit"
          value="save"
          disabled>
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm name="submit" title="Вы уверены?">
        <button type="submit" className="popup__button">
          Да
        </button>
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <input
          id="popup-avatar"
          className="popup__input popup__input_avatar"
          type="url"
          name="avatar"
          placeholder="Ссылка на картинку"
          required
        />
        <span id="popup-avatar-error" className="popup__error"></span>
        <button className="popup__button" type="submit" value="save" disabled>
          Сохранить
        </button>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
