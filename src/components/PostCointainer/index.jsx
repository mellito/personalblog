import React from "react";
import { Link } from "react-router-dom";
import "./PostContainer.scss";
const PostContainer = (props) => {
  const { data } = props;
  return (
    <article className="post-contaner pixel-borders--2">
      <img
        src={data.image}
        className=" pixel-box--primary"
        alt="good of ward"
      />

      <p>{data.title}</p>
      <p className="kosalsay">{data.content.slice(0, 80)} ...</p>
      <Link to={"/"} className=" pixel-box--primary kosalsay">
        Read more
      </Link>
    </article>
  );
};

export default PostContainer;
