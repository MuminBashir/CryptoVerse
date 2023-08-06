import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "fed7630b2dmsh6d4649837439604p19f4a0jsn77fad645c2ad",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => {
        return {
          url: `/coins?limit=${count}`,
          headers: cryptoApiHeaders,
        };
      },
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => {
        return {
          url: `/coin/${coinId}`,
          headers: cryptoApiHeaders,
        };
      },
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) => {
        return {
          url: `/coin/${coinId}/history`,
          headers: cryptoApiHeaders,
          params: { timePeriod },
        };
      },
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
