import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query";

export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://192.168.1.7:5000/api',
    }),
    endpoints: (builder) => ({}),
});