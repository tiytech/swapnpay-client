import { createAsyncThunk } from "@reduxjs/toolkit"
import { getNairaWalletDetails, iDverificationRoute, receiveWithCard, resetPasswordOtpRoute, resetPinOtpRoute, resetPinOtpVerification, resetTransactionPin, verifyPasswordOtpAndResetRoute } from '../routes/user.routes'

const USERFROMLS = localStorage.getItem('swapnpay-user') ? JSON.parse(localStorage.getItem('swapnpay-user')) : null


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

export const getNairaWallet = createAsyncThunk(
    'user/getNairaWallet',
    async (_, { rejectWithValue }) => {
        try {
            const token = USERFROMLS['access'];

            const { data } = await getNairaWalletDetails(token)

            return data
        } catch (error) {
            console.log(error.response)
            return rejectWithValue(null)
        }
    }
)

export const fundAccountWithCard = createAsyncThunk(
    'user/fundAccountWithCard',
    async ({ formData }, { rejectWithValue }) => {
        try {
            const token = USERFROMLS['access'];

            const { data } = await receiveWithCard(formData, token)

            const link = data['data']['data']['link']
            window.location = link;



            return data
        } catch (error) {
            console.log(error.response)
            return rejectWithValue(null)
        }
    }
)

export const resetPasswordOtpAction = createAsyncThunk(
    'user/resetPasswordOtpAction',
    async ({ formData }, { rejectWithValue }) => {
        try {

            const { data } = await resetPasswordOtpRoute(formData)

            return data
        } catch (error) {
            console.log(error.response)
            return rejectWithValue(null)
        }
    }
)


export const resetPinOtpAction = createAsyncThunk(
    'user/resetPinOtpAction',
    async ({ formData }, { rejectWithValue }) => {
        try {

            const token = USERFROMLS['access'];
            const { data } = await resetPinOtpRoute(formData, token)

            return data
        } catch (error) {
            console.log(error.response)
            return rejectWithValue(null)
        }
    }
)

export const resetPinOtpVerificationAction = createAsyncThunk(
    'user/resetPinOtpVerificationAction',
    async ({ formData }, { rejectWithValue }) => {
        try {

            const token = USERFROMLS['access'];
            const { data } = await resetPinOtpVerification(formData, token)

            return data
        } catch (error) {
            console.log(error.response)
            return rejectWithValue(null)
        }
    }
)


export const resetTransactionPinAction = createAsyncThunk(
    'user/resetTransactionPinAction',
    async ({ formData, toast, navigate }, { rejectWithValue }) => {
        try {

            const token = USERFROMLS['access'];
            const { data } = await resetTransactionPin(formData, token)

            // toast.success('Pin changed successfully')
            // navigate('/dashboard', { replace: true })


            return data
        } catch (error) {
            console.log(error.response)
            return rejectWithValue(null)
        }
    }
)

export const verifyPasswordOtpAndResetAction = createAsyncThunk(
    'user/verifyPasswordOtpAndResetAction',
    async ({ formData, toast, navigate }, { rejectWithValue }) => {
        try {

            const token = USERFROMLS['access'];
            const { data } = await verifyPasswordOtpAndResetRoute(formData, token)

            // toast.success('Pin changed successfully')
            // navigate('/dashboard', { replace: true })


            return data
        } catch (error) {
            console.log(error.response)
            return rejectWithValue(null)
        }
    }
)

export const iDverificationAction = createAsyncThunk(
    'user/iDverificationAction',
    async ({ formData }, { rejectWithValue }) => {
        try {

            const token = USERFROMLS['access'];
            const { data } = await iDverificationRoute(formData, token)

            // toast.success('Pin changed successfully')
            // navigate('/dashboard', { replace: true })


            return data
        } catch (error) {
            console.log(error.response)
            return rejectWithValue(null)
        }
    }
)