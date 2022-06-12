import React, { useState, useEffect } from "react";
import Pacman from "../../components/Pacman";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import BlogsData from "../../assets/blogs.json";
import quoteData from "../../assets/quoutes.json";

import PostContainer from "../../components/PostCointainer";
import Footer from "../../components/Footer";
import "./blogs.scss";

function Blogs() {
  const randomQuote = Math.floor(Math.random() * quoteData.length) + 1;
  const [idQuote, setIdQuote] = useState(null);

  useEffect(() => {
    const interval = setTimeout(() => {
      setIdQuote(randomQuote);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const lastPost = BlogsData.find((blog) => !!blog.lastpost);

  return (
    <>
      <Header />
      <main className="blogs-main">
        <section className="top-information">
          <article>
            <img
              src={lastPost.image}
              alt={lastPost.title}
              className="blogs-news-img-container pixel-box--primary "
            />
            <div className="blogs-news-info-container">
              <h2 className="">{lastPost.title}</h2>
              <p className="kosalsay">{lastPost.description}</p>
              <Link to="/" className=" pixel-box--primary  kosalsay">
                Read more
              </Link>
            </div>
          </article>
        </section>

        <Pacman />

        <section className="blogs-post-container">
          <h2> LAST POST</h2>
          <div className="blogs-post-container__grid">
            {BlogsData.filter((data) => !data.lastpost).map((data) => {
              return (
                <PostContainer
                  key={data.id}
                  data={data}
                  buttonTitle={"Read more"}
                  link={`/blogs/${data.id}`}
                />
              );
            })}
          </div>
        </section>
      </main>
      <Footer quote={quoteData[idQuote]} />
    </>
  );
}

export default Blogs;
