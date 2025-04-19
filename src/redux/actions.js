import { login } from "./userSlice";

// Fonction de connexion utilisateur
export const loginUser = ({ email, password }, navigate, dispatch) => {
  const body = { email, password };

  fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Erreur lors de la connexion : " + res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      const token = data.body.token;
      if (!token) {
        throw new Error("Token manquant dans la réponse");
      }

      getUser(token, navigate, dispatch); // On récupère le profil
    })
    .catch((error) => {
      console.error("Erreur de connexion :", error);
      alert("Erreur : " + error.message);
    });
};

// Fonction pour récupérer le profil utilisateur
export const getUser = (token, navigate, dispatch) => {
  fetch("http://localhost:3001/api/v1/user/profile", {
    method: "GET", // ✅ C’est GET ici chez toi !
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Erreur lors de la récupération du profil");
      }
      return res.json();
    })
    .then((data) => {
      const userData = {
        email: data.body.email,
        firstName: data.body.firstName,
        lastName: data.body.lastName,
        userName: data.body.userName,
        token: token,
      };

      dispatch(login(userData));
      navigate("/user");
    })
    .catch((error) => {
      console.error("Erreur récupération profil :", error);
      alert("Erreur : " + error.message);
    });
};
