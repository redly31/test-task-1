import { createSlice } from "@reduxjs/toolkit";
import { IPagination } from "../types/IPagination";


const rowsSlice = createSlice({
    name: 'pagination',
    initialState: {
        limit: 5,
        page: 1,
        search: '',
    } as IPagination,
    reducers: {
        changeLimit(state, action) {
            state.limit = action.payload
        },
        changePage(state, action) {
            state.page = action.payload
        },
        changeSearch(state, action) {
            state.search = action.payload
        },
    }
})

export const { changeLimit, changePage, changeSearch } = rowsSlice.actions
export default rowsSlice.reducer