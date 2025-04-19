import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/actions"; // ✅ Import nommé corrigé

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const credentials = {
      email,
      password,
    };

    // ✅ Appel à la fonction loginUser
    loginUser(credentials, navigate, dispatch);
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
    </section>
  );
};

export default SignIn;
