import React from 'react'
import { FiMail } from 'react-icons/fi'

import Label from '../text/Label'


const FormTextInput = ({ disabled, classes, name, value, minLength, handleChange, label, padding, placeHolder, type, icon }) => {
    return (
        <div className='relative'>
            <Label text={label} />
            <input
                name={name}
                onChange={handleChange}
                placeholder={placeHolder}
                type={type ? type : "text"}
                minLength={minLength && minLength}
                value={value && value}
                disabled={disabled ? disabled : false}
                className={`
                    ${classes} 
                    ${padding ? padding : 'px-5 py-4'} 
                    ${icon === 'mail' && 'pr-10'}
                    border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue
                `}
            />

            {icon === 'mail' && (
                <FiMail
                    size={20}
                    className='absolute text-gray-400 right-6 top-4 cursor-pointer'
                />
            )}
        </div>
    )
}

export default FormTextInput