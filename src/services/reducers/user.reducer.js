import { createSlice } from '@reduxjs/toolkit'

import { userAirtimePurchase, userBankTransfer, userDataPurchase, userFetchBanksList, userFetchCablePlans, userFetchDataBundles, userFetchDollarWalletBalance, userFetchNairaWalletBalance, userGenerateSchoolPayment, userGenerateCableSubscription, userResetStateProperty, userTransferToSwapnPayUser, userFetchElectricityDiscos, userGenerateElectricitySubscription } from '../actions/user.actions'


const userSlice = createSlice({
    name: 'user',
    initialState: {
        banksList: null,
        cablePlans: null,
        dataBundles: null,
        electricityDiscos: null,
        nairaWallet: null,
        dollarWallet: null,
        newTransaction: null,
        stateValue: null,
        userRequestStatus: null,
        userRequestLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(userFetchDollarWalletBalance.pending, (state, action) => {
            state.userRequestLoading = true
        })
        builder.addCase(userFetchDollarWalletBalance.fulfilled, (state, action) => {
            state.userRequestLoading = false
            state.dollarWallet = action.payload
        })
        builder.addCase(userFetchDollarWalletBalance.rejected, (state, action) => {
            state.userRequestLoading = false
        })

        builder.addCase(userFetchNairaWalletBalance.pending, (state, action) => {
            state.userRequestLoading = true
        })
        builder.addCase(userFetchNairaWalletBalance.fulfilled, (state, action) => {
            state.userRequestLoading = false
            state.nairaWallet = action.payload
        })
        builder.addCase(userFetchNairaWalletBalance.rejected, (state, action) => {
            state.userRequestLoading = false
        })



        builder.addCase(userTransferToSwapnPayUser.pending, (state, action) => {
            state.userRequestLoading = true
            state.userRequestStatus = 'PENDING'
        })
        builder.addCase(userTransferToSwapnPayUser.fulfilled, (state, action) => {
            state.userRequestLoading = false
            state.userRequestStatus = 'SUCCESS'
            state.newTransaction = action.payload
        })
        builder.addCase(userTransferToSwapnPayUser.rejected, (state, action) => {
            state.userRequestLoading = false
            state.userRequestStatus = 'FAILED'
        })

        builder.addCase(userFetchBanksList.pending, (state, action) => {
            state.userRequestLoading = true
        })
        builder.addCase(userFetchBanksList.fulfilled, (state, action) => {
            state.userRequestLoading = false
            state.banksList = action.payload
        })
        builder.addCase(userFetchBanksList.rejected, (state, action) => {
            state.userRequestLoading = false
        })

        builder.addCase(userBankTransfer.pending, (state, action) => {
            state.userRequestLoading = true
            state.userRequestStatus = 'PENDING'
        })
        builder.addCase(userBankTransfer.fulfilled, (state, action) => {
            state.userRequestLoading = false
            state.userRequestStatus = 'SUCCESS'
            state.newTransaction = action.payload
        })
        builder.addCase(userBankTransfer.rejected, (state, action) => {
            state.userRequestLoading = false
            state.userRequestStatus = 'FAILED'
        })

        builder.addCase(userGenerateSchoolPayment.pending, (state, action) => {
            state.userRequestLoading = true
            state.userRequestStatus = 'PENDING'
        })
        builder.addCase(userGenerateSchoolPayment.fulfilled, (state, action) => {
            state.userRequestLoading = false
            state.userRequestStatus = 'SUCCESS'
            state.newTransaction = action.payload
        })
        builder.addCase(userGenerateSchoolPayment.rejected, (state, action) => {
            state.userRequestLoading = false
            state.userRequestStatus = 'FAILED'
        })



        builder.addCase(userFetchDataBundles.pending, (state, action) => {
            state.userRequestLoading = true
        })
        builder.addCase(userFetchDataBundles.fulfilled, (state, action) => {
            state.userRequestLoading = false
            state.dataBundles = action.payload
        })
        builder.addCase(userFetchDataBundles.rejected, (state, action) => {
            state.userRequestLoading = false
        })

        builder.addCase(userAirtimePurchase.pending, (state, action) => {
            state.userRequestLoading = true
            state.userRequestStatus = 'PENDING'
        })
        builder.addCase(userAirtimePurchase.fulfilled, (state, action) => {
            state.userRequestLoading = false
            state.userRequestStatus = 'SUCCESS'
            state.newTransaction = action.payload
        })
        builder.addCase(userAirtimePurchase.rejected, (state, action) => {
            state.userRequestLoading = false
            state.userRequestStatus = 'FAILED'
        })

        builder.addCase(userDataPurchase.pending, (state, action) => {
            state.userRequestLoading = true
            state.userRequestStatus = 'PENDING'
        })
        builder.addCase(userDataPurchase.fulfilled, (state, action) => {
            state.userRequestLoading = false
            state.userRequestStatus = 'SUCCESS'
            state.newTransaction = action.payload
        })
        builder.addCase(userDataPurchase.rejected, (state, action) => {
            state.userRequestLoading = false
            state.userRequestStatus = 'FAILED'
        })
        
        

        builder.addCase(userFetchCablePlans.pending, (state, action) => {
            state.userRequestLoading = true
        })
        builder.addCase(userFetchCablePlans.fulfilled, (state, action) => {
            state.userRequestLoading = false
            state.cablePlans = action.payload
        })
        builder.addCase(userFetchCablePlans.rejected, (state, action) => {
            state.userRequestLoading = false
        })
        
        builder.addCase(userGenerateCableSubscription.pending, (state, action) => {
            state.userRequestLoading = true
            state.userRequestStatus = 'PENDING'
        })
        builder.addCase(userGenerateCableSubscription.fulfilled, (state, action) => {
            state.userRequestLoading = false
            state.userRequestStatus = 'SUCCESS'
            state.newTransaction = action.payload
        })
        builder.addCase(userGenerateCableSubscription.rejected, (state, action) => {
            state.userRequestLoading = false
            state.userRequestStatus = 'FAILED'
        })
        
        

        builder.addCase(userFetchElectricityDiscos.pending, (state, action) => {
            state.userRequestLoading = true
        })
        builder.addCase(userFetchElectricityDiscos.fulfilled, (state, action) => {
            state.userRequestLoading = false
            state.electricityDiscos = action.payload
        })
        builder.addCase(userFetchElectricityDiscos.rejected, (state, action) => {
            state.userRequestLoading = false
        })

        builder.addCase(userGenerateElectricitySubscription.pending, (state, action) => {
            state.userRequestLoading = true
            state.userRequestStatus = 'PENDING'
        })
        builder.addCase(userGenerateElectricitySubscription.fulfilled, (state, action) => {
            state.userRequestLoading = false
            state.userRequestStatus = 'SUCCESS'
            state.newTransaction = action.payload
        })
        builder.addCase(userGenerateElectricitySubscription.rejected, (state, action) => {
            state.userRequestLoading = false
            state.userRequestStatus = 'FAILED'
        })
        

        builder.addCase(userResetStateProperty.pending, (state, action) => {
            state.userRequestLoading = true
        })
        builder.addCase(userResetStateProperty.fulfilled, (state, action) => {
            state.userRequestLoading = false
            if (action.payload.key === 'STATE-VALUE') {
                state.stateValue = action.payload.value
            }
        })
        builder.addCase(userResetStateProperty.rejected, (state, action) => {
            state.userRequestLoading = false
        })
    }
})


export default userSlice.reducer;