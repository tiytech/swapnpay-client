import { Link } from 'react-router-dom'
import React, { useReducer } from 'react'

import { countries } from '../../../data'
import { FormDateInput, FormSelectInput, FormTextInput, HeaderText, IconButton, LogoText } from '../../../components'


const SignupStepFour = ({ handleChange, updateConfig }) => {

    const handleSubmit = (e) => {
        e.preventDefault()

        updateConfig({ showFormFour: false, showFormFive: true })
    }

    return (
        <div className="w-[50%] h-full flex flex-col px-28 py-20 space-y-3">
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
                <FormSelectInput
                    showLabel={false}
                    name={'gender'}
                    label={'Gender'}
                    items={['Male', 'Female']}
                    handleChange={handleChange}
                    classes={'py-4 rounded-xl mb-2'}
                />
                <FormDateInput
                    label={'Date of birth'}
                    name={'dateOfBirth'}
                    handleChange={handleChange}
                    placeHolder={'Date of birth'}
                    classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-2'}
                />
                <FormTextInput
                    name={'residentialAddress'}
                    handleChange={handleChange}
                    placeHolder={'Enter your residential address'}
                    classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-2'}
                />
                <FormTextInput
                    name={'postalCode'}
                    handleChange={handleChange}
                    placeHolder={'Enter postal code'}
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

export default SignupStepFour