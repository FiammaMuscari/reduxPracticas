import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  
  // Nombre del "reducer" (RTK) https://redux-toolkit.js.org/rtk-query/overview <- más info
  reducerPath: 'todos',
  // URL
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),

  // Funciones / peticiones
  endpoints: ( builder ) => ({
    getTodos: builder.query({
      query: () => '/todos'
    }),
    getTodo: builder.query({
      query: ( todoId ) => `/todos/${ todoId }`
    }),
  })

})

export const { useGetTodosQuery, useGetTodoQuery } = todosApi; //siempre 'use' adelante y 'query' al final