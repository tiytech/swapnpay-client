import { createSlice } from '@reduxjs/toolkit'
import { adminResetStateProperty } from '../actions/admin.actions'


const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        currentData: null,
        adminRequestStatus: null,
        adminRequestLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(adminResetStateProperty.pending, (state, action) => {
            state.adminRequestLoading = true
        })
        builder.addCase(adminResetStateProperty.fulfilled, (state, action) => {
            state.adminRequestLoading = false
            if (action.payload.key === 'CurrentData') {
                state.currentData = action.payload.value
            }
        })
        builder.addCase(adminResetStateProperty.rejected, (state, action) => {
            state.adminRequestLoading = false
        })
    }
})


export default adminSlice.reducer;