import React, { useReducer } from 'react'

import { IdentityVerification, Profile, Referrals, Security } from './subscreens'
import { HeaderText, ProfileAccountCard } from '../../components'


const Settings = () => {

	const [config, updateConfig] = useReducer((prev, next) => {
		return { ...prev, ...next }
	}, {
		currentTab: 'Profile', showCurrencySelect: false,
	})

	return (
		<div className='pl-8 pr-8 pb-10 mt-20 flex flex-wrap-reverse lg:flex-wrap justify-between items-start w-full'>
			<div className="w-full lg:w-[45%] flex flex-col items-start space-y-2">
				<HeaderText
					text={'Settings'}
					classes={'font-bold text-[20px]'}
				/>
				<div className="flex space-x-5 items-center w-full overflow-x-auto">
					{['Profile', 'Security', 'Referrals', 'Identity Verification'].map((item, index) => (
						<div
							key={index}
							onClick={() => updateConfig({ currentTab: item })}
							className={`w-full py-1 cursor-pointer text-[14px] ${index !== 0 ? 'px-3' : 'pr-3'} ${config.currentTab === item ? 'border-primary border-b-2' : ''}`}
						>{item}</div>
					))}
				</div>

				{config.currentTab === 'Profile' && (
					<Profile />
				)}

				{config.currentTab === 'Security' && (
					<Security />
				)}

				{config.currentTab === 'Referrals' && (
					<Referrals />
				)}

				{config.currentTab === 'Identity Verification' && (
					<IdentityVerification />
				)}
			</div>

			<div className="w-full lg:w-[50%] mb-10 flex flex-col items-start space-y-2">
				<ProfileAccountCard />
			</div>
		</div>
	)
}

export default Settings