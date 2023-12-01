import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "..";
import { Platform } from "react-native";

const baseQuery = fetchBaseQuery({
  baseUrl:
    Platform.OS === "android"
      ? "http://192.168.1.26:8080/api/v1"
      : "http://192.168.1.26:8080/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Deck", "Card"],
  endpoints: (builder) => ({}),
});
