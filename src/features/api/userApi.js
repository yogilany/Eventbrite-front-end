// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// /**
//  * @description Get all liked events by a user
//  * @date 5/11/2023 - 10:12:40 PM
//  * @author Ziad Ezzat
//  *
//  * @async
//  * @param {*} token
//  * @returns {unknown}
//  */

// export const fetchLikedEvents = createAsyncThunk(
//   "users/me/event/liked",
//   async (_, { rejectWithValue, getState }) => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_API}/users/me/event/liked`,
//         {
//           headers: {
//             ContentType: "application/json",
//             Authorization: `Bearer ${getState().auth.userToken}`,
//           },
//         }
//       );
//       console.log("Response size:", response.data.length);
//       if (response.status !== 200) throw new Error(response?.data);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error?.response?.data?.detail);
//     }
//   }
// );

// /**
//  * @description Likes an event by a user
//  * @date 5/11/2023 - 10:11:01 PM
//  * @author Ziad Ezzat
//  * @async
//  * @param {string} token - The user's access token.
//  * @param {string} eventid - The ID of the event to unlike.
//  * @returns {Promise} A promise that resolves with the server response data if successful, or rejects with an error.
//  */

// export const likeEvent = createAsyncThunk(
//   "users/me/event/{eventId}/like",
//   async ({ eventId }, { rejectWithValue, getState }) => {
//     try {
//       const response = await axios({
//         method: "POST",
//         url: `${process.env.REACT_APP_BASE_API}/users/me/event/${eventId}/like`,
//         params: { event_id: eventId },
//         headers: {
//           ContentType: "application/json",
//           Authorization: `Bearer ${getState().auth.userToken}`,
//         },
//       });

//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// /**
//  * @description Unlikes an event by a user
//  * @date 5/11/2023 - 10:11:01 PM
//  * @author Ziad Ezzat
//  * @async
//  * @param {string} token - The user's access token.
//  * @param {string} eventId - The ID of the event to unlike.
//  * @returns {Promise} A promise that resolves with the server response data if successful, or rejects with an error.
//  */

// export const unlikeEvent = createAsyncThunk(
//   "users/me/event/{eventId}/unlike",
//   async ({ eventId }, { getState, rejectWithValue }) => {
//     try {
//       const response = await axios({
//         method: "DELETE",
//         url: `${process.env.REACT_APP_BASE_API}/users/me/event/${eventId}/unlike`,
//         params: { event_id: eventId },
//         headers: {
//           ContentType: "application/json",
//           Authorization: `Bearer ${getState().auth.userToken}`,
//         },
//       });

//       console.log("Event unliked:", response.data);
//       return response.data;
//     } catch (error) {
//       console.error("Error unliking event:", error);
//       return rejectWithValue(error);
//     }
//   }
// );

// /**
//  * @description Get following users
//  * @date 5/11/2023 - 10:10:06 PM
//  * @author Ziad Ezzat
//  *
//  * @async
//  * @param {*} token
//  * @returns {unknown}
//  */

// export const getFollowingUsers = createAsyncThunk(
//   "users/me/user/following",
//   async (_, { rejectWithValue, getState }) => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_API}/users/me/user/following`,
//         {
//           headers: {
//             ContentType: "application/json",
//             Authorization: `Bearer ${getState().auth.userToken}`,
//           },
//         }
//       );
//       console.log("Response size :", response.data.length);
//       if (response.status !== 200) throw new Error(response?.data);
//       return response.data;
//     } catch (error) {
//       return error;
//     }
//   }
// );

// /**
//  * @description Follow an event
//  * @date 5/11/2023 - 10:09:23 PM
//  * @author Ziad Ezzat
//  *
//  * @async
//  * @param {*} token
//  * @param {*} eventId
//  * @returns {*}
//  */

// export const followEvent = createAsyncThunk(
//   "users/me/user/{eventId}/follow",
//   async ({ eventId }, { rejectWithValue, getState }) => {
//     try {
//       const response = await axios({
//         method: "POST",
//         url: `${process.env.REACT_APP_BASE_API}/users/me/user/${eventId}/follow`,
//         params: { user_id: eventId },
//         headers: {
//           ContentType: "application/json",
//           Authorization: `Bearer ${getState().auth.userToken}`,
//         },
//       });

//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// /**
//  * @description Unfollow an event
//  * @date 5/11/2023 - 10:08:35 PM
//  * @author Ziad Ezzat
//  *
//  * @async
//  * @param {*} token
//  * @param {*} eventid
//  * @returns {*}
//  */

