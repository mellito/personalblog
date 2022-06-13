import { useState, useEffect } from "react";
import ContactForm from "../ContactForm";
import wsplogo from "../../assets/img/7559928_whatsapp_pixel_social_logo_chat_icon.png";
import "./Footer.scss";
import { useSelector } from "react-redux";

const Footer = () => {
  const randomQ = useSelector((state) => state.quote.quotes);
  const [quote, setQuote] = useState("");
  useEffect(() => {
    setQuote(randomQ[Math.floor(Math.random() * randomQ.length)]);
  }, [randomQ]);
  return (
    <footer>
      <div className="container-footer">
        <div className="footer-top">
          <ContactForm />
          <a
            href="https://api.whatsapp.com/send?phone=573015879518"
            target="_blank"
            rel="noreferrer"
          >
            <img src={wsplogo} alt="" />
          </a>
        </div>
        <div className="footer-bottom">
          {quote ? (
            <p className="kosalsay">{quote.quote}</p>
          ) : (
            <p className="kosalsay">"Loading..."</p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
