import { createSlice } from '@reduxjs/toolkit'

const USERFROMLS = localStorage.getItem('swapnpay-user') ? JSON.parse(localStorage.getItem('swapnpay-user')) : null


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: USERFROMLS ? USERFROMLS : null,
        authLoading: false,
        authRequestStatus: null,
    },
    extraReducers: (builder) => {
    }
})


export default authSlice.reducer;