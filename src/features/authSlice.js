import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const authUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      console.log("User data = ", userData);
      const response = await axios(
        `${process.env.REACT_APP_BASE_API}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

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
      const response = await axios(
        `${process.env.REACT_APP_BASE_API}/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerData),
        }
      );
      console.log("Response = ", response);
      if (!response.ok) throw new Error("Email already exists");
      return { ...registerData, ...response };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const checkEmailExists = createAsyncThunk(
  "auth/signup",
  async (email, thunkAPI) => {
    try {
      console.log(`${process.env.REACT_APP_BASE_API}/auth/check-email`)
      const response = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_BASE_API}/auth/check-email`,
        params: { "email": email },
        headers: { 'Content-Type': 'application/json' }
      }
      );
      console.log(checkEmailExists.name, " Response = ", response);
      return response.data
    } catch (error) {
      console.log('errrr')
      return thunkAPI.rejectWithValue(true);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    firstName: "",
    lastName: "",
    avatarURL: "",
    token: null,
    isLoading: false,
    isLoggedIn: false,
    emailExists: false,
  },
  reducers: {
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
    },
    testReducer: (state) => {
      // console.log("hello from test");
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
        state.firstName = action.payload["firstName"];
        state.lastName = action.payload["lastName"];
        state.avatarURL = action.payload["avatarURL"];
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
        state.emailExists = (action.payload['exists'] ? true : false);
      })

    // .addCase(checkEmailExists.rejected, (state, action) => {
    //   state.user = null;
    //   state.token = null;
    //   state.isLoading = false;
    // })
    // .addCase(checkEmailExists.pending, (state, action) => {
    //   state.isLoading = true;
    // })
    // .addCase(checkEmailExists.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.emailExists = (action.payload['exists'] ? true : false);
    // });
  },
});

export const { logOut } = authSlice.actions;

export const selectLoading = (state) => state.auth.isLoading;
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectUserState = (state) => state.auth.user;

export default authSlice.reducer;
