import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '',
    }),
    endpoints: (builder) => ({
        userLogin: builder.mutation({
            query: (val) => ({
                url: '/users/login',
                method: 'POST',
                body: val,
            }),
        }),

        userSignUp: builder.mutation({
            query: (val) => ({
                url: '/users/register',
                method: 'POST',
                body: val,
            }),
        }),
    }),
});

export const { useUserLoginMutation, useUserSignUpMutation } = authApi;