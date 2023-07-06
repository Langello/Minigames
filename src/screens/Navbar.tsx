import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img
            alt="icon"
            src="https://icongr.am/entypo/home.svg?size=128&color=ffffff"
          />
        </Link>
        <h1 className="navbar-title">Minigames</h1>
      </div>
    </nav>
  );
};

export default Navbar;

