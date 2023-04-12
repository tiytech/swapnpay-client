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
        phoneCountryCode: 'NG', country: '', residence: '',
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
                    updateConfig={updateConfig}
                    handleChange={handleChange}
                />
            )}
            {config.showFormTwo && (
                <SignupStepTwo
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
                    updateConfig={updateConfig}
                    handleChange={handleChange}
                />
            )}
            {config.showFormFive && (
                <SignupStepFive
                    updateConfig={updateConfig}
                    handleChange={handleChange}
                />
            )}
            {config.showFormSix && (
                <SignupVerifyEmail
                    updateConfig={updateConfig}
                    handleChange={handleChange}
                />
            )}
            {config.showFormSeven && (
                <SignupVerifyBVN
                    updateConfig={updateConfig}
                    handleChange={handleChange}
                />
            )}
        </div>
    )
}

export default Signup