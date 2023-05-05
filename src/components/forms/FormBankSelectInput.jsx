import { useSelector } from 'react-redux'
import { FiChevronDown } from 'react-icons/fi'
import React, { useEffect, useReducer } from 'react'


const FormBankSelectInput = ({ bank, classes, handleChange }) => {
    const { banksList } = useSelector(state => state.user)

    const [config, updateConfig] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        showDropdown: false, filteredBankList: []
    })

    useEffect(() => {
        updateConfig({ filteredBankList: banksList })
    }, [banksList?.length])

    return (
        <div className="relative">
            <div
                onClick={() => updateConfig({ showDropdown: !config.showDropdown })}
                className={`
                    ${classes}
                    cursor-pointer flex justify-between items-center border border-gray-300 bg-white placeholder:text-[12px] text-[12px] rounded w-full hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue
                `}
            >
                <p>{bank ? bank : 'Select Bank'}</p>

                <FiChevronDown />

            </div>

            {config.showDropdown && (
                <div className="absolute z-10 top-10 right-0 w-full  bg-white -lg shadow-xl">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search"
                        className="border-b border-gray-300 bg-slate-200 placeholder:text-[12px] placeholder:text-slate-600 text-slate-600 text-[12px] w-full px-5 py-2.5 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                        onChange={(e) => {
                            if (e.target.value === '') {
                                return updateConfig({ filteredBankList: banksList })
                            }
                            updateConfig({ filteredBankList: config.filteredBankList.filter(bank => bank.name.toLowerCase().includes(e.target.value.toLowerCase())) })
                        }}
                    />
                    <div className="flex flex-col space-y-2 h-[200px] border overflow-y-auto scrollbar-4">
                        {config.filteredBankList?.map((bank, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    handleChange(bank)
                                    updateConfig({ showDropdown: false })
                                }}
                                className="flex items-center space-x-4 cursor-pointer transition-all ease-in-out duration-500 hover:bg-slate-100 px-2 py-2"
                            >
                                <p className='text-[14px]'>{bank?.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default FormBankSelectInput