import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
const BASE_API = process.env.REACT_APP_BASE_API;

const ticketApi = createApi({
  reducerPath: "ticketApi",
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
    addOrder: builder.mutation({
      query: (eventId, finalOrder) => ({
        url: `/orders/${eventId}/add_order`,
        method: "POST",
        body: finalOrder,
      }),
    }),
    getTickets: builder.query({
      query: (event) => `/tickets/event_id/${event.id}`,
    }),
  }),
});

export const { useAddOrderMutation, useGetTicketsQuery } = ticketApi;
