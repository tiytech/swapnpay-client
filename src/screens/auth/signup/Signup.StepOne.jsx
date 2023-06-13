import React from 'react'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

import { countries } from '../../../data'
import { FormSelectInput, FormTextInput, HeaderText, IconButton, LoadingButtonOne, LogoText } from '../../../components'


const SignupStepOne = ({ formData, handleChange, updateConfig }) => {
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.country || !formData.country_of_residence || !formData.state || !formData.city) {
            return toast.error('All fields are required!')
        }
        updateConfig({ showFormOne: false, showFormTwo: true })
    }

    return (
        <div className="w-full md:w-[50%] h-full flex flex-col px-5 md:px-28 py-5 lg:py-20 space-y-5">
            <Link to={"/"}>
                <LogoText
                    size={'lg'}
                    color={'black'}
                />
            </Link>
            <HeaderText
                text={'Nationality'}
                classes={'text-[20px] md:text-[30px]'}
                color={'text-black font-bold'}
            />
            <p className='text-[14px] md:text-[16px]'>Select you current country of residence and country of origin</p>

            <form onSubmit={handleSubmit}>
                <FormSelectInput
                    name={'country'}
                    showLabel={false}
                    items={countries}
                    label={'Nationality'}
                    handleChange={handleChange}
                    classes={'py-4 rounded-xl mb-3'}
                />
                <FormSelectInput
                    showLabel={false}
                    name={'country_of_residence'}
                    items={countries}
                    handleChange={handleChange}
                    label={'Country of Residence'}
                    classes={'py-4 rounded-xl mb-3'}
                />
                <FormTextInput
                    name={'state'}
                    handleChange={handleChange}
                    placeHolder={'State'}
                    padding={'py-4 px-4'}
                    classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-3'}
                />
                <FormTextInput
                    name={'city'}
                    handleChange={handleChange}
                    placeHolder={'City'}
                    padding={'py-4 px-4'}
                    classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-5'}
                />

                <div className="mt-">
                    {/* <LoadingButtonOne
                        loadingType={'one'}
                        textColor={'text-white'}
                        width={'w-full md:w-full'}
                        classes={'py- text-[14px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
                    /> */}
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