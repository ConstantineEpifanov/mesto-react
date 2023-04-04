import React, { useRef } from "react";

import PopupWithForm from "./PopupWithForm.js";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const name = useRef("");
  const link = useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: name.current.value,
      link: link.current.value,
    });
  }

  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      submitButtonText="Сохранить"
      onSubmit={handleSubmit}>
      <input
        id="popup-card-title"
        className="popup__input popup__input_edit_title"
        type="text"
        name="name"
        ref={name}
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
        ref={link}
        placeholder="Ссылка на картинку"
        required
      />
      <span id="popup-card-link-error" className="popup__error"></span>
    </PopupWithForm>
  );
}
