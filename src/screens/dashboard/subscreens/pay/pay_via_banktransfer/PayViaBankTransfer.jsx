import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'

import { IconInfo } from '../../../../../assets'
import { appBeneficiaries } from '../../../../../data'
import IconImage from '../../../../../components/images/IconImage'
import { FormBankSelectInput, FormTextInput, HeaderText, IconButton, TransactionConfirmationText } from '../../../../../components'


const PayViaBankTransfer = ({ formData, handleChange, updateConfig }) => {
	return (
		<div className="w-[40%] h-full bg-gray-100 px-20 py-16 flex flex-col space-y-5">
			<BsArrowLeft
				size={20}
				className='cursor-pointer'
				onClick={() => updateConfig({ showDefault: true, showSendViaUsername: false, showSendViaBankTransfer: false })}
			/>

			<div className="space-y-1">
				<HeaderText
					text={'Bank Transfer'}
					classes={'font-bold text-[20px] text-black'}
				/>
				<p className='text-[14px]'>Enter the details of the bank account your sending money to.</p>
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
				<FormBankSelectInput
					bank={formData.bank}
					handleChange={(bank) => {
						updateFormData({ bank: bank.name })
					}}
					classes={'py-3 px-5 rounded-xl mb-2'}
				/>
				<FormTextInput
					name={'username'}
					padding={'py-3 px-5'}
					placeHolder={'@Username'}
					handleChange={handleChange}
					classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-2'}
				/>
				<FormTextInput
					name={'amount'}
					padding={'py-3 px-5'}
					placeHolder={'Amount'}
					handleChange={handleChange}
					classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-2'}
				/>
				<FormTextInput
					name={'narration'}
					padding={'py-3 px-5'}
					placeHolder={'Narration'}
					handleChange={handleChange}
					classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-5'}
				/>

				<TransactionConfirmationText />

				<IconButton
					type={'submit'}
					title={'Proceed'}
					width={'w-full'}
					iconType={'icon-right'}
					textColor={'text-white'}
					classes={'py-4 text-[16px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
					handleClick={() => updateConfig({ showDefault: false, showSendViaUsername: false, showSendViaBankTransfer: false, showConfirmTransaction: true })}
				/>
			</div>
		</div>
	)
}

export default PayViaBankTransfer