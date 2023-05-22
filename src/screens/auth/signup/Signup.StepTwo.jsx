import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import React, { useReducer } from 'react'

import { countries, occupations } from '../../../data'
import { FormSelectInput, FormTextInput, HeaderText, IconButton, LogoText } from '../../../components'


const SignupStepTwo = ({ formData, handleChange, updateConfig }) => {

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.first_name) return toast.error('First name required!')
        if (!formData.last_name) return toast.error('Last name required!')
        if (!formData.occupation) return toast.error('Occupation name required!')
        

        updateConfig({ showFormTwo: false, showFormThree: true })
    }

    return (
        <div className="w-full md:w-[50%] h-full flex flex-col px-5 md:px-28 py-5 lg:py-20 space-y-5">
            <LogoText
                size={'lg'}
                color={'black'}
            />
            <HeaderText
                text={'Personal Data'}
                classes={'text-[30px]'}
                color={'text-black font-bold'}
            />
            <p className=''>Select you current country of residence and country of origin</p>

            <form onSubmit={handleSubmit}>
                <FormTextInput
                    name={'first_name'}
                    handleChange={handleChange}
                    placeHolder={'First name'}
                    classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-2'}
                />
                <FormTextInput
                    name={'last_name'}
                    handleChange={handleChange}
                    placeHolder={'Last name'}
                    classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-2'}
                />
                <FormSelectInput
                    showLabel={false}
                    items={occupations}
                    name={'occupation'}
                    label={'Occupation'}
                    handleChange={handleChange}
                    classes={'py-4 rounded-xl mb-5'}
                />
                <FormTextInput
                    name={'referral_code'}
                    handleChange={handleChange}
                    placeHolder={'Referral code (optional)'}
                    classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-2'}
                />


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

                <div className='mt-2 flex justify-center space-x-2'>
                    <p className='text-gray-500 text-[14px]'>Already have an account?</p>

                    <Link to={'/login'}>
                        <p className='text-[14px] font-bold'>Login</p>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default SignupStepTwo