import React, { useRef } from 'react';
import './form.scss';

const Form = () => {
  // Déclarations des références DOM avec `useRef`
  const form = useRef(); // Référence pour le formulaire
  const dialog = useRef(); // Référence pour la boîte de dialogue

  // Gestionnaire de soumission du formulaire
  const handleSendEmail = (e) => {
    e.preventDefault(); // Empêche l'action par défaut du formulaire (rechargement de la page)
    form.current.reset(); // Réinitialise les champs du formulaire
    dialog.current.showModal(); // Ouvre la boîte de dialogue
  };

  // Gestionnaire pour fermer la boîte de dialogue
  const closeHandler = () => {
    dialog.current.close(); // Ferme la boîte de dialogue
  };

  return (
    <div className="container">
      <dialog className="dialog" ref={dialog}>
        <button className="dialog__button" type="button" onClick={closeHandler}>
          X
        </button>
        <p>Votre message a bien été envoyé.</p>
      </dialog>

      <form className="form" ref={form} onSubmit={handleSendEmail}>
        <label className="form__label" htmlFor="lastname">Nom</label>
        <input
          className="form__input"
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Votre nom"
          required
        />
  
        <label className="form__label" htmlFor="firstname">Prénom</label>
        <input
          className="form__input"
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Votre prénom"
          required
        />

        <label className="form__label" htmlFor="email">Email</label>
        <input
          className="form__input"
          type="email"
          id="email"
          name="email"
          placeholder="Votre email"
          required
        />

        <label className="form__label" htmlFor="message">Message</label>
        <textarea
          className="form__textarea"
          id="message"
          name="message"
          placeholder="Votre message"
          rows="5"
          required
        />

        <button className="form__button theme-color" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Form;
