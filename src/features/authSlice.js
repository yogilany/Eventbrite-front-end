import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/**
 * @description Query string for sending to backend x-www-form-urlencoded
 * @date 5/4/2023 - 7:28:44 PM
 * @author h4z3m
 *
 * @type {*}
 */
const qs = require('qs')

/**
 * User token, fetched from local storage or null
 * @date 5/4/2023 - 7:28:17 PM
 * @author h4z3m
 *
 * @type {*}
 */
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null


/**
 * Authentication state object
 * @date 5/4/2023 - 7:27:51 PM
 * @author h4z3m
 *
 * @type {*}
 */
const initialState = {
  userEmail: null,
  userFirstName: "",
  userLastName: "",
  userAvatarURL: "",
  userToken,
  isLoading: false,
  emailExists: false,
}

/**
 * @description Login user
 * @date 5/4/2023 - 7:30:59 PM
 * @author h4z3m
 *
 * @type {*}
 */
export const authUser = createAsyncThunk(
  "auth/login", async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_API}/auth/login`,
        qs.stringify(userData)
        , {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }
      );

      if (response.data?.access_token !== null) {
        console.log('heeelo')
        localStorage.setItem("userToken", response.data.access_token);
        return response.data;
      }
      else {
        throw rejectWithValue(response.data.detail);
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.response?.data?.detail);
    }
  }
);

/**
 * @description Register user
 * @date 5/4/2023 - 7:30:48 PM
 * @author h4z3m
 *
 * @type {*}
 */
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

/**
 * @description Checks if email already exists, used for login & signup pages
 * @date 5/4/2023 - 7:30:28 PM
 * @author h4z3m
 *
 * @type {*}
 */
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


/**
 * @description Forgot password query, sends email to user to reset their password
 * @date 5/4/2023 - 7:29:38 PM
 * @author h4z3m
 *
 * @type {*}
 */
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

/**
 * @description Verify user email through JWT token
 * @date 5/4/2023 - 7:29:38 PM
 * @author h4z3m
 *
 * @type {*}
 */
export const verifyUser = createAsyncThunk(
  "auth/verify-email",
  async (token, thunkAPI) => {
    try {
      const response = await axios({
        method: "PUT",
        url: `${process.env.REACT_APP_BASE_API}/auth/verify-email`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      );
      if (response.status !== 200)
        throw new Error(response?.data);
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(false);
    }
  }
);


/**
 * @description Get user details using JWT token
 * @date 5/5/2023 - 1:00:16 AM
 * @author h4z3m
 *
 * @type {*}
 */
export const getUserDetails = createAsyncThunk(
  "users/me/info",
  async (aa, thunkAPI) => {
    try {
      console.log(' inside user details Token = ', localStorage.getItem('userToken'))
      const response = await axios.get(`${process.env.REACT_APP_BASE_API}/users/me/info`,
        {
          headers: {
            ContentType: 'application/json',
            Authorization: `Bearer ${thunkAPI.getState().auth.userToken}`
          }
        });
      console.log(getUserDetails.name, " Response = ", response);
      if (response.status !== 200)
        throw new Error(response?.data);
      return response.data
    } catch (error) {
      // Unauthenticated
      console.log('Errorrrr: token = ', thunkAPI.getState().auth.userToken)
      return thunkAPI.rejectWithValue(error);
    }
  }
)


/**
 * @description Authenticate user via JWT
 * @date 5/4/2023 - 7:31:18 PM
 * @author h4z3m
 *
 * @type {*}
 */
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state, action) => {
      localStorage.removeItem('persist:root');
      localStorage.removeItem('userToken');
      state = initialState;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(authUser.rejected, (state, action) => {
        state.userEmail = null;
        state.userToken = null;
        state.isLoading = false;
      })
      .addCase(authUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log('action.payload = ', action.payload);
        state.userToken = action.payload.access_token;
        console.log('state.userToken = ', state.userToken);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.userEmail = null;
        state.userToken = null;
        state.isLoading = false;
      })
      .addCase(registerUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.emailExists = (action.payload['exists'] ? true : false);
      }).addCase(getUserDetails.rejected, (state, action) => {
        console.log('rejected action.payload = ', action.payload);
        state.isLoading = false;
        state.userToken = null;
        state.userEmail = null;
        state.userFirstName = "";
        state.userLastName = "";
        state.userAvatarURL = "";
        localStorage.setItem("userToken", null);
      })
      .addCase(getUserDetails.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        console.log('fulfilled action.payload = ', action.payload);

        state.isLoading = false;
        state.userEmail = action.payload.email
        state.userFirstName = action.payload.firstname
        state.userLastName = action.payload.lastname
        state.userAvatarURL = action.payload.avatar_url
      })
  },
});

export const { logOut } = authSlice.actions;

export const selectLoading = (state) => state.auth.isLoading;
export const selectUserToken = (state) => state.auth.userToken;
export const selectUserEmail = (state) => state.auth.userEmail;
export const selectUserFirstName = (state) => state.auth.userFirstName;
export const selectUserLastName = (state) => state.auth.userLastName;
export const selectUserAvatarURL = (state) => state.auth.userAvatarURL;
export default authSlice.reducer;
