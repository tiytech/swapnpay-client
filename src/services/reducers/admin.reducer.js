import { createSlice } from '@reduxjs/toolkit'
import { adminFetchUnverifiedUsersAction, adminResetStateProperty, adminVerifyUserAccountAction, getReferralFeeAction, getSchoolFeesPaymentAction, getTransactionsAction, getTransactionsFeeAction, getUserCountAction, patchReferralFeeAction, patchTransactionsFeeAction, schoolFeesDetails } from '../actions/admin.actions'


const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        currentData: null,
        adminRequestStatus: null,
        adminRequestLoading: false,
        users_count: null,
        transactions: null,
        referral_fee: null,
        transactions_fee: null,
        school_fees: null,
        schoolFees_Details: null,
        unverifiedUsers: null,
    },
    extraReducers: (builder) => {
        builder.addCase(getUserCountAction.pending, (state, action) => {
            state.users_count = null
        })
        builder.addCase(getUserCountAction.fulfilled, (state, action) => {
            state.users_count = action.payload
            // if (action.payload.key === 'CurrentData') {
            //     state.currentData = action.payload.value
            // }
        })
        builder.addCase(getUserCountAction.rejected, (state, action) => {
            state.users_count = null
        })

        builder.addCase(getTransactionsAction.pending, (state, action) => {
            state.transactions = null
        })
        builder.addCase(getTransactionsAction.fulfilled, (state, action) => {
            state.transactions = action.payload

        })
        builder.addCase(getTransactionsAction.rejected, (state, action) => {
            state.transactions = null
        })

        builder.addCase(getTransactionsFeeAction.pending, (state, action) => {
            state.transactions_fee = null
        })
        builder.addCase(getTransactionsFeeAction.fulfilled, (state, action) => {
            state.transactions_fee = action.payload

        })

        builder.addCase(getTransactionsFeeAction.rejected, (state, action) => {
            state.transactions_fee = null
        })



        builder.addCase(patchTransactionsFeeAction.pending, (state, action) => {
            state.adminRequestLoading = true
        })
        builder.addCase(patchTransactionsFeeAction.fulfilled, (state, action) => {
            state.adminRequestLoading = false
            state.transactions_fee = action.payload

        })

        builder.addCase(patchTransactionsFeeAction.rejected, (state, action) => {
            state.adminRequestLoading = false
        })




        builder.addCase(getReferralFeeAction.pending, (state, action) => {
            state.referral_fee = null
        })
        builder.addCase(getReferralFeeAction.fulfilled, (state, action) => {
            state.referral_fee = action.payload

        })
        builder.addCase(getReferralFeeAction.rejected, (state, action) => {
            state.referral_fee = null
        })



        builder.addCase(patchReferralFeeAction.pending, (state, action) => {
            state.adminRequestLoading = true
        })
        builder.addCase(patchReferralFeeAction.fulfilled, (state, action) => {
            state.adminRequestLoading = false
            state.referral_fee = action.payload

        })
        builder.addCase(patchReferralFeeAction.rejected, (state, action) => {
            state.adminRequestLoading = false
        })

        builder.addCase(getSchoolFeesPaymentAction.pending, (state, action) => {
            state.adminRequestLoading = true
        })
        builder.addCase(getSchoolFeesPaymentAction.fulfilled, (state, action) => {
            state.adminRequestLoading = false
            state.school_fees = action.payload

        })
        builder.addCase(getSchoolFeesPaymentAction.rejected, (state, action) => {
            state.adminRequestLoading = false
        })


        builder.addCase(schoolFeesDetails.pending, (state, action) => {
            state.adminRequestLoading = true
        })
        builder.addCase(schoolFeesDetails.fulfilled, (state, action) => {
            state.adminRequestLoading = false
            state.schoolFees_Details = action.payload

        })
        builder.addCase(schoolFeesDetails.rejected, (state, action) => {
            state.adminRequestLoading = false
        })


        builder.addCase(adminFetchUnverifiedUsersAction.pending, (state, action) => {
            state.adminRequestLoading = true
        })
        builder.addCase(adminFetchUnverifiedUsersAction.fulfilled, (state, action) => {
            state.adminRequestLoading = false
            state.unverifiedUsers = action.payload

        })
        builder.addCase(adminFetchUnverifiedUsersAction.rejected, (state, action) => {
            state.adminRequestLoading = false
        })

        builder.addCase(adminVerifyUserAccountAction.pending, (state, action) => {
            state.adminRequestLoading = true
        })
        builder.addCase(adminVerifyUserAccountAction.fulfilled, (state, action) => {
            state.adminRequestLoading = false
            state.unverifiedUsers = state.unverifiedUsers.filter(user => user.pkid !== action.payload)

        })
        builder.addCase(adminVerifyUserAccountAction.rejected, (state, action) => {
            state.adminRequestLoading = false
        })



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