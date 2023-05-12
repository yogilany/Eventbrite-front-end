import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const fetchBaseQueryAuth = (api_url) =>
  fetchBaseQuery({
    baseUrl: api_url,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.userToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  });
