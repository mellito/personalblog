import React, { useState, useEffect } from "react";
import Pacman from "../../components/Pacman";
import { Link } from "react-router-dom";

import BlogsData from "../../assets/blogs.json";
import quoteData from "../../assets/quoutes.json";

import PostContainer from "../../components/PostCointainer";
import Footer from "../../components/Footer";
import "./blogs.scss";

function Blogs() {
  const randomQuote = Math.floor(Math.random() * quoteData.length + 1);
  const [idQuote, setIdQuote] = useState(null);

  useEffect(() => {
    const interval=setTimeout(() => {
      setIdQuote(randomQuote);
    }, 10000);
    return () => clearInterval(interval);
  });

  const lastPost = BlogsData.find((blog) => !!blog.lastpost);

  return (
    <>
      <main className="blogs-main">
        <section className="blogs-news-container">
          <figure className="blogs-news-img-container pixel-box--primary ">
            <img src={lastPost.image} alt={lastPost.title} />
          </figure>
          <div className="blogs-news-info-container">
            <h2 className="">{lastPost.title}</h2>
            <p className="kosalsay">{lastPost.description}</p>
            <Link to="/" className=" pixel-box--primary  kosalsay">
              Leer Mas
            </Link>
          </div>
        </section>

        <Pacman />

        <section className="blogs-post-container">
          <h2> LAST POST</h2>
          <div className="blogs-post-container__grid">
            {BlogsData.filter((data) => data.lastpost === false).map((data) => {
              return <PostContainer key={data.id} data={data} />;
            })}
          </div>
        </section>
      </main>
      <Footer quote={quoteData[idQuote]} />
    </>
  );
}

export default Blogs;
