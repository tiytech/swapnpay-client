import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'

import { FormTextInput, HeaderText, IconButton } from '../../../../../components'


const PaySchoolChargesStepTwo = ({ handleChange, updateConfig }) => {
	return (
		<div className="w-[40%] h-full bg-gray-100 px-20 py-20 flex flex-col space-y-5">
			<BsArrowLeft
				size={20}
				className='cursor-pointer'
				onClick={() => updateConfig({ showDefault: true, showPaySchoolDues: false })}
			/>

			<div className="space-y-2">
				<HeaderText
					text={'More Details'}
					classes={'font-bold text-[20px] text-black'}
				/>
				<p className='text-[14px]'>Easily and securely pay your Tuition on SwapnPay.</p>
			</div>

			<div className="flex flex-col w-full">
				<FormTextInput
					name={'username'}
					padding={'py-3 px-5'}
					handleChange={handleChange}
					placeHolder={'School account number'}
					classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-2'}
				/>
				<FormTextInput
					name={'amount'}
					padding={'py-3 px-5'}
					placeHolder={'School IBAN number'}
					handleChange={handleChange}
					classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-10'}
				/>

				<div className="flex flex-col space-y-2 p-2 bg-white rounded-lg mb-5">
					<p className='text-[12px]'>Tap the button below to Upload your admission letter containing the school account number and IBAN number</p>
					<IconButton
						type={'submit'}
						width={'w-full'}
						iconType={'icon-add'}
						textColor={'text-primary'}
						title={'Admission Letter'}
						handleClick={() => { }}
						classes={'py-4 text-[14px] rounded-xl bg-white border border-primary'}
					/>
				</div>

				<IconButton
					type={'submit'}
					title={'Proceed'}
					width={'w-full'}
					iconType={'icon-right'}
					textColor={'text-white'}
					classes={'py-4 text-[16px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
					handleClick={() => updateConfig({ showDefault: false, showPaySchoolDuesStepOne: false, showPaySchoolDuesStepTwo: false, showPaySchoolDuesStepThree: true })}
				/>
			</div>
		</div>
	)
}

export default PaySchoolChargesStepTwo