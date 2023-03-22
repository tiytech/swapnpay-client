import React from 'react'
import { BsArrowRight } from 'react-icons/bs'


const IconButton = ({ title, textColor, classes, iconType, width, type }) => {
    return (
        <button
            type={type ? type : 'button'}
            className={`
                ${width}
                ${classes}
                ${textColor}
                flex items-center justify-center space-x-1
            `}
        >
            <span>{title}</span>
            {iconType === 'icon-right' && (
                <BsArrowRight
                    size={20}
                    className={`${textColor} cursor-pointer`}
                />
            )}

        </button>
    )
}

export default IconButton