// export const unfollowEvent = createAsyncThunk(
//   "users/me/user/{eventId}/unfollow",
//   async (eventId, { getState, rejectWithValue }) => {
//     try {
//       const response = await axios({
//         method: "DELETE",
//         url: `${process.env.REACT_APP_BASE_API}/users/me/user/${eventId}/unfollow`,
//         params: { user_id: eventId },
//         headers: {
//           ContentType: "application/json",
//           Authorization: `Bearer ${getState().auth.userToken}`,
//         },
//       });
//       return response.data;
//     } catch (error) {
//       console.error("Error unliking event:", error);
//       return rejectWithValue(error?.response?.data?.detail);
//     }
//   }
// );

// /**
//  * @description Get a certain user's info given their ID
//  * @date 5/11/2023 - 10:08:14 PM
//  * @author h4z3m
//  *
//  * @type {*}
//  */
// export const getUser = createAsyncThunk(
//   "users/id/{user_id}/info",
//   async (userId, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_API}/users/id/${userId}/info`
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error?.response?.data?.detail);
//     }
//   }
// );

// /**
//  * @description Check if user is followed by an authenticated user
//  * @date 5/11/2023 - 10:07:57 PM
//  * @author h4z3m
//  *
//  * @type {*}
//  */
// export const isUserFollowed = createAsyncThunk(
//   "users/me/user/{user_id}/is_followed",
//   async (userId, { getState, rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_API}/users/me/user/${userId}/is_followed`,
//         {
//           headers: {
//             Authorization: `Bearer ${getState().auth.userToken}`,
//           },
//         }
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error?.response?.data?.detail);
//     }
//   }
// );

// /**
//  * @description Check if event is liked by an authenticated user
//  * @date 5/11/2023 - 10:07:36 PM
//  * @author h4z3m
//  *
//  * @type {*}
//  */
// export const isEventLiked = createAsyncThunk(
//   "users/me/event/{event_id}/is_liked",
//   async (eventId, { getState, rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_API}/users/me/event/${eventId}/is_liked`,
//         {
//           headers: {
//             Authorization: `Bearer ${getState().auth.userToken}`,
//           },
//         }
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error?.response?.data?.detail);
//     }
//   }
// );

// export const userprofSlice = createSlice({
//   initialState: {},
//   name: "user",
//   reducers: {},
//   extraReducers: (builder) => {},
// });

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_API = process.env.REACT_APP_BASE_API;

export const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.userToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Following", "Liked"],
  endpoints: (builder) => ({
    fetchLikedEvents: builder.query({
      query: () => "/users/me/event/liked",
      providesTags: ["Liked"],
    }),
    fetchLikedEventsNoValidation: builder.query({
      query: () => "/users/me/event/liked",
    }),
    likeEvent: builder.mutation({
      query: (eventId) => ({
        url: `/users/me/event/${eventId}/like`,
        method: "POST",
      }),
      invalidatesTags: ["Liked"],
    }),
    unlikeEvent: builder.mutation({
      query: (eventId) => ({
        url: `/users/me/event/${eventId}/unlike`,
        method: "DELETE",
      }),
      invalidatesTags: ["Liked"],
    }),
    getFollowingUsers: builder.query({
      query: () => "/users/me/user/following",
      providesTags: ["Following"],
    }),
    getFollowingUsersNoValidation: builder.query({
      query: () => "/users/me/user/following",
    }),
    followUser: builder.mutation({
      query: (userId) => ({
        url: `/users/me/user/${userId}/follow`,
        method: "POST",
      }),
      invalidatesTags: ["Following"],
    }),
    unfollowUser: builder.mutation({
      query: (userId) => ({
        url: `/users/me/user/${userId}/unfollow`,
        method: "DELETE",
      }),
      invalidatesTags: ["Following"],
    }),
    getUser: builder.query({
      query: (userId) => `/users/id/${userId}/info`,
    }),
    isUserFollowed: builder.query({
      query: (userId) => `/users/me/user/${userId}/is_followed`,
      providesTags: ["Following"],
    }),
    isEventLiked: builder.query({
      query: (eventId) => `/users/me/event/${eventId}/is_liked`,
      providesTags: ["Liked"],
    }),
    getorders: builder.query({
      query: () => `/orders/myorders`,
    }),
    getCreatedEvents: builder.query({
      query: () => `/users/me/created/events`,
    }),
  }),
});

export const {
  useFetchLikedEventsQuery,
  useFetchLikedEventsNoValidationQuery,
  useLikeEventMutation,
  useUnlikeEventMutation,
  useGetFollowingUsersQuery,
  useGetFollowingUsersNoValidationQuery,
  useFollowUserMutation,
  useUnfollowUserMutation,
  useGetUserQuery,
  useIsUserFollowedQuery,
  useIsEventLikedQuery,
  useGetordersQuery,
  useGetCreatedEventsQuery,
} = userApi;
