import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'


const IconButton = ({ to, title, textColor, classes, iconType, width }) => {
    return (
        <Link to={to}>
            <button
                type='button'
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
        </Link>
    )
}

export default IconButton