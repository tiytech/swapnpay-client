import React from 'react'

import { useGlobalContext } from '../../context'
import { Home, Cards, Settings, Swap, Payments } from '../'
import { MobileSideBar, ModalPages, Modals, SideBar, TopBar } from '../../components'


const Dashboard = () => {
	const { dashboardConfig, updateDashboardConfig } = useGlobalContext()

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
				{/* {dashboardConfig.activeLink === 'Pay School Tuition' && (
					<Payments />
				)} */}
				{dashboardConfig.activeLink === 'Cards' && (
					<Cards />
				)}
				{dashboardConfig.activeLink === 'Swap' && (
					<Swap />
				)}
				{dashboardConfig.activeLink === 'Settings' && (
					<Settings />
				)}
			</div>
		</div>
	)
}

export default Dashboard