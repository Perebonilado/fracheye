import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../constants";
import { secondsToMilliSeconds } from "../utils";
import { PreviousWorkDto } from "../dto/PreviousWork.dto";
import { PreviousWorkModel } from "../models/PreviousWork.model";

const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  timeout: secondsToMilliSeconds(30),
});

export const previousWorkApi = createApi({
  reducerPath: "previousWorks",
  baseQuery,
  tagTypes: ['previousWorks'],
  endpoints: (build) => ({
    getPreviousWorksPhotos: build.query<PreviousWorkModel, "">({
      query: () => ({
        url: "/photos?_limit=20",
      }),
      providesTags: ['previousWorks'],
      transformResponse: (res: PreviousWorkDto) => {
        if (!res.length) return [] as PreviousWorkModel;
        else {
          const mappedData: PreviousWorkModel = res.map((pw) => ({
            id: pw.id,
            imageSrc: pw.url,
            description: pw.title,
          }));

          return mappedData;
        }
      },
    }),
  }),
});

export const { useGetPreviousWorksPhotosQuery } = previousWorkApi;
