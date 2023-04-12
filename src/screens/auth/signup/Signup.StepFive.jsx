import { Link } from 'react-router-dom'
import React, { useReducer } from 'react'

import { countries } from '../../../data'
import { FormSelectInput, FormTextInput, HeaderText, IconButton, LogoText } from '../../../components'


const SignupStepFive = ({ handleChange, updateConfig }) => {

    const handleSubmit = (e) => {
        e.preventDefault()

        updateConfig({ showFormFive: false, showFormSix: true })
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
                    name={'nametag'}
                    handleChange={handleChange}
                    placeHolder={'Choose your name tag'}
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

export default SignupStepFive