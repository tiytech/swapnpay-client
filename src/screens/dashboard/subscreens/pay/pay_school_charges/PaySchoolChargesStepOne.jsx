import React from 'react'
import { toast } from 'react-toastify'
import { BsArrowLeft } from 'react-icons/bs'

import { countries } from '../../../../../data'
import { FormSelectInput, FormTextInput, HeaderText, IconButton } from '../../../../../components'


const PaySchoolChargesStepOne = ({ formData, handleChange, updateConfig }) => {
	const handleSubmit = (e) => {
		e.preventDefault()

		if (!formData.student_name || !formData.name_of_school || !formData.country) return toast.error('All fields are required')
		console.log(formData)

		updateConfig({ showDefault: false, showPaySchoolDuesStepOne: false, showPaySchoolDuesStepTwo: true })
	}

	return (
        <div className="w-full md:w-[40%] h-full bg-gray-100 px-6 lg:px-20 py-20 flex flex-col space-y-5">
			<BsArrowLeft
				size={20}
				className='cursor-pointer'
				onClick={() => updateConfig({ showDefault: true, showPaySchoolDuesStepOne: false })}
			/>

			<div className="space-y-2">
				<HeaderText
					text={'Pay for School'}
					classes={'font-bold text-[20px] text-black'}
				/>
				<p className='text-[14px]'>Easily and securely pay your Tuition on SwapnPay.</p>
			</div>

			<div className="flex flex-col w-full">
				<form onSubmit={handleSubmit}>
					{/* <FormSelectInput
					name={'country'}
					showLabel={false}
					items={['Admission Fee', 'Tuition Fee']}
					label={'What are you paying for?'}
					handleChange={handleChange}
					classes={'py-3 rounded-xl mb-2'}
				/> */}
					<FormTextInput
						name={'student_name'}
						padding={'py-3 px-5'}
						placeHolder={'Student full name'}
						handleChange={handleChange}
						classes={'text-[12px] placeholder:text-[12px] rounded-xl mb-2'}
					/>
					<FormTextInput
						name={'name_of_school'}
						padding={'py-3 px-5'}
						placeHolder={'Name of school'}
						handleChange={handleChange}
						classes={'text-[12px] placeholder:text-[12px] rounded-xl mb-2'}
					/>
					<FormSelectInput
						name={'country'}
						showLabel={false}
						items={countries}
						label={'Select school country'}
						handleChange={handleChange}
						classes={'py-3 rounded-xl mb-10'}
					/>


					<IconButton
						type={'submit'}
						title={'Confirm'}
						width={'w-full'}
						iconType={'icon-right'}
						textColor={'text-white'}
						classes={'py-4 text-[16px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
					// handleClick={() => updateConfig({ showDefault: false, showPaySchoolDuesStepOne: false, showPaySchoolDuesStepTwo: true })}
					/>
				</form>
			</div>
		</div>
	)
}

export default PaySchoolChargesStepOne