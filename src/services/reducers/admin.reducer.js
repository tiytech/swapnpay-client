import { createSlice } from '@reduxjs/toolkit'


const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        adminRequestStatus: null,
        adminRequestLoading: false,
    },
    extraReducers: (builder) => {
    }
})


export default adminSlice.reducer;