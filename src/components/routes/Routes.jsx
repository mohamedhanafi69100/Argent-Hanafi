import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import Home from "../../pages/Home";
import SignIn from "../../pages/SignIn";
import User from "../../pages/User";
import { getUser } from "../../redux/actions";

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token");
    if (tokenFromStorage) {
      getUser(tokenFromStorage, true, navigate, dispatch);
    }
  }, [dispatch, navigate]);

  return (
    <main className={isHomePage ? "main" : "main bg-dark"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={token ? <User /> : <Navigate to="/" />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
};

const MainContent = () => {
  return (
    <div className="wrapper">
      <Header />
      <Navigation />
      <Footer />
    </div>
  );
};

export default MainContent;
