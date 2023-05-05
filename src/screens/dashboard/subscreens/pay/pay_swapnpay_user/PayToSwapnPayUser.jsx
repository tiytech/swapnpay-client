import { toast } from 'react-toastify'
import React, { useReducer } from 'react'
import { BsArrowLeft } from 'react-icons/bs'

import { appBeneficiaries } from '../../../../../data'
import { FormTextInput, HeaderText, IconButton, TransactionConfirmationText } from '../../../../../components'


const PayToSwapnPayUser = ({ formData, handleChange, updateConfig }) => {
	const handleSubmit = (e) => {
		e.preventDefault()

		if (isNaN(formData.amount)) return toast.error('Amount is not a number')
		if (!formData.receiver_username || !formData.narration || !formData.amount) return toast.error('All fields are required')
		console.log(formData)

		updateConfig({ showDefault: false, showSendViaUsername: false, showConfirmTransferToSwapnPayUser: true })
	}


	return (
		<div className="w-[40%] h-full bg-gray-100 px-20 py-20 flex flex-col space-y-5">
			<BsArrowLeft
				size={20}
				className='cursor-pointer'
				onClick={() => updateConfig({ showDefault: true, showSendViaUsername: false })}
			/>

			<div className="space-y-2">
				<HeaderText
					text={'SwapnPay User'}
					classes={'font-bold text-[20px] text-black'}
				/>
				<p className='text-[12px]'>Pay another registered user with the use of their username.</p>
			</div>

			<div className="flex flex-col w-full">
				<div className='mb-5'>
					<HeaderText
						family={'font-lato'}
						text={'Recent Beneficiaries'}
						classes={'font-bold text-[16px] text-black'}
					/>
					<div className="flex space-x-4 items-center w-full">
						{appBeneficiaries.map((beneficiary, index) => (
							<div
								key={index}
								className="flex flex-col items-center"
							>
								<div
									className={`w-10 h-10 flex flex-col text-white text-[12px] font-bold justify-center rounded-full text-center ${index % 2 === 0 ? 'bg-slate-600' : 'bg-indigo-600'}`}
								>
									{beneficiary.initials}
								</div>
								<p className="text-[12px]">{beneficiary.name}</p>
							</div>
						))}
					</div>
				</div>

				<form onSubmit={handleSubmit}>
					<FormTextInput
						name={'receiver_username'}
						padding={'py-3 px-5'}
						placeHolder={'@Username'}
						handleChange={handleChange}
						classes={'text-[12px] placeholder:text-[12px] rounded-xl mb-2'}
					/>
					<FormTextInput
						type={'text'}
						name={'amount'}
						padding={'py-3 px-5'}
						placeHolder={'Amount'}
						handleChange={handleChange}
						classes={'text-[12px] placeholder:text-[12px] rounded-xl mb-2'}
					/>
					<FormTextInput
						name={'narration'}
						padding={'py-3 px-5'}
						placeHolder={'Narration'}
						handleChange={handleChange}
						classes={'text-[12px] placeholder:text-[12px] rounded-xl mb-5'}
					/>

					<TransactionConfirmationText />

					<IconButton
						type={'submit'}
						title={'Confirm'}
						width={'w-full'}
						iconType={'icon-right'}
						textColor={'text-white'}
						classes={'py-4 text-[16px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
					// handleClick={() => updateConfig({ showDefault: false, showSendViaUsername: false, showConfirmTransaction: true })}
					/>
				</form>
			</div>
		</div>
	)
}

export default PayToSwapnPayUser