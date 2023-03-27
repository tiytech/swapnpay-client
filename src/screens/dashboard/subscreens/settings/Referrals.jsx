import React from 'react'
import { FiCopy } from 'react-icons/fi'

import { appReferrals } from '../../../../data'
import { HeaderText } from '../../../../components'


const Referrals = () => {
	return (
		<div className='flex flex-col space-y-5 w-full'>
			<p className='text-[14px] text-center mt-10'>Each time a new user signup with your link, you earn.</p>

			<div
				onClick={() => {
					const text = document.getElementById('username').textContent

					navigator.clipboard.writeText(text)
				}}
				className='rounded-md cursor-pointer bg-gray-200 w-[80%] flex justify-between items-center p-2 mx-auto'
			>
				<p className="text-[12px]" id='accountNumber'>swapnpay.com/johndoe?refCode=290039</p>
				<FiCopy />
			</div>

			<div className="mx-auto text-center">
				<HeaderText
					text={'NGN 30,000'}
					classes={'font-bold text-[40px]'}
				/>
				<p className="text-[12px]">Your total earning</p>
			</div>

			<div className="flex flex-col justify-between items-center h-[250px w-full rounded-xl bg-white py-5 px-10">
				{appReferrals.map((referral, index) => (
					<div
						key={index}
						className="flex justify-between items-center w-full border-b py-2 cursor-pointer transition-all ease-in-out duration-500 hover:translate-x-1"
					>
						<div className="flex flex-col space-y-1">
							<p className='text-[14px] font-bold'>{referral.name}</p>
							<p className='text-[12px]'>{referral.timeline}</p>
						</div>

						<p className={`text-[14px] ${referral.auth !== 'Signup complete' ? 'text-red-500' : 'text-green-500'}`}>{referral.auth}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Referrals