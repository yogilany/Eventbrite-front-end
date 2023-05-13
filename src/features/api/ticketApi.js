import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
const BASE_API = process.env.REACT_APP_BASE_API;

export const ticketApi = createApi({
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
  tagTypes: ["Tickets"],
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
      providesTags: ["Tickets"],
    }),
    updateTicket: builder.mutation({
      query: (ticketData) => ({
        url: `/tickets/ticket_id/${ticketData.id}`,
        method: "PUT",
        body: ticketData,
      }),
      invalidatesTags: ["Tickets"],
    }),
    deleteTicket: builder.mutation({
      query: (ticketId) => ({
        url: `/tickets/ticket_id/${ticketId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tickets"],
    }),
    updateTicketQuantity: builder.mutation({
      query: (ticketId, quantity) => ({
        url: `/tickets/ticket_id/${ticketId}/quantity/${quantity}`,
        method: "PUT",
      }),
      invalidatesTags: ["Tickets"],
    }),
    addTicket: builder.mutation({
      query: (ticketData, eventId) => ({
        url: `/tickets/event_id/${eventId}`,
        method: "POST",
        data: ticketData,
      }),
      invalidatesTags: ["Tickets"],
    }),
  }),
});

export const {
  useAddOrderMutation,
  useGetTicketsQuery,
  useUpdateTicketMutation,
  useDeleteTicketMutation,
  useUpdateTicketQuantityMutation,
  useAddTicketMutation,
} = ticketApi;
