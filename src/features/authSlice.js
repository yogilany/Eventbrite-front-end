import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const authUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      console.log("User data = ", userData);
      const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      // console.log(data)
      if (!response.ok) throw new Error("Email or password are incorrect");
      // Return user data in addition to access token
      return { ...userData, ...data };
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
export const registerUser = createAsyncThunk(
  "auth/signup",
  async (registerData, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:8000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });
      console.log("Response = ", response);
      if (!response.ok) throw new Error("Email already exists");
      return { ...registerData, ...response };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,

    token: null,
    isLoading: false,
    isLoggedIn: false,
  },
  reducers: {
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
    },
    testReducer: (state) => {
      console.log("hello from test");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authUser.rejected, (state, action) => {
        state.user = null;
        state.token = null;
        state.isLoading = false;
      })
      .addCase(authUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload["email"];
        state.token = action.payload["token"];
      })

      .addCase(registerUser.rejected, (state, action) => {
        state.user = null;
        state.token = null;
        state.isLoading = false;
      })
      .addCase(registerUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action);
        state.user = action.payload["email"];
        state.token = action.payload["token"];
        console.log(state);
      });
  },
});

export const { logOut } = authSlice.actions;
export const selectLoading = (state) => state.auth.isLoading;
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectUserState = (state) => state.auth.user;

export default authSlice.reducer;
