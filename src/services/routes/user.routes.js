import { API } from "../config"


export const fetchDollarWalletBalanceRoute = () => API.get(`/wallets/get-dollar-wallet`)


export const fetchNairaWalletBalanceRoute = () => API.get(`/wallets/naira-balance`)


export const transferToSwapnPayUserRoute = (formData) => API.post(`/transactions/interwallet-transfer`, formData)


export const fetchBanksListRoute = () => API.get(`/transactions/bank-list`)


export const bankTransferRoute = (formData) => API.post(`/transactions/bank-withdrawal`, formData)


export const schoolPaymentRoute = (formData) => API.post(`/administrator/pay-school-fees`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })


export const fetchDataBundlesRoute = (network) => API.get(`/utilities/data-bundles/${network}`)


export const airtimeDataPurchaseRoute = (formData) => API.post(`/utilities/airtime-data-purchase`, formData)


export const fetchCablePlansRoute = (cable) => API.get(`/utilities/cable-plans/${cable}`)


export const cableAndElectricitySubscriptionRoute = (formData) => API.post(`/utilities/electricity-cable`, formData)


export const electricityDiscosRoute = () => API.get(`/utilities/electricity-plans/aedc`)