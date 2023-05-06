import { toast } from 'react-toastify'
import React, { useReducer, useState, useEffect } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { useGlobalContext } from '../../../../../context'
import SettingsConfirimChangePin from './SettingsConfirimChangePin'
import { FormPasswordInput, HeaderText, IconButton, LoadingButtonOne } from '../../../../../components'
import { resetPinOtpAction } from '../../../../../services/actions/user.actions'


const SettingsChangePin = ({ }) => {
	const { updateModalPages } = useGlobalContext()
	const [formData, setformData] = useState({})
	const { user } = useSelector(state => state.auth)
	const { resetPinOtpRequestLoading } = useSelector(state => state.user)
	const dispatch = useDispatch()

	const [config, updateConfig] = useReducer((prev, next) => {
		return { ...prev, ...next }
	}, {
		showDefault: true, showConfirmTransaction: false
	})	

	const handleChange = (e) => {
		setformData({ ...formData, [e.target.name]: e.target.value })

	}
	useEffect(() => {
		setformData({ ...formData, email: user?.data?.email })

	}, [formData.transaction_pin])


	return (
		<div className="fixed h-screen z-20 bg-[#11111190] w-full backdrop-blur-sm flex justify-end">
			{config.showDefault && (
				<div className="w-full lg:w-[40%] h-full bg-gray-100 px-5 lg:px-20 py-20 flex flex-col space-y-5">
					<BsArrowLeft
						size={20}
						className='cursor-pointer'
						onClick={() => updateModalPages({ showChangePinScreen: false })}
					/>

					<div className="space-y-2">
						<HeaderText
							text={'Change Pin'}
							classes={'font-bold text-[20px] text-black'}
						/>
						<p className='text-[14px] hidden'></p>
					</div>

					<div className="flex flex-col w-full space-y-5">
						<FormPasswordInput
							showIcon={true}
							name={'transaction_pin'}
							handleChange={handleChange}
							placeHolder={'New transaction_pin'}
							classes={'text-[14px] placeholder:text-[14px] rounded-xl pr-14'}
						/>
						<FormPasswordInput
							showIcon={true}
							name={'newPin'}
							handleChange={handleChange}
							placeHolder={'Confirm new transaction_pin'}
							classes={'text-[14px] placeholder:text-[14px] rounded-xl pr-14'}
						/>

						{resetPinOtpRequestLoading == true ?
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
										if (formData.transaction_pin == formData.newPin && formData.transaction_pin != '' && formData.transaction_pin.length == 4) {

											const response = await dispatch(resetPinOtpAction({ formData }))

											if (response.error == undefined) {
												updateConfig({ showDefault: false, showConfirmTransaction: true })
											} else {
												return
											}

										} else {
											toast.warn('Ensure both fields are same and maximum entry is 4 digits')
											return;
										}
									}}
								/>
							)}

					</div>
				</div>
			)}

			{config.showConfirmTransaction && (

				<SettingsConfirimChangePin
					updateConfig={updateConfig}
					formData={formData}
					setformData={setformData}
				/>
			)}
		</div>
	)
}

export default SettingsChangePin