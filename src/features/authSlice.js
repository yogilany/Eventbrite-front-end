import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/**
 * @description Query string for sending to backend x-www-form-urlencoded
 * @date 5/4/2023 - 7:28:44 PM
 * @author h4z3m
 *
 * @type {*}
 */
const qs = require("qs");

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
  userToken: null,
  userID: "",
  isLoading: false,
  emailExists: false,
  isLoggedIn: false,
};

/**
 * @description Login user
 * @date 5/4/2023 - 7:30:59 PM
 * @author h4z3m
 *
 * @type {*}
 */
export const authUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_API}/auth/login`,
        qs.stringify(userData),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      if (response.data?.access_token !== null) {
        return response.data;
      } else {
        throw rejectWithValue(response.data.detail);
      }
    } catch (error) {
      switch (error.response.status) {
        case 400:
          return thunkAPI.rejectWithValue("Invalid email.");
        case 401:
          return thunkAPI.rejectWithValue(
            "Wrong password or email is not verified."
          );
        case 404:
          return thunkAPI.rejectWithValue("Email not found.");
        case 422:
          return thunkAPI.rejectWithValue("Validation error.");
        default:
          return thunkAPI.rejectWithValue("Unknown error.");
      }
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
      console.log(registerData);
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_API}/auth/signup`,
        JSON.stringify(registerData),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Register user response : ", response);
      return { ...registerData, ...response };
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/**
 * @description Login Google/FB user
 * @date 5/11/2023 - 9:36:34 PM
 * @author h4z3m
 *
 * @type {*}
 */
export const authGoogleUser = createAsyncThunk(
  "auth/login-with-google",
  async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const x_www_form_data = {
        username: userData.email,
        password: "aaaaaaaaaaaaa",
      };
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_API}/auth/login-with-google`,
        qs.stringify(x_www_form_data),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );
      console.log("Auth google user response : ", response);

      if (response.data?.access_token !== null) {
        return response.data;
      } else {
        throw rejectWithValue(response.data.detail);
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.response?.data?.detail);
    }
  }
);

/**
 * @description Register Google/FB user
 * @date 5/11/2023 - 9:36:10 PM
 * @author h4z3m
 *
 * @type {*}
 */
export const registerGoogleUser = createAsyncThunk(
  "auth/signup-google",
  async (registerData, thunkAPI) => {
    try {
      console.log("Register data = ", registerData);
      // Register user data
      const response = await thunkAPI.dispatch(registerUser(registerData));

      console.log("Register response", response);

      // // Login with google to obtain access token
      // const login_response = await thunkAPI.dispatch(
      //   authGoogleUser({
      //     email: registerData.email,
      //     password: registerData.password,
      //   })
      // );

      // console.log("Login with google response: ", login_response);

      // // Edit user data to save avatar URL
      // const edit_response = await axios({
      //   method: "PUT",
      //   url: `${process.env.REACT_APP_BASE_API}/users/me/edit`,
      //   headers: {
      //     ContentType: "application/json",
      //     Authorization: `Bearer ${login_response.payload.access_token}`,
      //   },
      //   params: {
      //     firstname: registerData.firstname,
      //     lastname: registerData.lastname,
      //     avatar_url: registerData.picture,
      //   },
      // });

      // console.log("Edit with google response: ", edit_response);

      return { ...registerData, ...response };
    } catch (error) {
      console.log(error.message);
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
        params: { email: email },
        headers: { "Content-Type": "application/json" },
      });
      console.log(checkEmailExists.name, " Response = ", response);
      // if (response.status !== 200) throw new Error(response?.data);
      return response.data;
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
        params: { email: email },
        headers: { "Content-Type": "application/json" },
      });
      console.log(checkEmailExists.name, " Response = ", response);
      if (response.status !== 200) throw new Error(response?.data);
      return response.data;
    } catch (error) {
      console.log(error);
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
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(" Verify response = ", response);
      return "Verified successfully";
    } catch (error) {
      console.log("Error = ", error);
      switch (error.response.status) {
        case 401:
          return thunkAPI.rejectWithValue("Invalid or expired token");
        case 422:
          return thunkAPI.rejectWithValue("Validation error");
        case 404:
          return thunkAPI.rejectWithValue("Email not found");
        case 500:
          return thunkAPI.rejectWithValue("Can't verify email");
        default:
          return thunkAPI.rejectWithValue("Unknown error");
      }
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
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_API}/users/me/info`,
        {
          headers: {
            ContentType: "application/json",
            Authorization: `Bearer ${thunkAPI.getState().auth.userToken}`,
          },
        }
      );
      console.log(getUserDetails.name, " Response = ", response);
      if (response.status !== 200) throw new Error(response?.data);
      return response.data;
    } catch (error) {
      // Unauthenticated
      console.log("Error: token = ", thunkAPI.getState().auth.userToken);
      thunkAPI.dispatch(logOut()); // Log out user
      return thunkAPI.rejectWithValue(error);
    }
  }
);

