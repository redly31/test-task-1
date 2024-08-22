import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Payload } from "../types/IRepo";
import { IPagination } from "../types/IPagination";

export const reposApi = createApi({
  reducerPath: "reposApi",
  tagTypes: ["Repos"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com" }),
  endpoints: (build) => ({
    getRepos: build.query<Payload, IPagination>({
      query: ({search, limit, page }) => `/search/repositories?q=${search}&per_page=${limit}&page=${page}`,
    })
  }),
  
});

export const { useGetReposQuery } = reposApi;