import React, { useReducer } from 'react'
import { BsEyeSlash, BsEye } from 'react-icons/bs'

import Label from '../text/Label'


const FormPasswordInput = ({ classes, name, handleChange, label, placeHolder, showIcon = true }) => {
    const [config, updateConfig] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        hidePassword: true
    })

    return (
        <div className='relative'>
            <Label text={label} />
            <input
                name={name}
                onChange={handleChange}
                placeholder={placeHolder}
                type={config.hidePassword ? 'password' : 'text'}
                className={`${classes} border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full px-5 py-4 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue`}
            />

            {!config.hidePassword && showIcon && (
                <BsEyeSlash
                    size={18}
                    className={`absolute right-6 top-4 cursor-pointer ${config.hidePassword ? 'text-gray-600': 'text-gray-400'}`}
                    onClick={() => updateConfig({ hidePassword: !config.hidePassword })}
                />
            )}

            {config.hidePassword && showIcon && (
                <BsEye
                    size={18}
                    className={`absolute right-6 top-4 cursor-pointer ${config.hidePassword ? 'text-gray-600': 'text-gray-400'}`}
                    onClick={() => updateConfig({ hidePassword: !config.hidePassword })}
                />
            )}
        </div>
    )
}

export default FormPasswordInput