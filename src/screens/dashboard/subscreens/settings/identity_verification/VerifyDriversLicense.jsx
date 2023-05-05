import React, { useReducer, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { BsArrowLeft } from 'react-icons/bs'

import { useGlobalContext } from '../../../../../context'
import { FormDateInput, FormPasswordInput, FormTextInput, HeaderText, IconButton, LoadingButtonOne } from '../../../../../components'
import { iDverificationAction } from '../../../../../services/actions/user.actions'


const VerifyDriversLicense = () => {
	const { updateModalPages } = useGlobalContext()


	const { idVerificationLoading } = useSelector(state => state.user)
	const [formData, setformData] = useState({ is_files_uploaded: true, kyc_type: 'Drivers_license' })
	const dispatch = useDispatch()
	// const navigate = useNavigate()

	const handleChange = (e) => {
		setformData({ ...formData, [e.target.name]: e.target.value })

	}
	const handleFileSubmit = (e) => {
		console.log(e.target.files);
		setformData({ ...formData, [e.target.name]: e.target.files[0] });



	}

	return (
		<div className="fixed h-screen z-20 bg-[#11111190] w-full backdrop-blur-sm flex justify-end">
			<div className="w-full lg:w-[40%] h-full bg-gray-100 px-5 lg:px-20 py-20 flex flex-col space-y-5">
				<div>
					<BsArrowLeft
						size={20}
						className='cursor-pointer'
						onClick={() => updateModalPages({ showDriverCardVerififcationScreen: false })}
					/>

					<div className="mb-5">
						<HeaderText
							text={'Drivers License Verification'}
							classes={'font-bold text-[20px] text-black'}
						/>
						<p className='text-[14px]'>Enter the details below to verify yourself</p>
					</div>

					<div className="flex flex-col w-full space-y-2">
						<FormTextInput
							name={'identity_number'}
							handleChange={handleChange}
							placeHolder={'Drivers card number'}
							classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-2'}
						/>
						<FormDateInput
							name={'identity_expiration_date'}
							label={'Expiration date'}
							handleChange={handleChange}
							placeHolder={'Expiration date'}
							classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-2'}
						/>
						<div className='border px-2 py-4 rounded-lg border-slate-400'>
							<input type="file" name="drivers_license" id="" onChange={handleFileSubmit} />
						</div>
						{/* <IconButton
							type={'submit'}
							title={'Snap a selfie'}
							width={'w-full'}
							iconType={'icon-camera'}
							textColor={'text-primary'}
							classes={'py-4 text-[14px] rounded-xl bg-white border border-primary'}
							handleClick={() => {
								// FILE UPLOAD
							}}
						/> */}
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
							console.log(formData);

							const response = await dispatch(iDverificationAction({ formData }))
							if (response.error == undefined) {
								toast.success('File uploaded successfully')
								updateModalPages({ showDriverCardVerififcationScreen: false })

							} else {
								return
							}

						}}
					/>

				)}

				{/* <IconButton
					type={'submit'}
					title={'Verify'}
					width={'w-full'}
					iconType={'icon-right'}
					textColor={'text-white'}
					classes={'py-4 text-[16px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
					handleClick={() => {
						updateModalPages({ showDriverCardVerififcationScreen: false })
					}}
				/> */}
			</div>

		</div>
	)
}

export default VerifyDriversLicense