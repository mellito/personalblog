import React from "react";
import "./postContainer.scss";

const PostContainer = ({ children, title }) => {
  return (
    <section className="blogs-post-container">
      <h2> {title}</h2>
      <div className="blogs-post-container__grid">{children}</div>
    </section>
  );
};

export default PostContainer;
