import { createAsyncThunk } from "@reduxjs/toolkit"

import { authActivateAccountRoute, authEmailVerificationRoute, authGenerateEmailVerificationOTPRoute, authGenerateUsernameRoute, authUserLoginRoute, authUserSignupRoute } from "../routes/auth.routes"


export const authGenerateUsername = createAsyncThunk(
    'auth/authGenerateUsername',
    async ({ formData }, { rejectWithValue }) => {
        try {
            const { data } = await authGenerateUsernameRoute(formData)

            console.log(data)

            return data.name
        } catch (error) {
            console.log(error.response)
            return rejectWithValue(null)
        }
    }
)


export const authUserSignup = createAsyncThunk(
    'auth/authUserSignup',
    async ({ formData, toast, updateConfig }, { rejectWithValue }) => {
        try {
            const { data } = await authUserSignupRoute(formData)
            await authGenerateEmailVerificationOTPRoute(formData)

            console.log(data)
            toast.success('Signup successful, please verify your email')

            updateConfig({ showFormFive: false, showFormSix: true })

            return data
        } catch (error) {
            console.log(error.response)
            toast.warning('An error occured during signup')
            return rejectWithValue(null)
        }
    }
)


export const authVerifyUserEmail = createAsyncThunk(
    'auth/authVerifyUserEmail',
    async ({ formData, toast, updateConfig }, { rejectWithValue }) => {
        try {
            const { data } = await authEmailVerificationRoute(formData)

            console.log(data)
            toast.success('Email verification successful, please verify your account')

            updateConfig({ showFormSix: false, showFormSeven: true })

            return data
        } catch (error) {
            console.log(error.response)
            toast.warning('An error occured during email verification')
            return rejectWithValue(null)
        }
    }
)


export const authActivateAccount = createAsyncThunk(
    'auth/authActivateAccount',
    async ({ formData, toast, updateModals }, { rejectWithValue }) => {
        try {
            const { data } = await authActivateAccountRoute(formData)

            console.log(data)
            toast.success('Account activation successful.')

            updateModals({ showSignupSuccessModal: true })

            return data
        } catch (error) {
            console.log(error)
            toast.warning('An error occured during account activation')
            return rejectWithValue(null)
        }
    }
)


export const authUserLogin = createAsyncThunk(
    'auth/authUserLogin',
    async ({ formData, toast, navigate }, { rejectWithValue }) => {
        try {
            const { data } = await authUserLoginRoute(formData)

            console.log(data)
            toast.success('Login successful.')

            localStorage.setItem('swapnpay-user', JSON.stringify(data.data))

            navigate('/dashboard', { replace: true })

            return data.data
        } catch (error) {
            console.log(error.response)
            toast.warning('Invalid credentials')
            return rejectWithValue(null)
        }
    }
)


export const authUserLogout = createAsyncThunk(
    'auth/authUserLogout',
    async ({  toast, navigate }, { rejectWithValue }) => {
        try {
            toast.success('Logout successful.')

            localStorage.removeItem('swapnpay-user')

            navigate('/login', { replace: true })

            return null
        } catch (error) {
            console.log(error.response)
            toast.warning('An error occured during logout')
            return rejectWithValue(null)
        }
    }
)