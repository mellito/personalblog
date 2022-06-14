import React from "react";
import { Link } from "react-router-dom";
import "./PostContainer.scss";
const CardPost = ({ data, buttonTitle, link, type, extralink = "" }) => {
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
      {type === "projects" ? (
        <>
          <p className="kosalsay">{data.content}</p>
          <div className="post-contaner__button">
            <a
              href={data.webLink}
              target="_blank"
              rel="noreferrer"
              className="pixel-box--primary kosalsay"
            >
              {buttonTitle}
            </a>

            <a
              href={data.githubLink}
              target="_blank"
              rel="noreferrer"
              className="pixel-box--primary kosalsay"
            >
              Github FrontEnd
            </a>

            {extralink.length > 0 && (
              <a
                href={extralink}
                target="_blank"
                rel="noreferrer"
                className="pixel-box--primary kosalsay"
              >
                Github Backend
              </a>
            )}
          </div>
        </>
      ) : (
        <>
          <p className="kosalsay">{data.description}</p>
          <div className="post-contaner__button">
            <Link to={link} className=" pixel-box--primary kosalsay">
              {buttonTitle}
            </Link>
          </div>
        </>
      )}
    </article>
  );
};

export default CardPost;
