import { createSlice } from "@reduxjs/toolkit";

// État initial
const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  userName: "",
  token: null,
};

// Création du slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
      state.token = action.payload.token;
    },
    logout: () => {
      return initialState; // On réinitialise tout
    },
    editName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

// Export des actions
export const { login, logout, editName } = userSlice.actions;

// Export du reducer
export default userSlice.reducer;
