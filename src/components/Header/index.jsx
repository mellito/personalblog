import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { HOME_ROUTE } from '../Constans/Routes';
import Logogithub from '../../assets/img/githubpixel.png';
import Logolinkedin from '../../assets/img/linkedin_pixel_logo_icon_181925.png';

const index = () => (
  <header>
    <section className="header-icons-container">
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/dayan-alexis-manrique-bonilla-5a1b97218/"
          target="_black"
        >
          <img src={Logolinkedin} alt="linkedin logo" />
        </a>
        <a href="https://github.com/mellito" target="_black">
          <img src={Logogithub} alt="github logo" />
        </a>
      </div>
    </section>
    <nav>
      <section className="nav-logo-container">
        <Link to={HOME_ROUTE}>MY blog</Link>
      </section>
      <section className="profile-link">
        <a href="./perfil.html">About me</a>
      </section>
    </nav>
  </header>
);

export default index;
