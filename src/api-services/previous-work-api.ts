import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../constants";
import { secondsToMilliSeconds } from "../utils";

const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  timeout: secondsToMilliSeconds(30),
});

export const previousWorkApi = createApi({
  reducerPath: "previousWorks",
  baseQuery,
  endpoints: (build) => ({
    getPreviousWorksPhotos: build.query({
      query: () => ({
        url: "/photos",
      }),
    }),
  }),
});

export const { useGetPreviousWorksPhotosQuery } = previousWorkApi;
