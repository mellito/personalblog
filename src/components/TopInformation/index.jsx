import React from "react";
import { Link } from "react-router-dom";
import "./topinformation.scss";
const TopInformation = ({ image, title, description, linkpage = "" }) => {
  return (
    <section className="top-information">
      <article>
        <img
          src={image}
          alt={title}
          className="blogs-news-img-container pixel-box--primary "
        />
        <div className="blogs-news-info-container">
          <h2 className="">{title}</h2>
          <p className="kosalsay">{description}</p>
          {linkpage && (
            <Link to={linkpage} className=" pixel-box--primary  kosalsay">
              Read more
            </Link>
          )}
        </div>
      </article>
    </section>
  );
};

export default TopInformation;
