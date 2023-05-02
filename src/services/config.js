import axios from 'axios'
import { decode } from 'html-entities'

let USERFROMLS = localStorage.getItem('swapnpay-user') ? JSON.parse(localStorage.getItem('swapnpay-user')) : null


const instance = axios.create({
	baseURL: import.meta.env.VITE_APP_DEV_API,
	headers: {
		// 'Content-Type': 'application/json',
	},
})


instance.interceptors.request.use(
	(req) => {
		USERFROMLS = localStorage.getItem('swapnpay-user') ? JSON.parse(localStorage.getItem('swapnpay-user')) : null
		if (USERFROMLS) {
			req.headers['Authorization'] = `Bearer ${USERFROMLS.access}`
		}
		return req
	},
	(error) => {
		return Promise.reject(error)
	}
)


instance.interceptors.response.use(
	(res) => {
		const test = decode(JSON.stringify(res))
		return JSON.parse(test)
	},
	async (err) => {
		const originalConfig = err.config

		if (err.response) {
			if (err.response.status === 401) {
				localStorage.removeItem('swapnpay-user')
				window.location.href = '/login'

				return instance(originalConfig)
			}
		}

		return Promise.reject(err)
	}
)


export const API = instance