/**
 * @description Change password for the user
 * @date 5/8/2023 - 7:57:17 PM
 * @author h4z3m
 *
 * @type {*}
 */
export const changePassword = createAsyncThunk(
  "auth/change-password",
  async (data, thunkAPI) => {
    try {
      const response = await axios({
        method: "PUT",
        url: `${process.env.REACT_APP_BASE_API}/auth/change-password`,
        headers: {
          ContentType: "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        data: data,
      });
      console.log("Change Password Response = ", response);
      return response.data;
    } catch (error) {
      console.log("Error = ", error);
      switch (error.response.status) {
        case 401:
          return thunkAPI.rejectWithValue("Invalid token");
        case 422:
          return thunkAPI.rejectWithValue("Validation error");
        default:
          return thunkAPI.rejectWithValue("Unknown error");
      }
    }
  }
);

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
      localStorage.removeItem("persist:root");
      localStorage.removeItem("userToken");
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      // Authenticate user
      .addCase(authUser.rejected, (state, action) => {
        // state = initialState;
        state.isLoading = false;
      })
      .addCase(authUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("action.payload = ", action.payload);
        state.userToken = action.payload.access_token;
        console.log("state.userToken = ", state.userToken);
        state.isLoggedIn = true;
      })
      // Authenticate Google user
      .addCase(authGoogleUser.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(authGoogleUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(authGoogleUser.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("action.payload = ", action.payload);
        state.userToken = action.payload.access_token;
        console.log("state.userToken = ", state.userToken);
        state.isLoggedIn = true;
      })
      // Register user
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(registerUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.emailExists = action.payload["exists"] ? true : false;
      })
      // Register Google user
      .addCase(registerGoogleUser.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(registerGoogleUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerGoogleUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.emailExists = action.payload["exists"] ? true : false;
      })
      // Get user details
      .addCase(getUserDetails.rejected, (state, action) => {
        console.log("rejected action.payload = ", action.payload);
        state = initialState;
        state.isLoading = false;
      })
      .addCase(getUserDetails.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        console.log("fulfilled action.payload = ", action.payload);
        state.isLoading = false;
        state.userEmail = action.payload.email;
        state.userFirstName = action.payload.firstname;
        state.userLastName = action.payload.lastname;
        state.userAvatarURL = action.payload.avatar_url;
        state.userID = action.payload.id;
      })
      // Verify user
      .addCase(verifyUser.rejected, (state, action) => {
        console.log("rejected action.payload = ", action.payload);
        state.isLoading = false;
      })
      .addCase(verifyUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(verifyUser.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      // Change password
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(changePassword.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { logOut } = authSlice.actions;

export const selectLoading = (state) => state.auth.isLoading;
export const selectUserToken = (state) => state.auth.userToken;
export const selectUserEmail = (state) => state.auth.userEmail;
export const selectUserFirstName = (state) => state.auth.userFirstName;
export const selectUserLastName = (state) => state.auth.userLastName;
export const selectUserAvatarURL = (state) => state.auth.userAvatarURL;
export const selectLoggedIn = (state) => state.auth.isLoggedIn;
export default authSlice.reducer;
