// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// /**
//  * @description Publish an event given its data
//  * @date 4/18/2023 - 4:45:43 AM
//  * @author h4z3m
//  * @return {EventData} If successful, API responds with the event data stored
//  * @return {string} If unsuccessful, API responds with an error message
//  * @type {*}
//  */
// export const publishEvent = createAsyncThunk(
//   "events/create",
//   async (eventData, thunkAPI) => {
//     const { rejectWithValue, getState } = thunkAPI;
//     try {
//       eventData.date_and_time.start_date_time = new Date(
//         eventData.date_and_time.start_date_time
//       )
//         .toISOString()
//         .slice(0, -5);
//       eventData.date_and_time.end_date_time = new Date(
//         eventData.date_and_time.end_date_time
//       )
//         .toISOString()
//         .slice(0, -5);
//       console.log("eventData: ", eventData);
//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_API}/events/create`,
//         JSON.stringify(eventData),
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${getState().auth.userToken}`,
//           },
//         }
//       );

//       return response;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error?.response?.data?.detail);
//     }
//   }
// );

// /**
//  * @description Get an event's info given its ID
//  * @date 5/11/2023 - 10:14:53 PM
//  * @author h4z3m
//  * @return {EventData} If successful, API responds with the event data stored
//  * @return {string} If unsuccessful, API responds with an error message
//  * @type {*}
//  */
// export const getEvent = createAsyncThunk(
//   "events/get",
//   async (eventId, thunkAPI) => {
//     try {
//       const response = axios.get(
//         `${process.env.REACT_APP_BASE_API}/events/id/${eventId}`
//       );
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       return thunkAPI.rejectWithValue(error?.response?.data?.detail);
//     }
//   }
// );

// /**
//  * @date 4/18/2023 - 4:45:43 AM
//  * @author h4z3m
//  *
//  * @type {*}
//  */
// export const eventSlice = createSlice({
//   name: "events",
//   initialState: {
//     //Event states
//     eventName: null,
//     eventDescription: "",
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(publishEvent.rejected, (state, action) => {})
//       .addCase(publishEvent.pending, (state, action) => {})
//       .addCase(publishEvent.fulfilled, (state, action) => {});
//   },
// });

// export default eventSlice.reducer;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

const BASE_API = process.env.REACT_APP_BASE_API;

export const eventsApi = createApi({
  reducerPath: "events",
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
  endpoints: (builder) => ({
    createEvent: builder.mutation({
      query: (eventData, { getState }) => ({
        url: "/events/create",
        method: "POST",
        body: eventData,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.userToken}`,
        },
      }),
    }),
    getEventById: builder.query({
      query: (eventId) => ({
        url: `/events/id/${eventId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateEventMutation, useGetEventByIdQuery } = eventsApi;

// export const eventSlice = createSlice({
//   name: "events",
//   initialState: {
//     //Event states
//     eventName: null,
//     eventDescription: "",
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addMatcher(
//         (action) =>
//           action.type.endsWith("/create/fulfilled") ||
//           action.type.endsWith("/getById/fulfilled"),
//         (state, action) => {
//           // handle successful response
//         }
//       )
//       .addMatcher(
//         (action) =>
//           action.type.endsWith("/create/rejected") ||
//           action.type.endsWith("/getById/rejected"),
//         (state, action) => {
//           // handle error response
//         }
//       );
//   },
// });

// export default eventSlice.reducer;
