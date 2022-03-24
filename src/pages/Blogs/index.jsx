import React from "react";
import Pacman from "../../components/Pacman";
import { Link } from "react-router-dom";
import BlogsData from "../../assets/blogs.json";
import "./blogs.scss";
import Rarenew from "../../assets/img/1078280-tech.webp";

function Blogs() {
  const lastPost = BlogsData.find((blog) => !!blog.lastpost);

  return (
    <main class="blogs-main">
      <section className="blogs-news-container">
        <figure className="blogs-news-img-container pixel-box--primary ">
          <img src={Rarenew} alt={lastPost.title} />
        </figure>
        <div className="blogs-news-info-container">
          <h2 className="">{lastPost.title}</h2>
          <p className="kosalsay">{lastPost.content}</p>
          <Link to="/" className=" pixel-box--primary  kosalsay">
            Read more
          </Link>
        </div>
      </section>

      <Pacman />
    </main>
  );
}

export default Blogs;
