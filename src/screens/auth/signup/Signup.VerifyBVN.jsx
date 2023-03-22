import React from 'react'
import { Link } from 'react-router-dom'

import { FormTextInput, HeaderText, IconButton, LogoText } from '../../../components'
import { useGlobalContext } from '../../../context'


const SignupVerifyBVN = ({ handleChange, updateConfig }) => {
    const { modals, updateModals } = useGlobalContext()

    const handleSubmit = (e) => {
        e.preventDefault()

        updateConfig({ showFormFive: false, showFormSix: true })
        updateModals({ showSignupSuccessModal: !modals.showSignupSuccessModal })
    }

    return (
        <div className="w-[50%] h-full flex flex-col px-28 py-20 space-y-5">
            <LogoText
                size={'lg'}
                color={'black'}
            />
            <HeaderText
                text={'Verify BVN'}
                classes={'text-[30px]'}
                color={'text-black font-bold'}
            />
            <p className=''>Enter your BVN to verify your identity</p>

            <form onSubmit={handleSubmit}>
                <FormTextInput
                    name={'bvn'}
                    handleChange={handleChange}
                    placeHolder={'Enter your bvn'}
                    classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-2'}
                />
                <div className="flex justify-end mt-">
                    <p className='text-[12px]'>Dial <strong className='font-bold'>*510*00#</strong> to check BVN</p>
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

export default SignupVerifyBVN