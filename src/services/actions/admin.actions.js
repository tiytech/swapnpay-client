import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchUnverifiedUsersRoute, getReferralFeeRoute, getSchoolFeesPaymentRoute, getTranasactionsFeeRoute, getTransactionsRoutes, getUserCountRoutes, patchReferralFeeRoute, patchTransacationsFeeRoute, verifyUserAccountRoute } from "../routes/admin.routes"


let USERFROMLS = localStorage.getItem('swapnpay-user') ? JSON.parse(localStorage.getItem('swapnpay-user')) : null




export const adminResetStateProperty = createAsyncThunk(
    'admin/adminResetStateProperty',
    async ({ key, value = null }, { rejectWithValue }) => {
        try {
            return { key, value }
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)

export const getUserCountAction = createAsyncThunk(
    'admin/getUserCountAction',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getUserCountRoutes()
            return data['data']
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)

export const getTransactionsAction = createAsyncThunk(
    'admin/getTransactionsAction',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getTransactionsRoutes()
            return data['data']
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)

export const getTransactionsFeeAction = createAsyncThunk(
    'admin/getTransactionsFeeAction',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getTranasactionsFeeRoute()
            return data
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)

export const patchTransactionsFeeAction = createAsyncThunk(
    'admin/patchTransactionsFeeAction',
    async ({ formData, toast, updateModals }, { rejectWithValue }) => {
        try {

            const { data } = await patchTransacationsFeeRoute(formData)
            toast.success('Transaction fee updated successfully')
            updateModals({ showAdminUpdateTransactionFeeModal: false })

            return data
        } catch (error) {
            toast.warning('Transaction fee failed to update')
            console.log(error)
            return rejectWithValue(null)
        }
    }
)
export const getReferralFeeAction = createAsyncThunk(
    'admin/getReferralFeeAction',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getReferralFeeRoute()
            return data
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)

export const patchReferralFeeAction = createAsyncThunk(
    'admin/patchReferralFeeAction',
    async ({ formData, toast, updateModals }, { rejectWithValue }) => {
        try {
            const { data } = await patchReferralFeeRoute(formData)
            toast.success('Referral fee updated successfully')
            updateModals({ showAdminUpdateReferralFeeModal: false })
            return data
        } catch (error) {
            toast.warning('Referral fee failed to update')
            console.log(error)
            return rejectWithValue(null)
        }
    }
)


export const getSchoolFeesPaymentAction = createAsyncThunk(
    'admin/getSchoolFeesPaymentAction',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getSchoolFeesPaymentRoute()
            return data['data']
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)


export const adminFetchUnverifiedUsersAction = createAsyncThunk(
    'admin/adminFetchUnverifiedUsersAction',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await fetchUnverifiedUsersRoute()

            console.log(data)

            return data.data
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)


export const adminVerifyUserAccountAction = createAsyncThunk(
    'admin/adminVerifyUserAccountAction',
    async ({ formData, toast }, { rejectWithValue }) => {
        try {
            const { data } = await verifyUserAccountRoute(formData)

            console.log(data)
            toast.success('Account verification successful.')
            
            return formData.profile_pkid
        } catch (error) {
            console.log(error)
            toast.warning('An error occured while verifying account.')
            return rejectWithValue(null)
        }
    }
)


export const schoolFeesDetails = createAsyncThunk(
    'admin/schoolFeesDetails',
    async ({ data }, { rejectWithValue }) => {
        try {

            return data
        } catch (error) {

            return rejectWithValue(null)
        }
    }
)