import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "fed7630b2dmsh6d4649837439604p19f4a0jsn77fad645c2ad",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "dhttps://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query: ()=> createRequest('/coins')
        })
    })
})

export const {
    useGetCryptosQuery,
} = cryptoApi
