import React from 'react';

function Footer() {
  return (
    <footer className="footer text-center">
      <p className="footer">Kitt Livingston</p>
      <p className="footer">|</p>
      <img
        className="footer"
        src={require('../images/react.svg')}
        alt="react"
      />
    </footer>
  );
}

export default Footer;