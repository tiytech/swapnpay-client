import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'


const SettingsItemCard = ({ title, handleClick }) => {
    return (
        <div
            onClick={handleClick}
            className={`
                w-full flex justify-between items-center px-4 py-4 shadow-md bg-white mt-2 rounded-md cursor-pointer transition-all duration-500 ease-in-out hover:scale-x-[1.02]
            `}
        >
            <p className="text-[14px] font-normal">{title}</p>
            <IoIosArrowForward />
        </div>
    )
}

export default SettingsItemCard