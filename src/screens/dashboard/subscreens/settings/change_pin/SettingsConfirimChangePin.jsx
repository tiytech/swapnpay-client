import React from 'react'
import { toast } from 'react-toastify'
import { BsArrowLeft } from 'react-icons/bs'

import { FormTextInput, HeaderText, IconButton } from '../../../../../components'


const SettingsConfirimChangePin = ({ updateConfig }) => {
	const handleChange = (e) => {

	}

	return (
		<div className="w-[40%] h-full bg-gray-100 px-20 py-20 flex flex-col space-y-5">
			<BsArrowLeft
				size={20}
				className='cursor-pointer'
				onClick={() => updateConfig({ showDefault: true, showConfirmTransaction: false })}
			/>

			<div className="space-y-2">
				<HeaderText
					text={'Confirmation'}
					classes={'font-bold text-[20px] text-black'}
				/>
				<p className='text-[14px]'>Enter the OTP sent to ****doe12@gmail.com to confirm this transaction.</p>
			</div>

			<div className="flex flex-col w-full space-y-5">
				<FormTextInput
					name={'username'}
					padding={'py-3 px-5'}
					placeHolder={'Enter OTP here'}
					handleChange={handleChange}
					classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-2'}
				/>

				<IconButton
					type={'submit'}
					title={'Confirm'}
					width={'w-full'}
					iconType={'icon-right'}
					textColor={'text-white'}
					classes={'py-4 text-[16px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
					handleClick={() => {
						toast.info('Pin update successful!')

						updateConfig({ showDefault: true, showConfirmTransaction: false })
					}}
				/>
			</div>
		</div>
	)
}

export default SettingsConfirimChangePin