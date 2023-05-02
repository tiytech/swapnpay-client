import React from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'

import { authVerifyUserEmail } from '../../../services/actions/auth.actions'
import { FormTextInput, HeaderText, IconButton, LoadingButtonOne, LogoText } from '../../../components'


const SignupVerifyEmail = ({ formData, handleChange, updateConfig }) => {
    const dispatch = useDispatch()

    const { authRequestStatus } = useSelector(state => state.auth)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.otp_1 || !formData.otp_2 || !formData.otp_3 || !formData.otp_4) {
            return toast.error('Invalid OTP')
        }
        const data = {
            // ...formData,
            email: formData.email,
            verification_code: parseInt(formData.otp_1 + formData.otp_2 + formData.otp_3 + formData.otp_4)
        }
        console.log(data)
        dispatch(authVerifyUserEmail({ formData: data, toast, updateConfig }))
        // updateConfig({ showFormSix: false, showFormSeven: true })
    }

    return (
        <div className="w-full md:w-[50%] h-full flex flex-col px-5 md:px-28 py-5 lg:py-20 space-y-5">
            <LogoText
                size={'lg'}
                color={'black'}
            />
            <HeaderText
                classes={'text-[30px]'}
                text={'Verify your email'}
                color={'text-black font-bold'}
            />
            <p className=''>Enter the 4-digit code sent to {formData.email}</p>

            <form onSubmit={handleSubmit}>
                <div className="flex items-center space-x-10 w-full">
                    <FormTextInput
                        minLength={1}
                        name={'otp_1'}
                        handleChange={handleChange}
                        classes={'text-[20px] placeholder:text-[20px] rounded-xl w-[60px] px-1 text-center'}
                    />
                    <FormTextInput
                        name={'otp_2'}
                        minLength={1}
                        handleChange={handleChange}
                        classes={'text-[20px] placeholder:text-[20px] rounded-xl w-[60px] px-1 text-center'}
                    />
                    <FormTextInput
                        name={'otp_3'}
                        minLength={1}
                        handleChange={handleChange}
                        classes={'text-[20px] placeholder:text-[20px] rounded-xl w-[60px] px-1 text-center'}
                    />
                    <FormTextInput
                        minLength={1}
                        name={'otp_4'}
                        handleChange={handleChange}
                        classes={'text-[20px] placeholder:text-[20px] rounded-xl w-[60px] px-1 text-center'}
                    />
                </div>
                <div className="flex justify-start mt-2">
                    <p className='text-[12px]'>Request another OTP in <strong className='font-bold'>03:00sec</strong></p>
                </div>

                <div className="mt-5">
                    {authRequestStatus !== 'PENDING' ? (
                        <IconButton
                            to={'#'}
                            type={'submit'}
                            title={'Proceed'}
                            iconType={'icon-right'}
                            textColor={'text-white'}
                            width={'w-full md:w-full'}
                            classes={'py-4 text-[14px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
                        />
                    ) : (
                        <LoadingButtonOne
                            loadingType={'one'}
                            textColor={'text-white'}
                            width={'w-full md:w-full'}
                            classes={'text-[14px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
                        />
                    )}
                </div>

                {/* <div className='mt-2 flex justify-center space-x-2'>
                    <p className='text-gray-500 text-[14px]'>Already have an account?</p>

                    <Link to={'/login'}>
                        <p className='text-[14px] font-bold'>Login</p>
                    </Link>
                </div> */}
            </form>
        </div>
    )
}

export default SignupVerifyEmail