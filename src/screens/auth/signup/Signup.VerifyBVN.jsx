import React from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { useGlobalContext } from '../../../context'
import { authActivateAccount } from '../../../services/actions/auth.actions'
import { FormTextInput, HeaderText, IconButton, LoadingButtonOne, LogoText } from '../../../components'


const SignupVerifyBVN = ({ formData, handleChange, updateConfig }) => {
    const dispatch = useDispatch()

    const { modals, updateModals } = useGlobalContext()
    const { authRequestStatus } = useSelector(state => state.auth)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.bvn) return toast.error('BVN is required')

        const data = {
            email: formData.email,
            bvn: formData.bvn
        }

        dispatch(authActivateAccount({ formData: data, toast, updateModals }))
        // updateConfig({ showFormFive: false, showFormSix: true })
        // updateModals({ showSignupSuccessModal: !modals.showSignupSuccessModal })
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

export default SignupVerifyBVN