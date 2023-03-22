import React, { useReducer } from 'react'
import { BsEyeSlash, BsEyeFill } from 'react-icons/bs'

import Label from '../text/Label'


const FormPasswordInput = ({ classes, name, handleChange, label, placeHolder }) => {
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

            {!config.hidePassword && (
                <BsEyeSlash
                    size={20}
                    className='absolute right-6 top-4 cursor-pointer'
                    onClick={() => updateConfig({ hidePassword: !config.hidePassword })}
                />
            )}

            {config.hidePassword && (
                <BsEyeFill
                    size={20}
                    className='absolute right-6 top-4 cursor-pointer'
                    onClick={() => updateConfig({ hidePassword: !config.hidePassword })}
                />
            )}
        </div>
    )
}

export default FormPasswordInput