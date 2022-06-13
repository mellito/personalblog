import React from "react";
import { Link } from "react-router-dom";
import "./PostContainer.scss";
const CardPost = (props) => {
  const { data, buttonTitle, link } = props;
  return (
    <article className="post-contaner pixel-borders--2">
      <img
        src={data.image}
        className=" pixel-box--primary"
        alt="good of ward"
      />

      <p>{data.title}</p>
      <p className="kosalsay">{data.description.slice(0, 80)}...</p>
      <Link to={link} className=" pixel-box--primary kosalsay">
        {buttonTitle}
      </Link>
    </article>
  );
};

export default CardPost;
