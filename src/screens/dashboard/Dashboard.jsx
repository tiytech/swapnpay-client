import React, { useEffect } from 'react'

import { useGlobalContext } from '../../context'
import {
	Home, Cards, Settings, Swap,
	AdminDashboard, AdminSchoolPayments, AdminBalances, AdminTransactions, AdminSettings
} from '../'
import { MobileSideBar, ModalPages, Modals, SideBar, TopBar } from '../../components'
import { useSelector } from 'react-redux'


const Dashboard = () => {
	const { dashboardConfig, updateDashboardConfig } = useGlobalContext()
	const { user } = useSelector(state => state.auth)

	useEffect(() => {
		if (user?.credentials?.is_administrator) {
			updateDashboardConfig({ activeLink: 'Admin Home' })
		}
	}, [user])

	return (
		<div className='relative flex font-lato'>
			<Modals />

			<ModalPages />

			<MobileSideBar />

			<SideBar />

			<div className="w-full flex flex-col bg-gray-100 h-screen overflow-y-auto scrollbar-4">
				<TopBar />

				{dashboardConfig.activeLink === 'Home' && (
					<Home />
				)}
				{dashboardConfig.activeLink === 'Cards' && (
					<Cards />
				)}
				{dashboardConfig.activeLink === 'Swap' && (
					<Swap />
				)}
				{dashboardConfig.activeLink === 'Settings' && (
					<Settings />
				)}


				{/* ADMIN DASHBOARD */}
				{dashboardConfig.activeLink === 'Admin Home' && (
					<AdminDashboard />
				)}
				{dashboardConfig.activeLink === 'School Payments' && (
					<AdminSchoolPayments />
				)}
				{dashboardConfig.activeLink === 'Balances' && (
					<AdminBalances />
				)}
				{dashboardConfig.activeLink === 'Transactions' && (
					<AdminTransactions />
				)}
				{dashboardConfig.activeLink === 'Admin Settings' && (
					<AdminSettings />
				)}
			</div>
		</div>
	)
}

export default Dashboard