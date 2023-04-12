import { toast } from 'react-toastify'
import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'

import { useGlobalContext } from '../../../../../context'
import { FormDateInput, FormPasswordInput, FormTextInput, HeaderText, IconButton } from '../../../../../components'


const VerifyDriversLicense = () => {
	const { updateModalPages } = useGlobalContext()

	const handleChange = (e) => {

	}

	return (
		<div className="fixed h-screen z-20 bg-[#11111190] w-full backdrop-blur-sm flex justify-end">
				<div className="w-full lg:w-[40%] h-full bg-gray-100 px-5 lg:px-20 py-20 flex flex-col space-y-5">
				<div>
					<BsArrowLeft
						size={20}
						className='cursor-pointer'
						onClick={() => updateModalPages({ showDriverCardVerififcationScreen: false })}
					/>

					<div className="mb-5">
						<HeaderText
							text={'Drivers License Verification'}
							classes={'font-bold text-[20px] text-black'}
						/>
						<p className='text-[14px]'>Enter the details below to verify yourself</p>
					</div>

					<div className="flex flex-col w-full space-y-2">
						<FormTextInput
							name={'email'}
							handleChange={handleChange}
							placeHolder={'Drivers card number'}
							classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-2'}
						/>
						<FormDateInput
							name={'dateOfBirth'}
							label={'Date of birth'}
							handleChange={handleChange}
							placeHolder={'Date of birth'}
							classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-2'}
						/>
						<IconButton
							type={'submit'}
							title={'Snap a selfie'}
							width={'w-full'}
							iconType={'icon-camera'}
							textColor={'text-primary'}
							classes={'py-4 text-[14px] rounded-xl bg-white border border-primary'}
							handleClick={() => {
								// FILE UPLOAD
							}}
						/>
					</div>
				</div>

				<IconButton
					type={'submit'}
					title={'Verify'}
					width={'w-full'}
					iconType={'icon-right'}
					textColor={'text-white'}
					classes={'py-4 text-[16px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
					handleClick={() => {
						updateModalPages({ showDriverCardVerififcationScreen: false })
					}}
				/>
			</div>

		</div>
	)
}

export default VerifyDriversLicense