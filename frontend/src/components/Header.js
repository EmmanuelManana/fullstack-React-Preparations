import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__right">
        <h2>Mails</h2>
      </div>

      <div className="header__left">
        <li>
          <p>
            <a href="/auth/login">Sign in with Google Auth</a>
          </p>
        </li>
      </div>
    </div>
  );
};

export default Header;
