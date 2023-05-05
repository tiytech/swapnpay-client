import React, { useRef } from 'react'
import { toast } from 'react-toastify'
import { BsArrowLeft } from 'react-icons/bs'

import { FormSelectInput, FormTextInput, HeaderText, IconButton } from '../../../../../components'


const PaySchoolChargesStepThree = ({ formData, updateFormData, handleChange, updateConfig }) => {
	const fileRef = useRef(null)

	const handleSubmit = (e) => {
		e.preventDefault()

		if (!formData.sponsor_id_type || !formData.sponsor_id_number || !formData.sponsor_id) return toast.error('All fields are required')
		console.log(formData)

		updateConfig({ showDefault: false, showPaySchoolDuesStepOne: false, showPaySchoolDuesStepTwo: false, showPaySchoolDuesStepThree: false, showPaySchoolDuesStepFour: true })
	}

	return (
		<div className="w-[40%] h-full bg-gray-100 px-20 py-20 flex flex-col space-y-5">
			<BsArrowLeft
				size={20}
				className='cursor-pointer'
				onClick={() => updateConfig({ showDefault: false, showPaySchoolDuesStepTwo: true, showPaySchoolDuesStepThree: false })}
			/>

			<div className="space-y-2">
				<HeaderText
					text={'Sponsor ID'}
					classes={'font-bold text-[20px] text-black'}
				/>
				<p className='text-[12px]'>This is the person that is responsible for funding your education.</p>
			</div>

			<div className="flex flex-col w-full">
				<form onSubmit={handleSubmit}>
					<FormSelectInput
						showLabel={false}
						name={'sponsor_id_type'}
						handleChange={handleChange}
						label={'Identification type'}
						classes={'py-4 rounded-xl mb-2'}
						items={['NIN', 'Voters Card', 'Passport', 'Drivers License']}
					/>
					<FormTextInput
						padding={'py-4 px-5'}
						name={'sponsor_id_number'}
						handleChange={handleChange}
						placeHolder={`${formData.sponsor_id_type} ID`}
						classes={'text-[12px] placeholder:text-[12px] rounded-xl mb-10'}
					/>

					<div className="flex flex-col space-y-2 p-2 bg-white rounded-lg mb-5">
						<p className='text-[12px]'>Tap the button below to Upload your admission letter containing the school account number and IBAN number</p>
						<input
							type="file"
							ref={fileRef}
							className='hidden'
							accept='image/jpeg, image/jpg, .pdf'
							onChange={(e) => {
								updateFormData({ sponsor_id: e.target.files[0] })
							}}
						/>
						<IconButton
							type={'button'}
							width={'w-full'}
							iconType={'icon-add'}
							textColor={'text-primary'}
							title={`Upload ${formData.sponsor_id_type}`}
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
					// handleClick={() => updateConfig({ showDefault: false, showPaySchoolDuesStepOne: false, showPaySchoolDuesStepTwo: false, showPaySchoolDuesStepThree: false, showPaySchoolDuesStepFour: true })}
					/>
				</form>
			</div>
		</div>
	)
}

export default PaySchoolChargesStepThree