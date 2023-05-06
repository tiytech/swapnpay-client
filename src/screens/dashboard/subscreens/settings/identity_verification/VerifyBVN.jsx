import React, { useReducer, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { BsArrowLeft } from 'react-icons/bs'

import { useGlobalContext } from '../../../../../context'
import { FormPasswordInput, FormTextInput, HeaderText, IconButton, LoadingButtonOne } from '../../../../../components'
import { iDverificationAction } from '../../../../../services/actions/user.actions'


const VerifyBVN = () => {
	const { updateModalPages } = useGlobalContext()
	const { idVerificationLoading } = useSelector(state => state.user)
	const [formData, setformData] = useState({ is_files_uploaded: true, kyc_type: 'BVN' })
	const dispatch = useDispatch()

	const handleChange = (e) => {
		setformData({ ...formData, [e.target.name]: e.target.value })

	}

	return (
		<div className="fixed h-screen z-20 bg-[#11111190] w-full backdrop-blur-sm flex justify-end">
			<div className="w-full lg:w-[40%] h-full bg-gray-100 px-5 lg:px-20 py-20 flex flex-col space-y-5">
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
						<FormTextInput
							showIcon={false}
							name={'bvn'}
							handleChange={handleChange}
							placeHolder={'Enter your BVN'}
							classes={'text-[14px] placeholder:text-[14px] rounded-xl pr-14'}
						/>
					</div>
				</div>

				{idVerificationLoading == true ? (
					<LoadingButtonOne
						loadingType={'one'}
						textColor={'text-white'}
						width={'w-full md:w-full'}
						classes={'text-[14px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
					/>
				) : (


					<IconButton
						type={'submit'}
						title={'Verify'}
						width={'w-full'}
						iconType={'icon-right'}
						textColor={'text-white'}
						classes={'py-4 text-[16px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
						handleClick={async () => {

							const response = await dispatch(iDverificationAction({ formData }))
							if (response.error == undefined) {
								toast.success('Success')
								updateModalPages({ showBvnVerififcationScreen: false })

							} else {
								return
							}

						}}
					/>

				)}
			</div>

		</div>
	)
}

export default VerifyBVN