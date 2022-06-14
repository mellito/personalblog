import React from "react";
import { Link } from "react-router-dom";
import "./PostContainer.scss";
const CardPost = ({ data, buttonTitle, link, github = "" }) => {
  return (
    <article className="post-contaner pixel-borders--2">
      <figure>
        <img
          src={data.image}
          className=" pixel-box--primary"
          alt="good of ward"
        />
      </figure>

      <p>{data.title}</p>

      <p className="kosalsay">{data.description}</p>
      <div className="post-contaner__button">
        <Link to={link} className=" pixel-box--primary kosalsay">
          {buttonTitle}
        </Link>
        {github.length > 0 && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="pixel-box--primary kosalsay"
          >
            Github
          </a>
        )}
      </div>
    </article>
  );
};

export default CardPost;
