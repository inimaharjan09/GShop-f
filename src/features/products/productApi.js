import { mainApi } from '../../app/mainApi'

export const productApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (query) => ({
        url: '/products',
        method: 'GET',
        params: query,
      }),
    }),

    getTop5Products: builder.query({
      query: (query) => ({
        url: '/products/top-5',
        method: 'GET',
      }),
    }),

    addProducts: builder.mutation({
      query: (body) => ({
        url: '/products',
        method: 'POST',
        body: body,
      }),
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetTop5ProductsQuery,
  useAddProductsMutation,
} = productApi
