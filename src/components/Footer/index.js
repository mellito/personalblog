import React from "react";
import "./Footer.scss";
const Footer = (props) => {
  return (
    <footer>
      <>
        <div className="footer-top"></div>
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
