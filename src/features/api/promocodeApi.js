import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
const BASE_API = process.env.REACT_APP_BASE_API;

export const promocodeApi = createApi({
  reducerPath: "promocodeApi",
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
  tagTypes: ["Promocodes"],
  endpoints: (builder) => ({
    addPromocodes: builder.mutation({
      query: (promocodesData, eventId) => ({
        url: `/promocodes/event_id/${eventId}`,
        method: "POST",
        body: [promocodesData],
      }),
      invalidatesTags: ["Promocodes"],
    }),
    getPromocodes: builder.query({
      query: (eventId) => `/promocodes/event_id/${eventId}`,
      providesTags: ["Promocodes"],
    }),
    deletePromocode: builder.mutation({
      query: (promocodeId) => ({
        url: `/promocodes/promocode_id/${promocodeId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Promocodes"],
    }),
    updatePromocode: builder.mutation({
      query: (promocodeData) => ({
        url: `/promocodes/promocode_id/${promocodeData.id}`,
        method: "PUT",
        body: promocodeData,
      }),
      invalidatesTags: ["Promocodes"],
    }),
    updatePromocodeQuantity: builder.mutation({
      query: (promocodeId, quantity) => ({
        url: `/promocodes/promocode_id/${promocodeId}/quantity/${quantity}`,
        method: "PUT",
      }),
      invalidatesTags: ["Promocodes"],
    }),
  }),
});

export const {
  useAddPromocodesMutation,
  useGetPromocodesQuery,
  useDeletePromocodeMutation,
  useUpdatePromocodeMutation,
  useUpdatePromocodeQuantityMutation,
} = promocodeApi;
