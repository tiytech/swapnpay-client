import { toast } from 'react-toastify'
import { BsArrowLeft } from 'react-icons/bs'
import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useGlobalContext } from '../../../../context'
import { FormDataBundlesInput, FormSelectInput, FormTextInput, HeaderText, IconButton } from '../../../../components'
import { userDataPurchase, userFetchDataBundles, userFetchNairaWalletBalance } from '../../../../services/actions/user.actions'


const BuyData = () => {
	const dispatch = useDispatch()

	const { updateModalPages } = useGlobalContext()

	const { user } = useSelector(state => state.auth)
	const { dataBundles, nairaWallet } = useSelector(state => state.user)

	const [config, updateConfig] = useReducer((prev, next) => {
		return { ...prev, ...next }
	}, {
		showDefault: true, showConfirmTransaction: false
	})

	const [formData, updateFormData] = useReducer((prev, next) => {
		return { ...prev, ...next }
	}, {
		network: '', balance: 0, type: '', description: 'data', amount: 0, phone_number: '', transaction_pin: ''
	})

	useEffect(() => {
		dispatch(userFetchNairaWalletBalance())

		if (formData.network) {
			dispatch(userFetchDataBundles({ network: formData.network }))
		}
	}, [formData.network])

	useEffect(() => {
		if (nairaWallet) {
			updateFormData({ balance: nairaWallet?.availableBalance })
		}
	}, [nairaWallet])

	const handleChange = (e) => {
		updateFormData({ [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (user?.credentialss?.user_transaction_pin !== formData.transaction_pin) return toast.error('Invalid transaction pin')
		console.log(formData)

		dispatch(userDataPurchase({ formData, toast, updateConfig }))
	}


	return (
		<div className="fixed h-screen z-20 bg-[#11111190] w-full backdrop-blur-sm flex justify-end">
			{config.showDefault && (
				<div className="w-full lg:w-[40%] h-full bg-gray-100 px-5 md:px-20 py-20 flex flex-col space-y-5">
					<BsArrowLeft
						size={20}
						className='cursor-pointer'
						onClick={() => updateModalPages({ showBuyDataScreen: false })}
					/>

					<div className="space-y-2">
						<HeaderText
							text={'Buy Data'}
							classes={'font-bold text-[20px] text-black'}
						/>
						<p className='text-[14px] hidden'></p>
					</div>

					<div className="flex flex-col w-full space-y-1">
						<FormSelectInput
							name={'network'}
							showLabel={false}
							handleChange={handleChange}
							classes={'py-3 rounded-xl mb-2'}
							label={'Select network provider'}
							items={['MTN', 'GLO', 'AIRTEL', '9MOBILE']}
						/>
						<FormDataBundlesInput
							name={'network'}
							showLabel={false}
							classes={'py-3 rounded-xl mb-2'}
							label={'Data plan'}
							items={dataBundles}
							handleChange={(e) => {
								const index = dataBundles?.findIndex(item => item.id === parseInt(e.target.value))

								updateFormData({ amount: dataBundles[index]?.amount, type: dataBundles[index]?.biller_name })
							}}
						/>
						<FormTextInput
							name={'phone_number'}
							padding={'py-3 px-5'}
							placeHolder={'Mobile number'}
							handleChange={handleChange}
							classes={'text-[12px] placeholder:text-[12px] rounded-xl mb-10'}
						/>

						<IconButton
							type={'submit'}
							title={'Confirm'}
							width={'w-full'}
							iconType={'icon-right'}
							textColor={'text-white'}
							classes={'py-4 text-[16px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
							handleClick={() => {
								if (!formData.network) return toast.error('Network provider is required')
								if (!formData.type) return toast.error('Please select a data plan')
								if (!formData.phone_number) return toast.error('Phone number is required')

								updateConfig({ showDefault: false, showConfirmTransaction: true })
							}}
						/>
					</div>
				</div>
			)}

			{config.showConfirmTransaction && (
				<div className="w-full lg:w-[40%] h-full bg-gray-100 px-5 md:px-20 py-20 flex flex-col space-y-5">
					<BsArrowLeft
						size={20}
						className='cursor-pointer'
						onClick={() => updateConfig({ showDefault: true, showConfirmTransaction: false })}
					/>

					<div className="space-y-2">
						<HeaderText
							text={'Confirm Data Purchase'}
							classes={'font-bold text-[20px] text-black'}
						/>
						<p className='text-[14px]'>Enter your transaction pin to confirm this transaction.</p>
					</div>

					<div className="flex flex-col w-full space-y-5">
						<form onSubmit={handleSubmit}>
							<FormTextInput
								padding={'py-3 px-5'}
								name={'transaction_pin'}
								placeHolder={'Enter transaction pin'}
								handleChange={handleChange}
								classes={'text-[12px] placeholder:text-[12px] rounded-xl mb-2'}
							/>

							<IconButton
								type={'submit'}
								title={'Confirm'}
								width={'w-full'}
								iconType={'icon-right'}
								textColor={'text-white'}
								classes={'py-4 text-[16px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
							/>
						</form>
					</div>
				</div>
			)}
		</div>
	)
}

export default BuyData