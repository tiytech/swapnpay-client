import { toast } from 'react-toastify'
import React, { useReducer } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { FiChevronRight, FiCopy } from 'react-icons/fi'

import { IconQRCode } from '../../../../assets'
import { useGlobalContext } from '../../../../context'
import { HeaderText, IconButton } from '../../../../components'
import IconImage from '../../../../components/images/IconImage'
import { appReceiveCryptoTypes, appReceiveTypes } from '../../../../data'


const Receive = () => {
	const { updateModalPages } = useGlobalContext()

	const [config, updateConfig] = useReducer((prev, next) => {
		return { ...prev, ...next }
	}, {
		showReceiveViaUsername: false, showReceiveViaCrypto: false,
		showUSDCInfo: false, showUSDTInfo: false, showBUSDInfo: false,
		showReceiveViaBankTransfer: false, showReceiveViaCard: false, showDefault: true,
	})

	return (
		<div className="fixed h-screen z-20 bg-[#11111190] w-full backdrop-blur-sm flex justify-end">
			{config.showDefault && (
				<div className="w-[40%] h-full bg-gray-100 px-20 py-20 flex flex-col space-y-5">
					<BsArrowLeft
						size={20}
						className='cursor-pointer'
						onClick={() => updateModalPages({ showReciveScreen: false })}
					/>

					<div className="space-y-2">
						<HeaderText
							text={'Receive'}
							classes={'font-bold text-[20px] text-black'}
						/>
						<p className='text-[14px]'>Select how you would want to Recieve money to your swapnpay account.</p>
					</div>

					<div className="flex flex-col w-full">
						{appReceiveTypes.map((item, index) => (
							<div
								key={index}
								onClick={() => {
									if (item.type === 'USERNAME') {
										updateConfig({ showDefault: false, showReceiveViaUsername: true })
									}
									if (item.type === 'CRYPTO') {
										updateConfig({ showDefault: false, showReceiveViaCrypto: true })
									}
									if (item.type === 'TRANSFER') {
										updateConfig({ showDefault: false, showReceiveViaBankTransfer: true })
									}
									if (item.type === 'CARD') {
										updateConfig({ showDefault: true, showReceiveViaCard: false })
									}
								}}
								className='w-full mb-4 py-3 px-4 rounded-lg bg-white flex justify-between items-center cursor-pointer transition-all ease-in-out duration-500 hover:translate-x-1'
							>
								<div className="flex items-center space-x-3">
									<IconImage
										icon={item.icon}
									/>
									<div className="flex flex-col">
										<p className='text-[14px] font-bold'>{item.title}</p>
										<p className='text-[12px]'>{item.intro}</p>
									</div>
								</div>

								<FiChevronRight />
							</div>
						))}
					</div>
				</div>
			)}

			{config.showReceiveViaUsername && (
				<div className="w-[40%] h-full bg-gray-100 px-20 py-20 flex flex-col space-y-5">
					<BsArrowLeft
						size={20}
						className='cursor-pointer'
						onClick={() => updateConfig({ showDefault: true, showReceiveViaUsername: false })}
					/>

					<div className="space-y-2">
						<HeaderText
							text={'Your username'}
							classes={'font-bold text-[20px] text-black'}
						/>
						<p className='text-[14px]'>Share this Username with another swapnpay user to receive payment</p>
					</div>

					<div className="flex justify-between items-center border-t border-b py-3">
						<p className='text-[12px] font-normal'>Your username</p>
						<p className='text-[12px] font-bold'>@john1023</p>
					</div>

					<IconButton
						type={'submit'}
						title={'Done'}
						width={'w-full'}
						iconType={'icon-right'}
						textColor={'text-white'}
						classes={'py-4 text-[16px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
						handleClick={() => updateConfig({ showDefault: true, showReceiveViaUsername: false })}
					/>
				</div>
			)}

			{config.showReceiveViaCrypto && (
				<div className="w-[40%] h-full bg-gray-100 px-20 py-20 flex flex-col space-y-5">
					<BsArrowLeft
						size={20}
						className='cursor-pointer'
						onClick={() => updateConfig({ showDefault: true, showReceiveViaCrypto: false })}
					/>

					<div className="space-y-2">
						<HeaderText
							text={'Receive crypto'}
							classes={'font-bold text-[20px] text-black'}
						/>
						<p className='text-[14px]'>Select which crypto token you want to receive.</p>
					</div>

					<div className="flex flex-col w-full">
						{appReceiveCryptoTypes.map((item, index) => (
							<div
								key={index}
								onClick={() => {
									if (item.type === 'USDT') {
										updateConfig({ showReceiveViaCrypto: false, showUSDTInfo: true, showUSDCInfo: false, showBUSDInfo: false })
									}
									if (item.type === 'USDC') {
										updateConfig({ showReceiveViaCrypto: false, showUSDTInfo: false, showUSDCInfo: true, showBUSDInfo: false })
									}
									if (item.type === 'BUSD') {
										updateConfig({ showReceiveViaCrypto: false, showUSDTInfo: false, showUSDCInfo: false, showBUSDInfo: true })
									}
								}}
								className='w-full mb-4 py-3 px-4 rounded-lg bg-white flex justify-between items-center cursor-pointer'
							>
								<div className="flex items-center space-x-3">
									<IconImage
										icon={item.icon}
										classes={''}
									/>
									<div className="flex flex-col">
										<p className='text-[14px] font-bold'>{item.title}</p>
										<p className='text-[12px]'>{item.address}</p>
									</div>
								</div>

								<FiChevronRight />
							</div>
						))}
					</div>
				</div>
			)}

			{!config.showReceiveViaCrypto && config.showUSDTInfo && (
				<div className="w-[40%] h-full bg-gray-100 px-20 py-20 flex flex-col space-y-5">
					<BsArrowLeft
						size={20}
						className='cursor-pointer'
						onClick={() => updateConfig({ showReceiveViaCrypto: true, showUSDCInfo: false })}
					/>

					<div className="space-y-2">
						<HeaderText
							text={'USDT'}
							classes={'font-bold text-[20px] text-black'}
						/>
						<p className='text-[14px]'>Use the details below to receive your USDT token</p>
					</div>

					<div className="flex flex-col space-y-5">
						<div className="mx-auto">
							<img
								alt="qrcode"
								src={IconQRCode}
								className='h-[150px]'
							/>
						</div>

						<div
							className='w-full mb-4 py-3 px-4 rounded-lg bg-white flex justify-between items-center cursor-pointer'
						>
							<p className='text-[14px] font-bold' id='usdt-address'>0xfeebabe6b0418ec13b30aadf129f5dcdd4f70cea</p>

							<FiCopy
								onClick={() => {
									const text = document.getElementById('usdt-address').textContent
									navigator.clipboard.writeText(text)

									toast.info('Copied!', { autoClose: 2000, theme: 'dark' })
								}}
								className='cursor-pointer'
							/>
						</div>

						<p className='text-[12px] mx-auto'>Minimum receivable: 20 USDT</p>

						<div
							className='w-full text-center mb-4 py-3 px-4 rounded-lg space-y-2 border border-red-500 flex flex-col justify-between items-center cursor-pointer'
						>
							<HeaderText
								text={'Warning!!!'}
								classes={'font-bold text-[20px] text-black'}
							/>
							<p className='text-[12px]'>Please send only USDT to this address, sending any other token to this address would result in permanent loss</p>
							<p className='text-[12px]'>Always generate new transaction address before sending tokens</p>
						</div>
					</div>
				</div>
			)}

			{!config.showReceiveViaCrypto && config.showUSDCInfo && (
				<div className="w-[40%] h-full bg-gray-100 px-20 py-20 flex flex-col space-y-5">
					<BsArrowLeft
						size={20}
						className='cursor-pointer'
						onClick={() => updateConfig({ showReceiveViaCrypto: true, showUSDCInfo: false })}
					/>

					<div className="space-y-2">
						<HeaderText
							text={'USDC'}
							classes={'font-bold text-[20px] text-black'}
						/>
						<p className='text-[14px]'>Use the details below to receive your USDC token</p>
					</div>

					<div className="flex flex-col space-y-5">
						<div className="mx-auto">
							<img
								alt="qrcode"
								src={IconQRCode}
								className='h-[150px]'
							/>
						</div>

						<div
							className='w-full mb-4 py-3 px-4 rounded-lg bg-white flex justify-between items-center cursor-pointer'
						>
							<p className='text-[14px] font-bold' id='usdt-address'>0xfeebabe6b0418ec13b30aadf129f5dcdd4f70cea</p>

							<FiCopy
								onClick={() => {
									const text = document.getElementById('usdt-address').textContent
									navigator.clipboard.writeText(text)

									toast.info('Copied!', { autoClose: 2000, theme: 'dark' })
								}}
								className='cursor-pointer'
							/>
						</div>

						<p className='text-[12px] mx-auto'>Minimum receivable: 20 USDC</p>

						<div
							className='w-full text-center mb-4 py-3 px-4 rounded-lg space-y-2 border border-red-500 flex flex-col justify-between items-center cursor-pointer'
						>
							<HeaderText
								text={'Warning!!!'}
								classes={'font-bold text-[20px] text-black'}
							/>
							<p className='text-[12px]'>Please send only USDC to this address, sending any other token to this address would result in permanent loss</p>
							<p className='text-[12px]'>Always generate new transaction address before sending tokens</p>
						</div>
					</div>
				</div>
			)}

			{!config.showReceiveViaCrypto && config.showBUSDInfo && (
				<div className="w-[40%] h-full bg-gray-100 px-20 py-20 flex flex-col space-y-5">
					<BsArrowLeft
						size={20}
						className='cursor-pointer'
						onClick={() => updateConfig({ showReceiveViaCrypto: true, showBUSDInfo: false })}
					/>

					<div className="space-y-2">
						<HeaderText
							text={'BUSD'}
							classes={'font-bold text-[20px] text-black'}
						/>
						<p className='text-[14px]'>Use the details below to receive your BUSD token</p>
					</div>

					<div className="flex flex-col space-y-5">
						<div className="mx-auto">
							<img
								alt="qrcode"
								src={IconQRCode}
								className='h-[150px]'
							/>
						</div>

						<div
							className='w-full mb-4 py-3 px-4 rounded-lg bg-white flex justify-between items-center cursor-pointer'
						>
							<p className='text-[14px] font-bold' id='usdt-address'>0xfeebabe6b0418ec13b30aadf129f5dcdd4f70cea</p>

							<FiCopy
								onClick={() => {
									const text = document.getElementById('usdt-address').textContent
									navigator.clipboard.writeText(text)

									toast.info('Copied!', { autoClose: 2000, theme: 'dark' })
								}}
								className='cursor-pointer'
							/>
						</div>

						<p className='text-[12px] mx-auto'>Minimum receivable: 20 BUSD</p>

						<div
							className='w-full text-center mb-4 py-3 px-4 rounded-lg space-y-2 border border-red-500 flex flex-col justify-between items-center cursor-pointer'
						>
							<HeaderText
								text={'Warning!!!'}
								classes={'font-bold text-[20px] text-black'}
							/>
							<p className='text-[12px]'>Please send only BUSD to this address, sending any other token to this address would result in permanent loss</p>
							<p className='text-[12px]'>Always generate new transaction address before sending tokens</p>
						</div>
					</div>
				</div>
			)}

			{config.showReceiveViaBankTransfer && (
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
			)}
		</div>
	)
}

export default Receive