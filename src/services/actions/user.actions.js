import { createAsyncThunk } from "@reduxjs/toolkit"

import { airtimeDataPurchaseRoute, bankTransferRoute, cableAndElectricitySubscriptionRoute, electricityDiscosRoute, fetchBanksListRoute, fetchCablePlansRoute, fetchDataBundlesRoute, fetchDollarWalletBalanceRoute, fetchNairaWalletBalanceRoute, schoolPaymentRoute, transferToSwapnPayUserRoute } from "../routes/user.routes"


export const userFetchDollarWalletBalance = createAsyncThunk(
    'user/userFetchDollarWalletBalance',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await fetchDollarWalletBalanceRoute()
            console.log(data)

            return data
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)


export const userFetchNairaWalletBalance = createAsyncThunk(
    'user/userFetchNairaWalletBalance',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await fetchNairaWalletBalanceRoute()
            console.log(data)

            return data.data.data
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)


export const userTransferToSwapnPayUser = createAsyncThunk(
    'user/userTransferToSwapnPayUser',
    async ({ formData, toast, updateConfig }, { rejectWithValue }) => {
        try {
            const { data } = await transferToSwapnPayUserRoute(formData)

            toast.success('Transaction successful')
            updateConfig({ showDefault: true, showSendViaUsername: false, showConfirmTransferToSwapnPayUser: false })

            console.log(data)

            return data.data
        } catch (error) {
            console.log(error)
            toast.warning('An error occured during interwallet transfer')
            return rejectWithValue(null)
        }
    }
)


export const userFetchBanksList = createAsyncThunk(
    'user/userFetchBanksList',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await fetchBanksListRoute()

            console.log(data)

            return data.data
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)


export const userBankTransfer = createAsyncThunk(
    'user/userBankTransfer',
    async ({ formData, toast, updateConfig }, { rejectWithValue }) => {
        try {
            const { data } = await bankTransferRoute(formData)

            toast.success('Transaction successful')
            updateConfig({ showDefault: true, showSendViaBankTransfer: false, showConfirmSchoolPaymentTransaction: false })

            console.log(data)

            return data.data
        } catch (error) {
            console.log(error)
            toast.warning('An error occured during bank transfer')
            return rejectWithValue(null)
        }
    }
)


export const userGenerateSchoolPayment = createAsyncThunk(
    'user/userGenerateSchoolPayment',
    async ({ formData, toast, updateConfig }, { rejectWithValue }) => {
        try {
            const { data } = await schoolPaymentRoute(formData)

            toast.success('Transaction successful')
            updateConfig({ showDefault: true, showSendViaBankTransfer: false, showConfirmSchoolPaymentTransaction: false })

            console.log(data)

            return data.data
        } catch (error) {
            console.log(error)
            toast.warning('An error occured during school payment')
            return rejectWithValue(null)
        }
    }
)


export const userFetchDataBundles = createAsyncThunk(
    'user/userFetchDataBundles',
    async ({ network }, { rejectWithValue }) => {
        try {
            const { data } = await fetchDataBundlesRoute(network)

            console.log(data)

            return data.data
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)


export const userAirtimePurchase = createAsyncThunk(
    'user/userAirtimePurchase',
    async ({ formData, toast, updateConfig }, { rejectWithValue }) => {
        try {
            const { data } = await airtimeDataPurchaseRoute(formData)

            toast.success('Airtime purchase successful')
            updateConfig({ showDefault: true, showConfirmTransaction: false })

            console.log(data)

            return data.data
        } catch (error) {
            console.log(error)
            toast.warning('An error occured during airtime purchase')
            return rejectWithValue(null)
        }
    }
)


export const userDataPurchase = createAsyncThunk(
    'user/userDataPurchase',
    async ({ formData, toast, updateConfig }, { rejectWithValue }) => {
        try {
            const { data } = await airtimeDataPurchaseRoute(formData)

            toast.success('Data plan purchase successful')
            updateConfig({ showDefault: true, showConfirmTransaction: false })

            console.log(data)

            return data.data
        } catch (error) {
            console.log(error)
            toast.warning('An error occured during data purchase')
            return rejectWithValue(null)
        }
    }
)


export const userFetchCablePlans = createAsyncThunk(
    'user/userFetchCablePlans',
    async ({ cable }, { rejectWithValue }) => {
        try {
            const { data } = await fetchCablePlansRoute(cable)

            console.log(data)

            return data.data
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)


export const userGenerateCableSubscription = createAsyncThunk(
    'user/userGenerateCableSubscription',
    async ({ formData, toast, updateConfig }, { rejectWithValue }) => {
        try {
            const { data } = await cableAndElectricitySubscriptionRoute(formData)

            toast.success('Cable subscription successful')
            updateConfig({ showDefault: true, showConfirmTransaction: false })

            console.log(data)

            return data.data
        } catch (error) {
            console.log(error)
            toast.warning('An error occured during cable subscription')
            return rejectWithValue(null)
        }
    }
)


export const userFetchElectricityDiscos = createAsyncThunk(
    'user/userFetchElectricityDiscos',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await electricityDiscosRoute()

            console.log(data)

            return data.data
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)


export const userGenerateElectricitySubscription = createAsyncThunk(
    'user/userGenerateElectricitySubscription',
    async ({ formData, toast, updateConfig }, { rejectWithValue }) => {
        try {
            const { data } = await cableAndElectricitySubscriptionRoute(formData)

            toast.success('Electricity subscription successful')
            updateConfig({ showDefault: true, showConfirmTransaction: false })

            console.log(data)

            return data.data
        } catch (error) {
            console.log(error)
            toast.warning('An error occured during electricity subscription')
            return rejectWithValue(null)
        }
    }
)


export const userResetStateProperty = createAsyncThunk(
    'user/userResetStateProperty',
    async ({ key, value = null }, { rejectWithValue }) => {
        try {
            return { key, value }
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)