import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { reposApi } from "./reposApi";
import paginationReducer from "./paginationSlice";

export const store = configureStore({
    reducer: {
        [reposApi.reducerPath]: reposApi.reducer,
        pagination: paginationReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reposApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch