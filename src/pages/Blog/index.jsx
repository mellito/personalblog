import React from "react";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import "./blog.scss";
const Blog = () => {
  const { blogsArray } = useSelector((state) => state.blogs);
  const { id } = useParams();
  const filterblog = blogsArray.filter((blog) => blog.id === parseInt(id));
  console.log(filterblog);
  return (
    <main>
      <Header />
      {filterblog.length > 0 && (
        <div className="container">
          <div className="container__informaiton">
            <img
              src={filterblog[0].image}
              alt=""
              className="pixel-box--primary"
            />
            <h2 className="card-title">{filterblog[0].title}</h2>
            <p className="card-text kosalsay">{filterblog[0].content}</p>
          </div>
        </div>
      )}
      <Footer />
    </main>
  );
};

export default Blog;
