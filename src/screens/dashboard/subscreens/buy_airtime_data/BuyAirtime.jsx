import { toast } from 'react-toastify'
import React, { useReducer } from 'react'
import { BsArrowLeft } from 'react-icons/bs'

import { useGlobalContext } from '../../../../context'
import { FormSelectInput, FormTextInput, HeaderText, IconButton } from '../../../../components'


const BuyAirtime = () => {
	const { updateModalPages } = useGlobalContext()

	const [config, updateConfig] = useReducer((prev, next) => {
		return { ...prev, ...next }
	}, {
		showDefault: true, showConfirmTransaction: false
	})

	const handleChange = (e) => {

	}

	return (
		<div className="fixed h-screen z-20 bg-[#11111190] w-full backdrop-blur-sm flex justify-end">
			{config.showDefault && (
				<div className="w-full lg:w-[40%] h-full bg-gray-100 px-5 md:px-20 py-20 flex flex-col space-y-5">
					<BsArrowLeft
						size={20}
						className='cursor-pointer'
						onClick={() => updateModalPages({ showBuyAirtimeScreen: false })}
					/>

					<div className="space-y-2">
						<HeaderText
							text={'Buy Airtime'}
							classes={'font-bold text-[20px] text-black'}
						/>
						<p className='text-[14px] hidden'></p>
					</div>

					<div className="flex flex-col w-full space-y-1">
						<FormSelectInput
							showLabel={false}
							name={'gender'}
							handleChange={handleChange}
							classes={'py-4 rounded-xl mb-5'}
							label={'Select network provider'}
							items={['Mtn', 'Glo', 'Airtel', '9Mobile']}
						/>
						<FormTextInput
							name={'username'}
							padding={'py-4 px-5'}
							placeHolder={'Mobile number'}
							handleChange={handleChange}
							classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-5'}
						/>
						<FormTextInput
							name={'username'}
							padding={'py-4 px-5'}
							placeHolder={'Amount'}
							handleChange={handleChange}
							classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-10'}
						/>

						<IconButton
							type={'submit'}
							title={'Confirm'}
							width={'w-full'}
							iconType={'icon-right'}
							textColor={'text-white'}
							classes={'py-4 text-[16px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
							handleClick={() => {
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

								updateConfig({ showDefault: true, showConfirmTransaction: false })
							}}
						/>
					</div>
				</div>
			)}
		</div>
	)
}

export default BuyAirtime