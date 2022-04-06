import React from "react";
import ContactForm from "../ContactForm";
import wsplogo from  "../../assets/img/7559928_whatsapp_pixel_social_logo_chat_icon.png"
import "./Footer.scss";
const Footer = (props) => {
  return (
    <footer>
      <>
        <div className="footer-top"><ContactForm/> 
          <a href="https://api.whatsapp.com/send?phone=573015879518" target="_blank" rel="noreferrer"> 
            <img src={wsplogo}alt="" /> 
          </a>
        </div>
        <div className="footer-bottom">
          {props.quote ? (
            <p className="kosalsay">"{props.quote.quote}"</p>
          ) : (
            <p className="kosalsay">"Loading..."</p>
          )}
        </div>
      </>
    </footer>
  );
};

export default Footer;
