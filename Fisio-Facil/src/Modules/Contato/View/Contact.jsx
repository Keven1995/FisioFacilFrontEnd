import React from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/Contato.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Entre em Contato</h2>
      <p className="contact-description">
        Estamos aqui para ajudar você. Entre em contato com a FisioFácil através de um dos meios abaixo.
      </p>

      <div className="contact-options">
        <div className="contact-option">
          <FaEnvelope className="contact-icon" />
          <p className="contact-text">
            <a href="mailto:email@fisiofacil.com">email@fisiofacil.com</a>
          </p>
        </div>

        <div className="contact-option">
          <FaInstagram className="contact-icon" />
          <p className="contact-text">
            <a href="https://instagram.com/fisiofacil" target="_blank" rel="noopener noreferrer">
              @fisiofacil
            </a>
          </p>
        </div>

        <div className="contact-option">
          <FaWhatsapp className="contact-icon" />
          <p className="contact-text">
            <a href="https://wa.me/5531999999999" target="_blank" rel="noopener noreferrer">
              +55 31 99999-9999
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
