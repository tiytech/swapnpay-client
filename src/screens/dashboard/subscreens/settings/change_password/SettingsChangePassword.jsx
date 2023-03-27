import { toast } from 'react-toastify'
import React, { useReducer } from 'react'
import { BsArrowLeft } from 'react-icons/bs'

import { useGlobalContext } from '../../../../../context'
import SettingsConfirimChangePassword from './SettingsConfirimChangePassword'
import { FormPasswordInput, HeaderText, IconButton } from '../../../../../components'


const SettingsChangePassword = () => {
	const { updateModalPages } = useGlobalContext()

	const [config, updateConfig] = useReducer((prev, next) => {
		return { ...prev, ...next }
	}, {
		showDefault: true, showConfirmTransaction: false
	})

	const handleChange = (e) => {

	}

	return (
		<div className="fixed h-screen z-20 bg-[#11111190] w-full backdrop-blur-sm flex justify-end">
			{config.showDefault && (
				<div className="w-[40%] h-full bg-gray-100 px-20 py-20 flex flex-col space-y-5">
					<BsArrowLeft
						size={20}
						className='cursor-pointer'
						onClick={() => updateModalPages({ showChangePasswordScreen: false })}
					/>

					<div className="space-y-2">
						<HeaderText
							text={'Change Password'}
							classes={'font-bold text-[20px] text-black'}
						/>
						<p className='text-[14px] hidden'></p>
					</div>

					<div className="flex flex-col w-full space-y-5">
						<FormPasswordInput
							showIcon={false}
							name={'password'}
							handleChange={handleChange}
							placeHolder={'New password'}
							classes={'text-[14px] placeholder:text-[14px] rounded-xl pr-14'}
						/>
						<FormPasswordInput
							showIcon={false}
							name={'newPassword'}
							handleChange={handleChange}
							placeHolder={'Confirm new password'}
							classes={'text-[14px] placeholder:text-[14px] rounded-xl pr-14'}
						/>

						<IconButton
							type={'submit'}
							title={'Confirm'}
							width={'w-full'}
							iconType={'icon-right'}
							textColor={'text-white'}
							classes={'py-4 text-[16px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
							handleClick={() => {
								updateConfig({ showDefault: false, showConfirmTransaction: true })
							}}
						/>
					</div>
				</div>
			)}

			{config.showConfirmTransaction && (
				<SettingsConfirimChangePassword
					updateConfig={updateConfig}
				/>
			)}
		</div>
	)
}

export default SettingsChangePassword