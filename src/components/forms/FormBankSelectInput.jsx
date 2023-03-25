import React, { useReducer } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { appBanks } from '../../data'
import IconImage from '../images/IconImage'
import Label from '../text/Label'


const FormBankSelectInput = ({ bank, classes, handleChange }) => {
    const [config, updateConfig] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        showDropdown: false,
    })

    return (
        <div className="relative">
            <div
                onClick={() => updateConfig({ showDropdown: true })}
                className={`
                    ${classes}
                    cursor-pointer flex justify-between items-center border border-gray-300 bg-white placeholder:text-[12px] text-[12px] rounded w-full hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue
                `}
            >
                <p>{bank ? bank : 'Select Bank'}</p>

                <FiChevronDown />

            </div>

            {config.showDropdown && (
                <div className="absolute z-10 top-10 right-0 w-full h-[200px] bg-white p-2 -lg shadow-xl border overflow-y-auto scrollbar-4">
                    <div className="flex flex-col space-y-5">
                        {appBanks.map((bank, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    console.log(bank);
                                    handleChange(bank)
                                    updateConfig({ showDropdown: false })
                                }}
                                className="flex items-center space-x-4 cursor-pointer transition-all ease-in-out duration-500 hover:translate-x-1"
                            >
                                <img
                                    src={bank.icon}
                                    className={'h-8'}
                                />

                                <p className='text-[14px]'>{bank.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default FormBankSelectInput