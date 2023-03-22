import { IoIosArrowDown } from 'react-icons/io'
import React, { useEffect, useReducer, useState } from 'react'

import PhoneCountryCodes from '../../data/phoneContryCode.json'


const FormPhoneInput = ({ classes, formData, name, handleChange, placeHolder, }) => {
    const [config, updateConfig] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        showDropDown: false
    })
    const [phoneCountryData, setPhoneCountryData] = useState({})

    useEffect(() => {
        setPhoneCountryData(PhoneCountryCodes.find(e => e.code === formData.phoneCountryCode))
    }, [formData.phoneCountryCode])

    return (
        <div className={`
                w-full flex items-center space-x-4 relative border border-gray-300 px-4
                ${classes}
            `}
        >
            <div
                onClick={() => updateConfig({ showDropDown: true })}
                className="flex items-center space-x-2 cursor-pointer"
            >
                <div className='text-[25px]'>{phoneCountryData.flag}</div>
                <IoIosArrowDown />
            </div>

            <input
                name={name}
                type={"text"}
                onChange={handleChange}
                placeholder={placeHolder}
                className={`
                    border border-white placeholder:text-[14px] text-[14px] rounded w-full hover:outline-none focus:outline-none focus:border-white focus:ring-white
                `}
            />

            {config.showDropDown && (
                <div className="absolute left-0 top-0 w-[300px] max-h-[300px] bg-white flex flex-col overflow-y-auto scrollbar-4 px-6 py-4 rounded-b-xl shadow-lg">
                    {PhoneCountryCodes.map((country, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setPhoneCountryData(PhoneCountryCodes.find(e => e.code === country.code))
                                updateConfig({ showDropDown: false })
                            }}
                            className='flex items-center space-x-3 cursor-pointer hover:scale-105 transition-all ease-in-out duration-500'
                        >
                            <p className='text-[20px]'>{country.flag}</p>
                            <p className='text-[14px]'>{country.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default FormPhoneInput