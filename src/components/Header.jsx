import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/argentBankLogo.webp";
import houseIcon from "../images/house.svg";

// import houseIcon from "../../assets/house.svg";

const Header = () => {
  const location = useLocation();
  const isSignInPage = location.pathname === "/";

  const isSignIn = false; // faux login temporaire
  const userName = "user";

  return (
    <header className="header">
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="argentbank logo"
          />
          <h1 className="sr-only">argentbank</h1>
        </Link>

        {isSignIn ? (
          <div>
            <Link to="/user" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {userName}
            </Link>
            <button className="main-nav-item">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </button>
          </div>
        ) : isSignInPage ? (
          <Link to="/sign-in" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        ) : (
          <Link to="/" className="main-nav-item house">
            <img src={houseIcon} alt="home" />
            Home
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
