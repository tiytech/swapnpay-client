import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
    name: 'user',
    initialState: {
        userRequestStatus: null,
        userRequestLoading: false,
    },
    extraReducers: (builder) => {
    }
})


export default userSlice.reducer;