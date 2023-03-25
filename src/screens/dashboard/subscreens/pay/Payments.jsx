import { toast } from 'react-toastify'
import React, { useReducer } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { FiChevronRight } from 'react-icons/fi'

import { appPaymentTypes } from '../../../../data'
import { useGlobalContext } from '../../../../context'
import IconImage from '../../../../components/images/IconImage'
import PayToSwapnPayUser from './pay_swapnpay_user/PayToSwapnPayUser'
import PayViaBankTransfer from './pay_via_banktransfer/PayViaBankTransfer'
import { FormTextInput, HeaderText, IconButton } from '../../../../components'
import PaySchoolChargesStepOne from './pay_school_charges/PaySchoolChargesStepOne'
import PaySchoolChargesStepTwo from './pay_school_charges/PaySchoolChargesStepTwo'
import PaySchoolChargesStepFour from './pay_school_charges/PaySchoolChargesStepFour'
import PaySchoolChargesStepThree from './pay_school_charges/PaySchoolChargesStepThree'


const Payments = () => {
	const { updateModalPages } = useGlobalContext()

	const [config, updateConfig] = useReducer((prev, next) => {
		return { ...prev, ...next }
	}, {
		showPaySchoolDuesStepThree: false, showPaySchoolDuesStepFour: false,
		showDefault: true, showPaySchoolDuesStepOne: false, showPaySchoolDuesStepTwo: false,
		showSendViaUsername: false, showSendViaBankTransfer: false, showConfirmTransaction: false,
	})
	const [formData, updateFormData] = useReducer((prev, next) => {
		return { ...prev, ...next }
	}, {
		bank: '', currency: 'NGN'
	})

	const handleChange = (e) => {
		updateFormData({ [e.target.name]: e.target.value })
	}


	return (
		<div className="fixed h-screen z-20 bg-[#11111190] w-full backdrop-blur-sm flex justify-end">
			{config.showDefault && (
				<div className="w-[40%] h-full bg-gray-100 px-20 py-20 flex flex-col space-y-5">
					<BsArrowLeft
						size={20}
						className='cursor-pointer'
						onClick={() => updateModalPages({ showPaymentScreen: false })}
					/>

					<div className="space-y-2">
						<HeaderText
							text={'Payment'}
							classes={'font-bold text-[20px] text-black'}
						/>
						<p className='text-[14px]'>Select how you would want to Send money.</p>
					</div>

					<div className="flex flex-col w-full">
						{appPaymentTypes.map((item, index) => (
							<div
								key={index}
								onClick={() => {
									if (item.type === 'USERNAME') {
										updateConfig({ showDefault: false, showSendViaUsername: true })
									}
									if (item.type === 'TRANSFER') {
										updateConfig({ showDefault: false, showSendViaBankTransfer: true })
									}
									if (item.type === 'SCHOOL') {
										updateConfig({ showDefault: false, showPaySchoolDuesStepOne: true, showPaySchoolDuesStepTwo: false })
									}
								}}
								className='w-full mb-4 py-3 px-4 rounded-lg bg-white flex justify-between items-center cursor-pointer transition-all ease-in-out duration-500 hover:translate-x-1'
							>
								<div className="flex items-center space-x-3">
									<IconImage
										icon={item.icon}
									/>
									<div className="flex flex-col">
										<p className='text-[14px] font-bold'>{item.title}</p>
										<p className='text-[12px]'>{item.intro}</p>
									</div>
								</div>

								<FiChevronRight />
							</div>
						))}
					</div>
				</div>
			)}

			{config.showSendViaUsername && (
				<PayToSwapnPayUser
					handleChange={handleChange}
					updateConfig={updateConfig}
				/>
			)}

			{config.showSendViaBankTransfer && (
				<PayViaBankTransfer
					formData={formData}
					handleChange={handleChange}
					updateConfig={updateConfig}
				/>
			)}

			{config.showPaySchoolDuesStepOne && (
				<PaySchoolChargesStepOne
					handleChange={handleChange}
					updateConfig={updateConfig}
				/>
			)}

			{config.showPaySchoolDuesStepTwo && (
				<PaySchoolChargesStepTwo
					handleChange={handleChange}
					updateConfig={updateConfig}
				/>
			)}

			{config.showPaySchoolDuesStepThree && (
				<PaySchoolChargesStepThree
					handleChange={handleChange}
					updateConfig={updateConfig}
				/>
			)}

			{config.showPaySchoolDuesStepFour && (
				<PaySchoolChargesStepFour
					formData={formData}
					handleChange={handleChange}
					updateConfig={updateConfig}
				/>
			)}

			{config.showConfirmTransaction && (
				<div className="w-[40%] h-full bg-gray-100 px-20 py-20 flex flex-col space-y-5">
					<BsArrowLeft
						size={20}
						className='cursor-pointer'
						onClick={() => updateConfig({ showDefault: false, showSendViaUsername: true, showConfirmTransaction: false })}
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
								toast.success('Transaction successful')

								updateConfig({ showDefault: true, showSendViaUsername: false, showConfirmTransaction: false })
							}}
						/>
					</div>
				</div>
			)}
		</div>
	)
}

export default Payments