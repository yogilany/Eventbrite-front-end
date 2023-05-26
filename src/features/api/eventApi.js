

// export default eventSlice.reducer;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

const BASE_API = process.env.REACT_APP_BASE_API;

export const eventsApi = createApi({
  reducerPath: "events",
  baseQuery: axiosBaseQuery({ baseUrl: BASE_API }),
  endpoints: (builder) => ({
    createEvent: builder.mutation({
      query: (eventData) => ({
        url: "/events/create",
        method: "POST",
        data: eventData,
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



