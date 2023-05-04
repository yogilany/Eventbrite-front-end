import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const qs = require('qs')

export const authUser = createAsyncThunk(
  "auth/login", async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      console.log("User data = ", userData);
      const response = await axios.post(`${process.env.REACT_APP_BASE_API}/auth/login`,
        qs.stringify(userData)
        , {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }
      );
      // Return user data in addition to access token
      return { ...userData, token: response?.data['access_token'] };
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.response?.data?.detail);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/signup",
  async (registerData, thunkAPI) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_API}/auth/signup`,
        JSON.stringify(registerData)
        , {
          headers: { 'Content-Type': 'application/json' }
        }
      );
      return { ...registerData, ...response };
    } catch (error) {
      console.log(error.message)
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const checkEmailExists = createAsyncThunk(
  "auth/check-email-exists",
  async (email, thunkAPI) => {
    try {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASE_API}/users/emails/check`,
        params: { "email": email },
        headers: { 'Content-Type': 'application/json' }
      }
      );
      console.log(checkEmailExists.name, " Response = ", response);
      if (response.status !== 200)
        throw new Error(response?.data);
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(false);
    }
  }
);


export const forgotPassword = createAsyncThunk(
  "auth/forgot-password",
  async (email, thunkAPI) => {
    try {
      const response = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_BASE_API}/auth/forgot-password`,
        params: { "email": email },
        headers: { 'Content-Type': 'application/json' }
      }
      );
      console.log(checkEmailExists.name, " Response = ", response);
      if (response.status !== 200)
        throw new Error(response?.data);
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(false);
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

/**
 * Description placeholder
 * @date 4/18/2023 - 4:44:32 AM
 * @author h4z3m
 *
 * @param {*} state
 * @returns {*}
 */
export const selectLoading = (state) => state.auth.isLoading;
/**
 * Description placeholder
 * @date 4/18/2023 - 4:44:32 AM
 * @author h4z3m
 *
 * @param {*} state
 * @returns {*}
 */
export const selectCurrentUser = (state) => state.auth.user;
/**
 * Description placeholder
 * @date 4/18/2023 - 4:44:32 AM
 * @author h4z3m
 *
 * @param {*} state
 * @returns {*}
 */
export const selectCurrentToken = (state) => state.auth.token;
/**
 * Description placeholder
 * @date 4/18/2023 - 4:44:32 AM
 * @author h4z3m
 *
 * @param {*} state
 * @returns {*}
 */
export const selectUserState = (state) => state.auth.user;

export default authSlice.reducer;
