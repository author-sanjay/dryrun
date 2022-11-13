import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.user = action.payload;
    },
    setUserLogout: (state, action) => {
      state.user=null;
    },
  },
});

export const { setActiveUser, setUserLogout } = authSlice.actions;


export default authSlice.reducer;
