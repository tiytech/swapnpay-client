import { createAsyncThunk } from "@reduxjs/toolkit"

import { authActivateAccountRoute, authEmailVerificationRoute, authGenerateEmailVerificationOTPRoute, authGenerateUsernameRoute, authUserLogOutRoute, authUserLoginRoute, authUserSignupRoute, authForgotPasswordRoute, authResetPasswordRoute } from "../routes/auth.routes"


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

            const payload = {
                success: true,
                access: data.access,
                refresh: data.refresh,
                credentials: data.data
            }

            if (data.data.is_signup_completed) {
                toast.success('Login successful.')

                localStorage.setItem('swapnpay-user', JSON.stringify(payload))

                navigate('/dashboard', { replace: true })
                delete payload.data

                return payload
            }
            else {

                toast.success('Error, please activate your account!')
                navigate('/signup', { replace: true })
            }


            return { ...payload, success: false }
        } catch (error) {
            console.log(error.response)
            toast.warning('Invalid credentials')
            return rejectWithValue(null)
        }
    }
)


export const authForgotPassword = createAsyncThunk(
    'auth/authForgotPassword',
    async ({ formData, toast, navigate }, { rejectWithValue }) => {
        try {
            const { data } = await authForgotPasswordRoute(formData)

            toast.success('OTP generated successfully.')

            navigate('/reset-password', { replace: true })

            return formData
        } catch (error) {
            console.log(error.response)
            toast.warning('Invalid credentials')
            return rejectWithValue(null)
        }
    }
)


export const authResetPassword = createAsyncThunk(
    'auth/authResetPassword',
    async ({ formData, toast, navigate }, { rejectWithValue }) => {
        try {
            const { data } = await authResetPasswordRoute(formData)

            toast.success('Password reset successful.')

            navigate('/login', { replace: true })

            return null
        } catch (error) {
            console.log(error.response)
            toast.warning('Invalid credentials')
            return rejectWithValue(null)
        }
    }
)


export const authUserLogout = createAsyncThunk(
    'auth/authUserLogout',
    async ({ formData, toast, navigate }, { rejectWithValue }) => {
        try {

            await authUserLogOutRoute(formData)

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