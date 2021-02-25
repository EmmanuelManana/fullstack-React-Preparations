import React, { useEffect } from "react";
import "../styles/Header.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = (props) => {
  useEffect(() => {
    console.log("header props:", props);
  }, [props]);

  const loggedInStatus = () => {
    switch (props.auth) {
      case null:
        return (
          <ul>
            <li>
              <a href="/auth/login">Sign in with Google</a>
            </li>
          </ul>
        );
      case false:
        return (
          <ul>
            <li>
              <a href="/auth/login">Sign in with Google</a>
            </li>
          </ul>
        );
      default:
        return (
          <ul>
            <li>
              <a href="/auth/api/logout">logout</a>
            </li>
          </ul>
        );
    }
  };

  return (
    <div className="header">
      <div className="header__right">
        <Link 
        to={props.auth ? '/dashboard' : '/'}
        className="header__links"
        >
          <h2>Mails</h2>
        </Link>
      </div>

      <div className="header__left">{loggedInStatus()}</div>
    </div>
  );
};

const mapStateToprops = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToprops)(Header);
