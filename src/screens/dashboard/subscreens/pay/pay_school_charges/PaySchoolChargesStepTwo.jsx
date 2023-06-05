import React, { useRef } from 'react'
import { toast } from 'react-toastify'
import { BsArrowLeft } from 'react-icons/bs'

import { FormTextInput, HeaderText, IconButton } from '../../../../../components'


const PaySchoolChargesStepTwo = ({ formData, updateFormData, handleChange, updateConfig }) => {
	const fileRef = useRef(null)

	const handleSubmit = (e) => {
		e.preventDefault()

		if (!formData.school_account_number || !formData.school_iban || !formData.admission_letter) return toast.error('All fields are required')
		console.log(formData)

		updateConfig({ showDefault: false, showPaySchoolDuesStepOne: false, showPaySchoolDuesStepTwo: false, showPaySchoolDuesStepThree: true })
	}

	return (
        <div className="w-full md:w-[40%] h-full bg-gray-100 px-6 lg:px-20 py-20 flex flex-col space-y-5">
			<BsArrowLeft
				size={20}
				className='cursor-pointer'
				onClick={() => updateConfig({ showDefault: false, showPaySchoolDuesStepOne: true, showPaySchoolDuesStepTwo: false })}
			/>

			<div className="space-y-2">
				<HeaderText
					text={'More Details'}
					classes={'font-bold text-[20px] text-black'}
				/>
				<p className='text-[12px]'>Easily and securely pay your Tuition on SwapnPay.</p>
			</div>

			<div className="flex flex-col w-full">
				<form onSubmit={handleSubmit}>
					<FormTextInput
						name={'school_account_number'}
						padding={'py-3 px-5'}
						handleChange={handleChange}
						placeHolder={'School account number'}
						classes={'text-[12px] placeholder:text-[12px] rounded-xl mb-2'}
					/>
					<FormTextInput
						name={'school_iban'}
						padding={'py-3 px-5'}
						placeHolder={'School IBAN number'}
						handleChange={handleChange}
						classes={'text-[12px] placeholder:text-[12px] rounded-xl mb-10'}
					/>

					<div className={`${formData.admission_letter ? 'bg-slate-100' : 'bg-white'} flex flex-col space-y-2 p-2 rounded-lg mb-5`}>
						<p className='text-[12px]'>Tap the button below to Upload your admission letter containing the school account number and IBAN number</p>
						<input
							type="file"
							ref={fileRef}
							className='hidden'
							accept='image/jpeg, image/jpg, .pdf'
							onChange={(e) => {
								updateFormData({ admission_letter: e.target.files[0] })
							}}
						/>
						<IconButton
							type={'button'}
							width={'w-full'}
							iconType={'icon-add'}
							textColor={'text-primary'}
							title={'Admission Letter'}
							handleClick={() => fileRef.current.click()}
							classes={'py-4 text-[12px] rounded-xl bg-white border border-primary'}
						/>
					</div>

					<IconButton
						type={'submit'}
						title={'Proceed'}
						width={'w-full'}
						iconType={'icon-right'}
						textColor={'text-white'}
						classes={'py-4 text-[16px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
					// handleClick={() => updateConfig({ showDefault: false, showPaySchoolDuesStepOne: false, showPaySchoolDuesStepTwo: false, showPaySchoolDuesStepThree: true })}
					/>
				</form>
			</div>
		</div>
	)
}

export default PaySchoolChargesStepTwo