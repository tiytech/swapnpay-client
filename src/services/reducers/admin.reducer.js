import { createSlice } from '@reduxjs/toolkit'
import { adminFetchDashboardInfo, adminFetchUnverifiedUsersAction, adminResetStateProperty, adminVerifyUserAccountAction, flutterWaveBalanceAction, getCardDepositsActions, getFailedTransactionAction, getFincraBalanceAction, getReferralFeeAction, getSchoolFeesPaymentAction, getSudoBalanceAction, getTransactionsAction, getTransactionsFeeAction, getUserCountAction, patchCardDepositAction, patchFailedTransactionAction, patchReferralFeeAction, patchTransactionsFeeAction, schoolFeesDetails, updateSchoolFeesStatusAction } from '../actions/admin.actions'


const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        dashboardInfo: null,
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
        fincra_balance: null,
        sudo_balance: null,
        flutterwave_balance: null,
        card_deposits: null,
        failed_transactions: null
    },
    extraReducers: (builder) => {
        builder.addCase(adminFetchDashboardInfo.pending, (state, action) => {
            state.users_count = null
        })
        builder.addCase(adminFetchDashboardInfo.fulfilled, (state, action) => {
            state.dashboardInfo = action.payload
        })
        builder.addCase(adminFetchDashboardInfo.rejected, (state, action) => {
            state.users_count = null
        })

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


        builder.addCase(updateSchoolFeesStatusAction.pending, (state, action) => {
            state.adminRequestLoading = true
        })
        builder.addCase(updateSchoolFeesStatusAction.fulfilled, (state, action) => {
            state.adminRequestLoading = false
            // state.unverifiedUsers = state.unverifiedUsers.filter(user => user.pkid !== action.payload)

        })
        builder.addCase(updateSchoolFeesStatusAction.rejected, (state, action) => {
            state.adminRequestLoading = false
        })

        //
        builder.addCase(getFincraBalanceAction.pending, (state, action) => {
            state.adminRequestLoading = true
        })
        builder.addCase(getFincraBalanceAction.fulfilled, (state, action) => {
            state.adminRequestLoading = false
            state.fincra_balance = action.payload

        })
        builder.addCase(getFincraBalanceAction.rejected, (state, action) => {
            state.adminRequestLoading = false
        })
        //

        //
        builder.addCase(getSudoBalanceAction.pending, (state, action) => {
            state.adminRequestLoading = true
        })
        builder.addCase(getSudoBalanceAction.fulfilled, (state, action) => {
            state.adminRequestLoading = false
            state.sudo_balance = action.payload

        })
        builder.addCase(getSudoBalanceAction.rejected, (state, action) => {
            state.adminRequestLoading = false
        })
        //

        //
        builder.addCase(flutterWaveBalanceAction.pending, (state, action) => {
            state.adminRequestLoading = true
        })
        builder.addCase(flutterWaveBalanceAction.fulfilled, (state, action) => {
            state.adminRequestLoading = false
            state.flutterwave_balance = action.payload

        })
        builder.addCase(flutterWaveBalanceAction.rejected, (state, action) => {
            state.adminRequestLoading = false
        })
        //

        //
        builder.addCase(getCardDepositsActions.pending, (state, action) => {
            state.adminRequestLoading = true
        })
        builder.addCase(getCardDepositsActions.fulfilled, (state, action) => {
            state.adminRequestLoading = false
            state.card_deposits = action.payload

        })
        builder.addCase(getCardDepositsActions.rejected, (state, action) => {
            state.adminRequestLoading = false
        })
        //
        builder.addCase(patchCardDepositAction.pending, (state, action) => {
            state.adminRequestLoading = true
        })
        builder.addCase(patchCardDepositAction.fulfilled, (state, action) => {
            state.adminRequestLoading = false
            // state.card_deposits = action.payload

        })
        builder.addCase(patchCardDepositAction.rejected, (state, action) => {
            state.adminRequestLoading = false
        })
        //
        //
        builder.addCase(getFailedTransactionAction.pending, (state, action) => {
            state.adminRequestLoading = true
        })
        builder.addCase(getFailedTransactionAction.fulfilled, (state, action) => {
            state.adminRequestLoading = false
            state.failed_transactions = action.payload

        })
        builder.addCase(getFailedTransactionAction.rejected, (state, action) => {
            state.adminRequestLoading = false
        })
        //

        //
        builder.addCase(patchFailedTransactionAction.pending, (state, action) => {
            state.adminRequestLoading = true
        })
        builder.addCase(patchFailedTransactionAction.fulfilled, (state, action) => {
            state.adminRequestLoading = false
            // state.failed_transactions = action.payload

        })
        builder.addCase(patchFailedTransactionAction.rejected, (state, action) => {
            state.adminRequestLoading = false
        })
        //



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