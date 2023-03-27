import React from 'react'

import { useGlobalContext } from '../../../../context'
import { appVerificationTypes } from '../../../../data'
import { SettingsItemCard } from '../../../../components'


const IdentityVerification = () => {
	const { modalPages, updateModalPages } = useGlobalContext()

	return (
		<div className='flex flex-col space-y-5 w-full'>
			{appVerificationTypes.map((item, index) => (
				<SettingsItemCard
					key={index}
					title={item.title}
					handleClick={() => {
						if (item.title === 'NIN') {
							updateModalPages({ showNinVerififcationScreen: !modalPages.showNinVerififcationScreen })
						}
						if (item.title === 'BVN') {
							updateModalPages({ showBvnVerififcationScreen: !modalPages.showBvnVerififcationScreen })
						}
						if (item.title === 'Voters Card') {
							updateModalPages({ showVoterCardVerififcationScreen: !modalPages.showVoterCardVerififcationScreen })
						}
						if (item.title === 'Drivers License') {
							updateModalPages({ showDriverCardVerififcationScreen: !modalPages.showDriverCardVerififcationScreen })
						}
						if (item.title === 'International Passport') {
							updateModalPages({ showInternationalPassportVerififcationScreen: !modalPages.showInternationalPassportVerififcationScreen })
						}
					}}
				/>
			))}
		</div>
	)
}

export default IdentityVerification