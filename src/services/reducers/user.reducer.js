import { createSlice } from '@reduxjs/toolkit'
import { userResetStateProperty } from '../actions/user.actions'


const userSlice = createSlice({
    name: 'user',
    initialState: {
        stateValue: null,
        userRequestStatus: null,
        userRequestLoading: false,
    },
    extraReducers: (builder) => {
        // OTHERS-ACTIONS



        builder.addCase(userResetStateProperty.pending, (state, action) => {
            state.authLoading = true
        })
        builder.addCase(userResetStateProperty.fulfilled, (state, action) => {
            state.authLoading = false
            if (action.payload.key === 'STATE-VALUE') {
                state.stateValue = action.payload.value
            }
        })
        builder.addCase(userResetStateProperty.rejected, (state, action) => {
            state.authLoading = false
        })
    }
})


export default userSlice.reducer;