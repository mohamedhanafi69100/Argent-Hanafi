import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Home from "../../pages/Home";
import SignIn from "../../pages/SignIn";
import User from "../../pages/User"; // ✅ correct, car User.jsx est dans "pages"

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <main className={isHomePage ? "main" : "main bg-dark"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<User />} />
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
