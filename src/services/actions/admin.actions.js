import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchUnverifiedUsersRoute, getCardDepositsRoute, getFailedTransactionRoute, getFincraBalanceRoute, getReferralFeeRoute, getSchoolFeesPaymentRoute, getSudoBalanceRoute, getTranasactionsFeeRoute, getTransactionsRoutes, getUserCountRoutes, patchCardDepositsRoute, patchFailedTransactionRoute, patchReferralFeeRoute, patchTransacationsFeeRoute, updateSchoolFeesStatusRoute, verifyUserAccountRoute } from "../routes/admin.routes"


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
            if (formData['status'] == 'approved') {

                toast.success('Account verification successful.')
            } else {
                toast.success('Verification Rejected.')
            }

            return formData.profile_pkid
        } catch (error) {
            console.log(error)
            toast.warning('An error occured while verifying account.')
            return rejectWithValue(null)
        }
    }
)


export const updateSchoolFeesStatusAction = createAsyncThunk(
    'admin/updateSchoolFeesStatusAction',
    async ({ formData, toast }, { rejectWithValue }) => {
        try {
            const { data } = await updateSchoolFeesStatusRoute(formData)


            if (formData['status'] == 'APPROVED') {

                toast.success('Payment approved successful.')
            } else {
                toast.success('Payment was rejected Successfully')
            }

            return data
        } catch (error) {
            console.log(error)
            toast.warning('An error occured reject payment')
            return rejectWithValue(null)
        }
    }
)



export const getSudoBalanceAction = createAsyncThunk(
    'admin/getSudoBalanceAction',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getSudoBalanceRoute()



            return data.data.data
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)

export const getFincraBalanceAction = createAsyncThunk(
    'admin/getFincraBalanceAction',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getFincraBalanceRoute()



            return data['data']
        } catch (error) {
            // console.log(error)
            return rejectWithValue(null)
        }
    }
)

export const getCardDepositsActions = createAsyncThunk(
    'admin/getCardDepositsActions',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getCardDepositsRoute()



            return data
        } catch (error) {

            return rejectWithValue(null)
        }
    }
)


export const patchCardDepositAction = createAsyncThunk(
    'admin/patchCardDepositAction',
    async ({ formData, toast }, { rejectWithValue }) => {
        try {
            const { data } = await patchCardDepositsRoute({ formData })
            toast.success("User credited successfully")



            return data
        } catch (error) {
            console.log(error);
            toast.warning("User wasn't credited")
            return rejectWithValue(null)
        }
    }
)


export const getFailedTransactionAction = createAsyncThunk(
    'admin/getFailedTransactionAction',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getFailedTransactionRoute()
            return data
        } catch (error) {

            return rejectWithValue(null)
        }
    }
)


export const patchFailedTransactionAction = createAsyncThunk(
    'admin/patchFailedTransactionAction',
    async ({ formData, toast }, { rejectWithValue }) => {

        try {
            console.log(formData, '=======================>');
            const { data } = await patchFailedTransactionRoute({ formData })

            toast.success("User debited successfully")

            return data
        } catch (error) {
            console.log(error);
            toast.warning("User wasn't debited")
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