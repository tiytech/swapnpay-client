import React, { useReducer } from 'react'

import { AuthArt1 } from '../../assets'
import { Modals } from '../../components'
import SignupStepFive from './signup/Signup.StepFive'
import SignupStepFour from './signup/Signup.StepFour'
import SignupStepOne from './signup/Signup.StepOne'
import SignupStepThree from './signup/Signup.StepThree'
import SignupStepTwo from './signup/Signup.StepTwo'
import SignupVerifyBVN from './signup/Signup.VerifyBVN'
import SignupVerifyEmail from './signup/Signup.VerifyEmail'


const Signup = () => {
    const [config, updateConfig] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        showFormOne: true, showFormTwo: false, showFormThree: false,
        showFormFive: false, showFormSix: false, showFormSeven: false,
        phoneCountryCode: 'NG', phoneDialCode: '+234', showFormFour: false,
    })

    const [formData, updateFormData] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        otp_1: '', otp_2: '', otp_3: '', otp_4: '', confirmPassword: '',
        phoneCountryCode: 'NG', country: '', state: '', city: '', residence: '',
        date_of_birth: '', house_address: '', postalCode: '', password:'', bvn: '',
        first_name: '', last_name: '', occupation: '', email: '', phone_number: '',
    })

    const handleChange = (e) => {
        updateFormData({ [e.target.name]: e.target.value })
    }

    return (
        <div className='h-screen flex justify-between overflow-y-hidden font-lato'>
            <Modals />

            <div className="w-0 md:w-[50%] h-full">
                <img
                    src={AuthArt1}
                    alt="auth__art"
                    className='w-full'
                />
            </div>

            {config.showFormOne && (
                <SignupStepOne
                    formData={formData}
                    updateConfig={updateConfig}
                    handleChange={handleChange}
                />
            )}
            {config.showFormTwo && (
                <SignupStepTwo
                    formData={formData}
                    updateConfig={updateConfig}
                    handleChange={handleChange}
                />
            )}
            {config.showFormThree && (
                <SignupStepThree
                    formData={formData}
                    updateConfig={updateConfig}
                    handleChange={handleChange}
                />
            )}
            {config.showFormFour && (
                <SignupStepFour
                    formData={formData}
                    updateConfig={updateConfig}
                    handleChange={handleChange}
                />
            )}
            {config.showFormFive && (
                <SignupStepFive
                    formData={formData}
                    updateConfig={updateConfig}
                    handleChange={handleChange}
                    updateFormData={updateFormData}
                />
            )}
            {config.showFormSix && (
                <SignupVerifyEmail
                    formData={formData}
                    updateConfig={updateConfig}
                    handleChange={handleChange}
                />
            )}
            {config.showFormSeven && (
                <SignupVerifyBVN
                    formData={formData}
                    updateConfig={updateConfig}
                    handleChange={handleChange}
                />
            )}
        </div>
    )
}

export default Signup