import { Link } from 'react-router-dom'
import React, { useReducer } from 'react'

import { FormTextInput, HeaderText, IconButton, LogoText } from '../../../components'


const SignupVerifyEmail = ({ handleChange, updateConfig }) => {

    const handleSubmit = (e) => {
        e.preventDefault()

        updateConfig({ showFormSix: false, showFormSeven: true })
    }

    return (
        <div className="w-[50%] h-full flex flex-col px-28 py-20 space-y-5">
            <LogoText
                size={'lg'}
                color={'black'}
            />
            <HeaderText
                text={'Verify your email'}
                classes={'text-[30px]'}
                color={'text-black font-bold'}
            />
            <p className=''>Enter the 4-digit code sent to johndoe12@gmail.com</p>

            <form onSubmit={handleSubmit}>
                <div className="flex items-center space-x-10 w-full">
                    <FormTextInput
                        name={'otp'}
                        handleChange={handleChange}
                        classes={'text-[20px] placeholder:text-[20px] rounded-xl w-[60px] px-1 text-center'}
                    />
                    <FormTextInput
                        name={'otp'}
                        handleChange={handleChange}
                        classes={'text-[20px] placeholder:text-[20px] rounded-xl w-[60px] px-1 text-center'}
                    />
                    <FormTextInput
                        name={'otp'}
                        handleChange={handleChange}
                        classes={'text-[20px] placeholder:text-[20px] rounded-xl w-[60px] px-1 text-center'}
                    />
                    <FormTextInput
                        name={'otp'}
                        handleChange={handleChange}
                        classes={'text-[20px] placeholder:text-[20px] rounded-xl w-[60px] px-1 text-center'}
                    />
                </div>
                <div className="flex justify-start mt-2">
                    <p className='text-[12px]'>Request another OTP in <strong className='font-bold'>03:00sec</strong></p>
                </div>

                <div className="mt-5">
                    <IconButton
                        to={'#'}
                        type={'submit'}
                        title={'Proceed'}
                        iconType={'icon-right'}
                        textColor={'text-white'}
                        width={'w-full md:w-full'}
                        classes={'py-4 text-[14px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
                    />
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