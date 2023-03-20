import React from "react";

function PopupWithForm({name, title, isOpen, onClose, children}) {
  return (
    <div
      id={name}
      className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        <form
          noValidate
          className={`popup__form popup__form_${name}`}
          name={`edit-${name}`}>
          {children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
