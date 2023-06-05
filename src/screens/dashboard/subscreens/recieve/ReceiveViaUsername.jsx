import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'

import { HeaderText, IconButton } from '../../../../components'
import { useSelector } from 'react-redux'

const ReceiveViaUsername = ({ updateConfig }) => {
	const { user } = useSelector(state => state.auth)

	return (
        <div className="w-full md:w-[40%] h-full bg-gray-100 px-6 lg:px-20 py-20 flex flex-col space-y-5">
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
				<p className='text-[12px] font-bold'>{user?.credentials?.username}</p>
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
	)
}

export default ReceiveViaUsername