import { API } from '../config'


export const getUserCountRoutes = () => API.get('/administrator/users-count')

export const getTransactionsRoutes = () => API.get('/administrator/transactions')

export const getReferralFeeRoute = () => API.get('/administrator/referral-fee')

export const patchReferralFeeRoute = (formData) => API.patch('/administrator/referral-fee', formData,)

export const getTranasactionsFeeRoute = () => API.get('/administrator/transactions-fee')

export const patchTransacationsFeeRoute = (formData) => API.patch('/administrator/transactions-fee', formData)

export const getSchoolFeesPaymentRoute = () => API.get('/administrator/pay-school-fees')

export const fetchUnverifiedUsersRoute = () => API.get('/administrator/unverified-users/fetch-all')

export const verifyUserAccountRoute = (formData) => API.patch('/administrator/verify-user', formData)





