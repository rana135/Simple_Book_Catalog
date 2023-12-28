import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://simple-book-catalog-backend-bay.vercel.app/api/v1' }),
    tagTypes: ['bookHandleChange'],
    endpoints: (builder) => ({ 

        
        addBook: builder.mutation({
            query: ( data  ) => ({
              url: `/book`,
              method: 'POST',
              body: data,
            }),
            invalidatesTags: ['bookHandleChange'] 
          }),


          getBooks: builder.query({
            query: () => '/book',
            providesTags: () => ['bookHandleChange']
          }),
          getByYearBooks: builder.query({
            query: () => '/book?sortBy=year',
            providesTags: () => ['bookHandleChange']
          }),
          
          getBySearchBooks: builder.query({
            query: (id) => `/book?genre=${id}`,
            providesTags: () => ['bookHandleChange']
          }),


        getAllBooks: builder.query({
            query: () => '/book/getall',
            providesTags: () => ['bookHandleChange']
        }),
        getSingleBook: builder.query({
            query: (id) => `/book/${id}`,
            providesTags: () => ['bookHandleChange']
        }),
        deleteBook: builder.mutation({
          query: (id) => ({
            url: `/book/${id}`,
            method: 'DELETE',
          }),
        })
    })
})


export const {useGetBooksQuery, useGetAllBooksQuery, useAddBookMutation, useGetSingleBookQuery, useDeleteBookMutation, useGetByYearBooksQuery,
useGetBySearchBooksQuery} = api;