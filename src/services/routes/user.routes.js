import { API } from '../config'



export const getNairaWalletDetails = (token) => API.get('/wallets/get-naira-wallet', { headers: { Authorization: `Bearer ${token}` } })
export const receiveWithCard = (formData, token) => API.post('/transactions/flutterwave-card-charge', formData, { headers: { Authorization: `Bearer ${token}` } })
export const resetPasswordOtpRoute = (formData) => API.post('/user/forgot-password-otp', formData)
export const resetPinOtpRoute = (formData, token) => API.post('/user/receive-pin-reset-code', formData, { headers: { Authorization: `Bearer ${token}` } })
export const resetPinOtpVerification = (formData, token) => API.post('/user/pin-reset-verification', formData, { headers: { Authorization: `Bearer ${token}` } })
export const resetTransactionPin = (formData) => API.patch('/user/reset-transaction-pin', formData)
export const verifyPasswordOtpAndResetRoute = (formData) => API.post('/user/', formData)
export const iDverificationRoute = (formData, token) => API.put('/profiles/profile', formData, { headers: { Authorization: `Bearer ${token}`,"content-type": "multipart/form-data" } })

