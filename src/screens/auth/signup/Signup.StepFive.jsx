import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { authGenerateUsername, authUserSignup } from '../../../services/actions/auth.actions'
import { FormTextInput, HeaderText, IconButton, LoadingButtonOne, LogoText } from '../../../components'


const SignupStepFive = ({ formData, updateFormData, handleChange, updateConfig }) => {
    const dispatch = useDispatch()

    const { generatedUsername, authRequestStatus } = useSelector(state => state.auth)

    useEffect(() => {
        if (generatedUsername) {
            updateFormData({ username: generatedUsername })
        }
    }, [generatedUsername])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);

        if (!formData.username) {
            return toast.error('All fields are required!')
        }
        console.log(formData)

        updateConfig({ showFormFive: false, showFormSix: true })
        dispatch(authUserSignup({ formData, toast, updateConfig }))
    }

    console.log(generatedUsername)

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
            <p className=''>Select your username</p>

            <form onSubmit={handleSubmit}>
                <FormTextInput
                    // disabled={true}
                    name={'username'}
                    value={formData.username}
                    handleChange={handleChange}
                    placeHolder={'Choose your name tag'}
                    classes={'text-[14px] placeholder:text-[14px] rounded-xl'}
                />
                <div className="flex justify-end">
                    <button
                        type='button'
                        onClick={() => {
                            const data = {
                                first_name: formData.first_name,
                                last_name: formData.last_name,
                            }
                            dispatch(authGenerateUsername({ formData: data }))
                        }}
                        className='bg-slate-400 px-4 py-1 text-[12px] rounded text-white'
                    >
                        Generate
                    </button>
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