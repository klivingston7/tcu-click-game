import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h1><img className="headerImg" src="/static/media/10.074e291d.png" alt=""/> Memory Game!</h1>
        <h2>
          Click on an image to earn points, but don't click on any more than once!
        </h2>
      </div>
    </div>
  );
};
export default Header;