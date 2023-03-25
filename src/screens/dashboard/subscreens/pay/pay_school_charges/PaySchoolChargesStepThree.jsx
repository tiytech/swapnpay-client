import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'

import { FormSelectInput, FormTextInput, HeaderText, IconButton } from '../../../../../components'


const PaySchoolChargesStepThree = ({ handleChange, updateConfig }) => {
	return (
		<div className="w-[40%] h-full bg-gray-100 px-20 py-20 flex flex-col space-y-5">
			<BsArrowLeft
				size={20}
				className='cursor-pointer'
				onClick={() => updateConfig({ showDefault: true, showPaySchoolDues: false })}
			/>

			<div className="space-y-2">
				<HeaderText
					text={'Sponsor ID'}
					classes={'font-bold text-[20px] text-black'}
				/>
				<p className='text-[14px]'>This is the person that is responsible for funding your education.</p>
			</div>

			<div className="flex flex-col w-full">
				<FormSelectInput
					name={'country'}
					showLabel={false}
					handleChange={handleChange}
					label={'Identification type'}
					classes={'py-4 rounded-xl mb-5'}
					items={['NIN', 'Voters Card', 'Passport', 'Drivers License']}
				/>
				<FormTextInput
					name={'amount'}
					padding={'py-4 px-5'}
					placeHolder={'NIN'}
					handleChange={handleChange}
					classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-5'}
				/>

				<div className="flex flex-col space-y-2 p-2 bg-white rounded-lg mb-5">
					<p className='text-[12px]'>Tap the button below to Upload your admission letter containing the school account number and IBAN number</p>
					<IconButton
						type={'submit'}
						width={'w-full'}
						iconType={'icon-add'}
						textColor={'text-primary'}
						title={'Add File'}
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
					handleClick={() => updateConfig({ showDefault: false, showPaySchoolDuesStepOne: false, showPaySchoolDuesStepTwo: false, showPaySchoolDuesStepThree: false, showPaySchoolDuesStepFour: true })}
				/>
			</div>
		</div>
	)
}

export default PaySchoolChargesStepThree