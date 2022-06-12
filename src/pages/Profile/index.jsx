import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import quoteData from "../../assets/quoutes.json";
import Header from "../../components/Header";
import projectData from "../../assets/project.json";
import PostContainer from "../../components/PostCointainer";
import "./profile.scss";
const Profile = () => {
  let randomQuote = Math.floor(Math.random() * quoteData.length + 1);
  const [idQuote, setIdQuote] = useState(null);

  useEffect(() => {
    const interval = setTimeout(() => {
      setIdQuote(randomQuote);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="profile-container">
      <Header />
      <div className="top-information">
        <article>
          <img
            className="pixel-box--primary kosalsay"
            src="https://avatars.githubusercontent.com/u/76668472?v=4"
            alt="profile"
          />
          <div className="about-container__grid">
            <h2>who i am</h2>
            <p className="kosalsay about-container-p">
              A great team player and proactive Full Stack Web Developer with
              demonstrated ability to create a fast web with the best
              techniques. Skilled on tools on both sides: front-end with React,
              Redux, Vanilla, JavaScript, and back-end with Node, Express,
              Firebase, MongoDB, and SCRUM methodology as well. My previous
              experience in the sales industry has helped me to improve my
              customer service skills and to work under pressure as well. As a
              team lead, I improved my team management and people skills.
            </p>
          </div>
        </article>
      </div>
      <section className="blogs-post-container">
        <h2>Proyects</h2>
        <div className="blogs-post-container__grid">
          {projectData.map((data) => {
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

      <Footer quote={quoteData[idQuote]} />
    </div>
  );
};

export default Profile;
