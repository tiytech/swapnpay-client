import React, { useReducer } from 'react'
import { BsArrowDownCircle } from 'react-icons/bs'

import { FormCurrencyInput, HeaderText, IconButton } from '../../components'


const Swap = () => {
	const [formData, updateFormData] = useReducer((prev, next) => {
		return { ...prev, ...next }
	}, {
		currency: 'NGN', swapToCurrency: 'USD'
	})

	const handleChange = (e) => {

	}

	return (
		<div className='pl-8 pr-8 pb-10 mt-20 flex justify-between items-start w-full'>
			<div className="w-[40%] flex flex-col items-start space-y-5">
				<div className="flex flex-col items-start w-full">
					<HeaderText
						text={'Swap'}
						classes={'font-bold text-[20px]'}
					/>
					<p className="text-[12px]">Easily swap from on currency to another.</p>
				</div>

				<div className="flex flex-col justify-between space-y-4 items-start w-full h-[350px] rounded-xl bg-white px-4 py-6">
					<div className='w-full space-y-5'>
						<FormCurrencyInput
							name={'phone'}
							placeHolder={'Amount'}
							handleChange={handleChange}
							currency={formData.currency}
							classes={'mb-2 rounded-xl py-4 mb-10 border-primary'}
						/>

						<div className="flex justify-center w-full">
							<BsArrowDownCircle
								size={22}
							/>
						</div>

						<FormCurrencyInput
							name={'phone'}
							placeHolder={'Amount'}
							handleChange={handleChange}
							currency={formData.swapToCurrency}
							classes={'mb-2 rounded-xl py-4 mb-10 border-primary'}
						/>
					</div>

					<div className="w-full space-y-2">
						<IconButton
							type={'submit'}
							width={'w-full'}
							handleClick={() => { }}
							iconType={'icon-right'}
							textColor={'text-white'}
							title={'Swap now'}
							classes={'py-4 mt-10 text-[16px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
						/>
						<p className="text-[12px] font-semibold">Current price of dollar to Naira : 740 Naira</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Swap