import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <p className="footer">Kitt Livingston</p>
      <p className="footer">|</p>
      <img
        className="footer"
        src={require('../images/react.svg')}
        alt="react"
      />
    </div>
  );
}

export default Footer;