import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import PropTypes from "prop-types";
import { PROFILE_ROUTER } from "../../components/Constans/Routes";

function Home({ greeting }) {
  const splitGretting = greeting.split("");

  const showLetter = (array) => {
    for (let index = 0; index < array.length; index += 1) {
      const element = array[index];
      setTimeout(() => {
        element.classList.add("fade");
      }, index * 50);
    }
  };

  useEffect(() => {
    const span = document.getElementsByTagName("span");
    showLetter(span);
  }, []);

  return (
    <main className="home-main">
      <section className="welcome-info">
        <div className="Character">
          <img
            className="Character_spritesheet pixelart face-down"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacter.png"
            alt="Character"
          />
        </div>
        <div className="welcome-info__title">
          {splitGretting.map((value, index) => (
            <Fragment key={index}>
              <span>{value}</span>
              {value === " " && <i></i>}
            </Fragment>
          ))}
        </div>
        <Link to={PROFILE_ROUTER}>START</Link>
      </section>
    </main>
  );
}
Home.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default Home;
