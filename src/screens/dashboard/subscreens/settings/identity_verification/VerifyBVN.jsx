import { toast } from 'react-toastify'
import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'

import { useGlobalContext } from '../../../../../context'
import { FormPasswordInput, HeaderText, IconButton } from '../../../../../components'


const VerifyBVN = () => {
	const { updateModalPages } = useGlobalContext()

	const handleChange = (e) => {

	}

	return (
		<div className="fixed h-screen z-20 bg-[#11111190] w-full backdrop-blur-sm flex justify-end">
			<div className="w-[40%] h-full bg-gray-100 px-20 py-20 flex flex-col justify-between space-y-5">
				<div>
					<BsArrowLeft
						size={20}
						className='cursor-pointer'
						onClick={() => updateModalPages({ showBvnVerififcationScreen: false })}
					/>

					<div className="mb-5">
						<HeaderText
							text={'BVN Verification'}
							classes={'font-bold text-[20px] text-black'}
						/>
						<p className='text-[14px]'>Enter the details below to verify yourself</p>
					</div>

					<div className="flex flex-col w-full space-y-5">
						<FormPasswordInput
							showIcon={false}
							name={'password'}
							handleChange={handleChange}
							placeHolder={'Enter your NIN id'}
							classes={'text-[14px] placeholder:text-[14px] rounded-xl pr-14'}
						/>
					</div>
				</div>

				<IconButton
					type={'submit'}
					title={'Verify'}
					width={'w-full'}
					iconType={'icon-right'}
					textColor={'text-white'}
					classes={'py-4 text-[16px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
					handleClick={() => {
						updateModalPages({ showBvnVerififcationScreen: false })
					}}
				/>
			</div>

		</div>
	)
}

export default VerifyBVN