import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "..";
import { Platform } from "react-native";

const baseQuery = fetchBaseQuery({
  baseUrl:
    Platform.OS === "android"
      ? process.env.EXPO_PUBLIC_BASE_URL_ANDROID
      : process.env.EXPO_PUBLIC_BASE_URL,
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
  tagTypes: ["Deck", "Card", "Search"],
  endpoints: (builder) => ({}),
});
