import { createSlice } from '@reduxjs/toolkit'
import { userResetStateProperty, getNairaWallet, resetPasswordOtpAction, resetPinOtpAction, resetTransactionPinAction, verifyPasswordOtpAndResetAction, iDverificationAction } from '../actions/user.actions'


const userSlice = createSlice({
    name: 'user',
    initialState: {
        stateValue: null,
        userRequestStatus: null,
        userRequestLoading: false,
        naira_wallet_details: null,
        resetPasswordOtpRequestLoading: null,
        resetPinOtpRequestLoading: null,
        resetTransactionPinLoading: null,
        verifyPasswordOtpAndResetLoading: null,
        idVerificationLoading: null

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
        }),
            builder.addCase(getNairaWallet.pending, (state, action) => {
                state.authLoading = true
            })
        builder.addCase(getNairaWallet.fulfilled, (state, action) => {
            // state.authLoading = false
            state.naira_wallet_details = action.payload
        })
        builder.addCase(getNairaWallet.rejected, (state, action) => {
            // state.authLoading = false
        }),
            builder.addCase(resetPasswordOtpAction.pending, (state, action) => {
                state.resetPasswordOtpRequestLoading = true

            })
        builder.addCase(resetPasswordOtpAction.fulfilled, (state, action) => {
            state.resetPasswordOtpRequestLoading = false


        })
        builder.addCase(resetPasswordOtpAction.rejected, (state, action) => {
            state.resetPasswordOtpRequestLoading = false

        }),
            builder.addCase(resetPinOtpAction.pending, (state, action) => {
                state.resetPinOtpRequestLoading = true

            })
        builder.addCase(resetPinOtpAction.fulfilled, (state, action) => {
            state.resetPinOtpRequestLoading = false


        })
        builder.addCase(resetPinOtpAction.rejected, (state, action) => {
            state.resetPinOtpRequestLoading = false

        }),
            builder.addCase(resetTransactionPinAction.pending, (state, action) => {
                state.resetTransactionPinLoading = true

            })
        builder.addCase(resetTransactionPinAction.fulfilled, (state, action) => {
            state.resetTransactionPinLoading = false


        })
        builder.addCase(resetTransactionPinAction.rejected, (state, action) => {
            state.resetTransactionPinLoading = false

        }),
            builder.addCase(verifyPasswordOtpAndResetAction.pending, (state, action) => {
                state.verifyPasswordOtpAndResetLoading = true

            })
        builder.addCase(verifyPasswordOtpAndResetAction.fulfilled, (state, action) => {
            state.verifyPasswordOtpAndResetLoading = false


        })
        builder.addCase(verifyPasswordOtpAndResetAction.rejected, (state, action) => {
            state.verifyPasswordOtpAndResetLoading = false

        }),
            builder.addCase(iDverificationAction.pending, (state, action) => {
                state.idVerificationLoading = true

            })
        builder.addCase(iDverificationAction.fulfilled, (state, action) => {
            state.idVerificationLoading = false


        })
        builder.addCase(iDverificationAction.rejected, (state, action) => {
            state.idVerificationLoading = false

        })
    }
})


export default userSlice.reducer;