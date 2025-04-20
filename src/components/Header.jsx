import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../images/argentBankLogo.webp";
import { logout } from "../redux/userSlice";
import houseIcon from "../images/house.svg";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isSignInPage = location.pathname === "/sign-in";
  const isSignIn = !!useSelector((state) => state.user.token);
  const { userName } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/");
  };

  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="ArgentBank logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>

        {isSignIn ? (
          <div>
            <Link to="/user" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {userName}
            </Link>
            <button className="main-nav-item" onClick={signOut}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </button>
          </div>
        ) : isSignInPage ? (
          // ✅ On affiche "Home" (icône maison) seulement si on est sur /sign-in
          <Link to="/" className="main-nav-item house">
            <img src={houseIcon} alt="Home" />
            Home
          </Link>
        ) : (
          <Link to="/sign-in" className="main-nav-item">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
