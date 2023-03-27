import React from 'react'

import { useGlobalContext } from '../../../../context'
import { SettingsItemCard } from '../../../../components'


const Security = () => {
	const { modalPages, updateModalPages } = useGlobalContext()

	return (
		<div className='flex flex-col space-y-5 w-full'>
			<SettingsItemCard
				title={'Change Transaction Pin'}
				handleClick={() => updateModalPages({ showChangePinScreen: !modalPages.showChangePinScreen })}
			/>
			<SettingsItemCard
				title={'Change Password'}
				handleClick={() => updateModalPages({ showChangePasswordScreen: !modalPages.showChangePasswordScreen })}
			/>
		</div>
	)
}

export default Security