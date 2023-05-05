import React, { useReducer, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'

import { FormTextInput, HeaderText, IconButton, LoadingButtonOne } from '../../../../../components'
import { resetPinOtpVerificationAction, resetTransactionPinAction } from '../../../../../services/actions/user.actions'


const SettingsConfirimChangePin = ({ updateConfig, formData, setformData }) => {
	const { user } = useSelector(state => state.auth)


	const { resetTransactionPinLoading } = useSelector(state => state.user)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleChange = (e) => {
		setformData({ ...formData, [e.target.name]: e.target.value })

	}


	return (
		<div className="w-full lg:w-[40%] h-full bg-gray-100 px-5 lg:px-20 py-20 flex flex-col space-y-5">
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
				<p className='text-[14px]'>Enter the OTP sent to {user?.data?.email} to confirm this transaction.</p>
			</div>

			<div className="flex flex-col w-full space-y-5">
				<FormTextInput
					name={'verification_code'}
					padding={'py-3 px-5'}
					placeHolder={'Enter OTP here'}
					handleChange={handleChange}
					classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-2'}
				/>

				{resetTransactionPinLoading == true ?
					(
						<LoadingButtonOne
							loadingType={'one'}
							textColor={'text-white'}
							width={'w-full md:w-full'}
							classes={'text-[14px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
						/>
					)
					: (
						<IconButton
							type={'submit'}
							title={'Confirm'}
							width={'w-full'}
							iconType={'icon-right'}
							textColor={'text-white'}
							classes={'py-4 text-[16px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
							handleClick={async () => {
								const response = await dispatch(resetPinOtpVerificationAction({ formData }))

								if (response.error == undefined) {
									const response2 = await dispatch(resetTransactionPinAction({ formData, toast, navigate}))
									if (response2.error == undefined) {
	
										toast.success('Pin changed successfully')
										window.location.href = '/dashboard';
										

										updateConfig({ showDefault: false, showConfirmTransaction: true })
									}
								} else {
									return
								}



							}}
						/>
					)}

			</div>
		</div>
	)
}

export default SettingsConfirimChangePin