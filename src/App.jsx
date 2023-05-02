import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { About, Landing, SwapScreen, Login, Signup, ForgotPassword, ResetPassword, NotFound, PrivateRoute, Dashboard, } from './screens'


const App = () => {
	return (
		<BrowserRouter>
			<ToastContainer />
			<Routes>
				{/* PUBLIC */}
				<Route path="/" element={<Landing />} />
				<Route path="/about" element={<About />} />
				<Route path="/swap" element={<SwapScreen />} />

				{/* AUTH */}
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/reset-password" element={<ResetPassword />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />

				{/* DASHBOARD */}
				<Route path="/dashboard" element={
					<PrivateRoute redirectTo={'/login'}>
						<Dashboard />
					</PrivateRoute>
				} />

				{/* 404 */}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
