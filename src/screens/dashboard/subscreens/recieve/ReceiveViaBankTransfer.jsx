import React from 'react'
import { toast } from 'react-toastify'
import { BsArrowLeft } from 'react-icons/bs'

import { HeaderText, IconButton } from '../../../../components'


const ReceiveViaBankTransfer = ({ updateConfig }) => {
	return (
		<div className="w-[40%] h-full bg-gray-100 px-20 py-20 flex flex-col space-y-5">
			<BsArrowLeft
				size={20}
				className='cursor-pointer'
				onClick={() => updateConfig({ showDefault: true, showReceiveViaBankTransfer: false })}
			/>

			<div className="space-y-2">
				<HeaderText
					text={'Your Bank Details'}
					classes={'font-bold text-[20px] text-black'}
				/>
				<p className='text-[14px]'>You can easily add cash to your swapnpay wallet from any bank, POS stand or from any wallet by using the details below.</p>
			</div>

			<div className="flex flex-col">
				<div

					className="flex justify-between items-center border-t border-b py-3"
				>
					<p className='text-[12px] font-normal'>Account name</p>
					<p id='account-name' className='text-[12px] font-bold'>SafeHaven-johndoe</p>
				</div>
				<div

					className="flex justify-between items-center border-t border-b py-3"
				>
					<p className='text-[12px] font-normal'>Account number</p>
					<p id='account-number' className='text-[12px] font-bold'>21399283391</p>
				</div>
			</div>

			<IconButton
				type={'submit'}
				title={'Copy'}
				width={'w-full'}
				iconType={'icon-copy'}
				textColor={'text-white'}
				classes={'py-4 text-[16px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
				handleClick={() => {
					const accName = document.getElementById('account-name')
					const accNum = document.getElementById('account-number')
					const text = `${accName.textContent}  -  ${accNum.textContent}`

					navigator.clipboard.writeText(text)

					toast.info('Copied!', { autoClose: 2000, theme: 'dark' })
				}}
			/>
		</div>
	)
}

export default ReceiveViaBankTransfer