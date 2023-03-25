import React, { useReducer } from 'react'
import { IconLogoWhite } from '../../assets'

import { FormSelectInput, FormTextInput, HeaderText, IconButton, TransactionConfirmationText } from '../../components'
import IconImage from '../../components/images/IconImage'


const Cards = () => {
	const [config, updateConfig] = useReducer((prev, next) => {
		return { ...prev, ...next }
	}, {
		showCreateCard: false
	})

	const handleChange = (e) => {

	}

	return (
		<div className='pl-8 pr-8 pb-10 mt-20 flex justify-between items-start w-full'>
			<div className="w-[40%] flex flex-col items-start space-y-5">
				<div className="flex flex-col items-start w-full">
					<HeaderText
						text={'Cards'}
						classes={'font-bold text-[20px]'}
					/>
					<p className="text-[12px]">Use SwapnPays virtual card to easily and securely make payment online.</p>
				</div>

				<div className="flex flex-col space-y-4 items-start w-[80%]">
					<div className="w-full h-[180px] bg-[url('/src/assets/images/card__bg__1.svg')] bg-cover rounded-lg flex flex-col justify-between px-4 py-8">
						<div className="flex justify-between">
							<p className='text-[12px] text-white'>Debit</p>
							<IconImage
								icon={IconLogoWhite}
							/>
						</div>
						<div className="flex flex-col space-y-1">
							<p className='text-[20px] font-semibold text-white'>5199 1110 4509 0264</p>
							<p className='text-[12px] text-white'>John Doe</p>
						</div>
					</div>
					<div className="w-full h-[180px] bg-[url('/src/assets/images/card__bg__2.svg')] bg-cover rounded-lg flex flex-col justify-between px-4 py-8">
						<div className="flex justify-between">
							<p className='text-[12px] text-white'>Debit</p>
							<IconImage
								icon={IconLogoWhite}
							/>
						</div>
						<div className="flex flex-col space-y-1">
							<p className='text-[20px] font-semibold text-white'>5199 1110 4509 0264</p>
							<p className='text-[12px] text-white'>John Doe</p>
						</div>
					</div>

					<IconButton
						type={'submit'}
						width={'w-full'}
						iconType={'icon-right'}
						textColor={'text-primary'}
						title={'Create new virtual card'}
						handleClick={() => {
							updateConfig({ showCreateCard: !config.showCreateCard })
						}}
						classes={'py-4 text-[14px] rounded-xl bg-white border border-primary'}
					/>
				</div>
			</div>

			{config.showCreateCard && (
				<div className="w-[40%] flex flex-col items-start space-y-5">
					<HeaderText
						text={'Want a card for online transactions?'}
						classes={'font-bold text-[20px]'}
					/>

					<form onSubmit={() => { }}
						className='w-full'
					>
						<FormTextInput
							name={'email'}
							padding={'py-4 px-5'}
							placeHolder={'Card Label'}
							handleChange={handleChange}
							classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-5 w-full'}
						/>
						<FormSelectInput
							name={'country'}
							showLabel={false}
							items={['USD', 'NGN']}
							label={'Select currency'}
							handleChange={handleChange}
							classes={'py-4 rounded-xl mb-5'}
						/>
						<FormTextInput
							name={'email'}
							padding={'py-4 px-5'}
							placeHolder={'Amount'}
							handleChange={handleChange}
							classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-5 w-full'}
						/>

						<TransactionConfirmationText type='debit' />

						<IconButton
							type={'submit'}
							width={'w-full'}
							handleClick={() => {}}
							iconType={'icon-right'}
							textColor={'text-white'}
							title={'Create new virtual card'}
							classes={'py-4 mt-10 text-[16px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
						/>
					</form>
				</div>
			)}
		</div>
	)
}

export default Cards