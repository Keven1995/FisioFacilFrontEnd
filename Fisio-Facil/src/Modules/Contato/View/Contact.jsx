import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/Contato.css";

const contactItems = [
  {
    id: "email",
    icon: FaEnvelope,
    label: "E-mail",
    href: "mailto:email@fisiofacil.com",
    text: "email@fisiofacil.com",
  },
  {
    id: "instagram",
    icon: FaInstagram,
    label: "Instagram",
    href: "https://instagram.com/fisiofacil",
    text: "@fisiofacil",
    external: true,
  },
  {
    id: "whatsapp",
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/5531999999999",
    text: "+55 31 99999-9999",
    external: true,
  },
];

const Contact = () => {
  return (
    <section className="contact-page" aria-labelledby="contact-title">
      <div className="contact-container">
        <h1 id="contact-title" className="contact-title">
          Entre em Contato
        </h1>

        <p className="contact-description">
          Estamos aqui para ajudar voce. Entre em contato com a Fisio Facil por um
          dos canais abaixo.
        </p>

        <ul className="contact-options" aria-label="Canais de contato">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.id} className="contact-option">
                <Icon className="contact-icon" aria-hidden="true" />
                <a
                  href={item.href}
                  className="contact-link"
                  aria-label={item.label}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
