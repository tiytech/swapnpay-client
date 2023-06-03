import { toast } from 'react-toastify'
import React, { useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { AuthArt1 } from '../../../assets'
import { authForgotPassword } from '../../../services/actions/auth.actions'
import { FormTextInput, HeaderText, IconButton, LinkIconButton, LoadingButtonOne, LogoText } from '../../../components'


const ForgotPassword = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { authRequestStatus } = useSelector(state => state.auth)

    const [formData, updateFormData] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        email: '', hidePassword: true,
    })

    const handleChange = (e) => {
        updateFormData({ [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.email) return toast.error('Email is required')

        dispatch(authForgotPassword({ formData, toast, navigate }))
    }

    return (
        <div className='h-screen flex justify-between overflow-y-hidden font-lato'>
            <div className="w-0 lg:w-[50%] h-full">
                <img
                    src={AuthArt1}
                    alt="auth__art"
                    className='w-full'
                />
            </div>

            <div className="w-full lg:w-[50%] h-full flex flex-col px-5 lg:px-28 py-5 lg:py-20 space-y-5">
                <LogoText
                    size={'lg'}
                    color={'black'}
                />
                <HeaderText
                    classes={'text-[30px]'}
                    color={'text-black font-bold'}
                    text={'Forgot Password'}
                />


                <form onSubmit={handleSubmit}>
                    <FormTextInput
                        name={'email'}
                        handleChange={handleChange}
                        placeHolder={'Enter your email address'}
                        classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-5'}
                    />


                    <div className="mt-5 ">
                        {/* <LinkIconButton
                            type={'submit'}
                            title={'Submit'}
                            to={'/reset-password'}
                            textColor={'text-white'}
                            width={'w-full md:w-full'}
                            classes={'py-4 text-[14px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
                        /> */}
                        {authRequestStatus !== 'PENDING' ? (
                            <IconButton
                                to={'#'}
                                type={'submit'}
                                title={'Submit'}
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
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword