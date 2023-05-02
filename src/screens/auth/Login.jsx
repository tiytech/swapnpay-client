import { toast } from 'react-toastify'
import React, { useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { AuthArt1 } from '../../assets'
import { authUserLogin } from '../../services/actions/auth.actions'
import { FormPasswordInput, FormTextInput, HeaderText, IconButton, LinkIconButton, LoadingButtonOne, LogoText } from '../../components'


const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { authRequestStatus } = useSelector(state => state.auth)

    const [formData, updateFormData] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        email: '', password: '',
    })

    const handleChange = (e) => {
        updateFormData({ [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.email || !formData.password) return toast.error('All fields are required')

        dispatch(authUserLogin({ formData, toast, navigate }))
    }

    return (
        <div className='h-screen flex justify-between overflow-y-hidden font-lato'>
            <div className="w-0 md:w-[50%] h-full">
                <img
                    src={AuthArt1}
                    alt="auth__art"
                    className='w-full'
                />
            </div>

            <div className="w-full md:w-[50%] h-full flex flex-col px-5 md:px-28 py-5 lg:py-20 space-y-5">
                <LogoText
                    size={'lg'}
                    color={'black'}
                />
                <HeaderText
                    classes={'text-[30px]'}
                    color={'text-black font-bold'}
                    text={'Hey, Welcome back'}
                />
                <p className=''>Enter your details and login</p>

                <form onSubmit={handleSubmit}>
                    <FormTextInput
                        name={'email'}
                        handleChange={handleChange}
                        placeHolder={'Enter your email address'}
                        classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-5'}
                    />
                    <FormPasswordInput
                        name={'password'}
                        handleChange={handleChange}
                        placeHolder={'Enter your password'}
                        classes={'text-[14px] placeholder:text-[14px] rounded-xl pr-14'}
                    />

                    <div className="flex justify-end mt-1">
                        <Link to={'/forgot-password'}>
                            <p className='text-gray-500 text-[14px]'>Forgot password?</p>
                        </Link>
                    </div>

                    <div className="mt-5 ">
                        {authRequestStatus !== 'PENDING' ? (
                            <IconButton
                                to={'#'}
                                type={'submit'}
                                title={'Login'}
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

                    <div className='mt-5 flex justify-center space-x-2'>
                        <p className='text-gray-500 text-[14px]'>Don't have an account?</p>

                        <Link to={'/signup'}>
                            <p className='text-[14px] font-bold'>Signup</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login