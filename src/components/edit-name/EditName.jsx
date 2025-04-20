import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editName } from "../../redux/userSlice";

const EditName = ({ cancel }) => {
  const [userName, setUserName] = useState(
    useSelector((state) => state.user.userName)
  );
  const { firstName } = useSelector((state) => state.user);
  const { lastName } = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = JSON.stringify({ userName });
    fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: body,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erreur lors de la connexion : " + res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        dispatch(editName(data.body.userName));
        alert("Successfully modified profile, hello " + userName + ".");
        cancel();
      });
  };

  return (
    <form className="user-edit-form" onSubmit={handleSubmit}>
      <label htmlFor="username">User name:</label>
      <input
        name="username"
        id="username"
        type="text"
        autoComplete="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <label htmlFor="firstname">First name:</label>
      <input
        autoComplete="given-name"
        name="firstname"
        id="firstname"
        type="text"
        value={firstName}
        disabled
      />
      <label htmlFor="lastname">Last name:</label>
      <input
        autoComplete="family-name"
        name="lastname"
        id="lastname"
        type="text"
        value={lastName}
        disabled
      />
      <div className="user-edit-buttons">
        <button type="submit" className="edit-button form-button">
          Save
        </button>
        <button type="button" className="edit-button" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditName;
