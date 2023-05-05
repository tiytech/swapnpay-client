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
import ConfirmTransferToSwapnPayUser from './pay_swapnpay_user/ConfirmTransferToSwapnPayUser'
import ConfirmBankTransfer from './pay_via_banktransfer/ConfirmBankTransfer'
import ConfirmSchoolPaymentTransaction from './pay_school_charges/ConfirmSchoolPaymentTransaction'


const Payments = () => {
	const { updateModalPages } = useGlobalContext()

	const [config, updateConfig] = useReducer((prev, next) => {
		return { ...prev, ...next }
	}, {
		showPaySchoolDuesStepThree: false, showPaySchoolDuesStepFour: false, showConfirmSchoolPaymentTransaction: false,
		showDefault: true, showPaySchoolDuesStepOne: false, showPaySchoolDuesStepTwo: false, showConfirmBankTransfer: false,
		showSendViaUsername: false, showSendViaBankTransfer: false, showConfirmTransaction: false, showConfirmTransferToSwapnPayUser: false
	})
	const [formData, updateFormData] = useReducer((prev, next) => {
		return { ...prev, ...next }
	}, {
		bank: '', bankcode: '', account_number: '', fee: 0.0,
		sponsor_id_type: '', sponsor_id_number: '', sponsor_id: '',
		receiver_username: '', narration: '', amount: 0, currency: 'NGN', transaction_pin: '',
		student_name: '', name_of_school: '', country: '', admission_letter: '', school_account_number: '', school_iban: '',
	})

	const handleChange = (e) => {
		if (e.target.name === 'amount') {
			updateFormData({ amount: parseInt(e.target.value) })
		}
		if (e.target.name === 'bankcode') {
			updateFormData({ bankcode: parseInt(e.target.value) })
		}
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
					formData={formData}
					handleChange={handleChange}
					updateConfig={updateConfig}
				/>
			)}

			{config.showSendViaBankTransfer && (
				<PayViaBankTransfer
					formData={formData}
					handleChange={handleChange}
					updateConfig={updateConfig}
					updateFormData={updateFormData}
				/>
			)}

			{config.showPaySchoolDuesStepOne && (
				<PaySchoolChargesStepOne
					formData={formData}
					handleChange={handleChange}
					updateConfig={updateConfig}
				/>
			)}

			{config.showPaySchoolDuesStepTwo && (
				<PaySchoolChargesStepTwo
					formData={formData}
					handleChange={handleChange}
					updateConfig={updateConfig}
					updateFormData={updateFormData}
				/>
			)}

			{config.showPaySchoolDuesStepThree && (
				<PaySchoolChargesStepThree
					formData={formData}
					handleChange={handleChange}
					updateConfig={updateConfig}
					updateFormData={updateFormData}
				/>
			)}

			{config.showPaySchoolDuesStepFour && (
				<PaySchoolChargesStepFour
					formData={formData}
					handleChange={handleChange}
					updateConfig={updateConfig}
					updateFormData={updateFormData}
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
							name={'transaction_pin'}
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

			{config.showConfirmBankTransfer && (
				<ConfirmBankTransfer
					formData={formData}
					handleChange={handleChange}
					updateConfig={updateConfig}
				/>
			)}

			{config.showConfirmTransferToSwapnPayUser && (
				<ConfirmTransferToSwapnPayUser
					formData={formData}
					handleChange={handleChange}
					updateConfig={updateConfig}
				/>
			)}

			{config.showConfirmSchoolPaymentTransaction && (
				<ConfirmSchoolPaymentTransaction
					formData={formData}
					handleChange={handleChange}
					updateConfig={updateConfig}
				/>
			)}
		</div>
	)
}

export default Payments