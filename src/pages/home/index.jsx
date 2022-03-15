import React, { useEffect, Fragment } from 'react';
import './home.scss';

// eslint-disable-next-line react/prop-types
function Home({ greeting }) {
  // eslint-disable-next-line react/prop-types
  const splitGretting = greeting.split('');

  const showLetter = (array) => {
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      setTimeout(() => {
        element.classList.add('fade');
      }, index * 50);
    }
  };

  useEffect(() => {
    const span = document.getElementsByTagName('span');
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
            // eslint-disable-next-line react/no-array-index-key
            <Fragment key={index}>
              {value === ' ' && <i>{value}</i>}
              <span>{value}</span>
            </Fragment>
          ))}
        </div>

        <a href="./blogs.html">START</a>
      </section>
    </main>
  );
}

export default Home;
