import React, {FC} from 'react';

import {Link} from 'react-router-dom';

import './TopLinks.scss';

const TopLinks: FC = () => {
  return (
    <div className="TopLinks">
      <div className="TopLinks__container">
        <Link to="/" className="TopLinks__link">
          Home
        </Link>
        <Link to="/developer/whitepaper" className="TopLinks__link">
          Living Whitepaper
        </Link>
        <Link to="/projects" className="TopLinks__link">
          Projects
        </Link>
      </div>
    </div>
  );
};

export default TopLinks;
