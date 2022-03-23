import React from 'react';
import './Pacman.scss';

function Pacman() {
  return (
    <div className="final__path">
      <div className="final__pacman" />
      <div className="final__ghost">
        <div className="final__eyes" />
        <div className="final__skirt" />
      </div>
    </div>
  );
}

export default Pacman;
