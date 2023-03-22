import { Link } from 'react-router-dom'
import React, { useReducer } from 'react'

import { countries } from '../../../data'
import { FormSelectInput, HeaderText, IconButton, LogoText } from '../../../components'


const SignupStepOne = ({ handleChange, updateConfig }) => {
    const handleSubmit = (e) => {
        e.preventDefault()

        updateConfig({ showFormOne: false, showFormTwo: true })
    }

    return (
        <div className="w-[50%] h-full flex flex-col px-28 py-20 space-y-5">
            <LogoText
                size={'lg'}
                color={'black'}
            />
            <HeaderText
                text={'Nationality'}
                classes={'text-[30px]'}
                color={'text-black font-bold'}
            />
            <p className=''>Select you current country of residence and country of origin</p>

            <form onSubmit={handleSubmit}>
                <FormSelectInput
                    name={'country'}
                    showLabel={false}
                    items={countries}
                    label={'Nationality'}
                    handleChange={handleChange}
                    classes={'py-4 rounded-xl mb-5'}
                />
                <FormSelectInput
                    showLabel={false}
                    name={'residence'}
                    items={countries}
                    handleChange={handleChange}
                    label={'Country of Residence'}
                    classes={'py-4 rounded-xl mb-5'}
                />


                <div className="mt-10">
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

                <div className='mt-5 flex justify-center space-x-2'>
                    <p className='text-gray-500 text-[14px]'>Already have an account?</p>

                    <Link to={'/login'}>
                        <p className='text-[14px] font-bold'>Login</p>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default SignupStepOne