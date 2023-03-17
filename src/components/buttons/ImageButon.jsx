import React from 'react'
import { Link } from 'react-router-dom'
import { IoLogoGooglePlaystore, IoLogoApple } from 'react-icons/io5'
import { IconApple, IconAppleDark, IconPlayStore, IconPlayStoreDark } from '../../assets'


const ImageButton = ({ to, title, textColor, classes, iconType, width, fontSize, borderRadius }) => {
    return (
        <Link to={to}>
            <button
                type='button'
                className={`
                flex items-center justify-center space-x-1
                ${classes}
                ${width ? width : 'w-[100px]'}
                $${fontSize ? fontSize : 'text-[14px]'} 
                ${textColor ? textColor : 'text-white'} 
                ${borderRadius ? borderRadius : 'rounded'}
            `}
            >
                <span>{title}</span>
                {iconType === 'icon-playstore' && textColor === 'text-white' && (
                    <img
                        alt="playstore"
                        src={IconPlayStore}
                    />
                )}
                {iconType === 'icon-apple' && textColor === 'text-white' && (
                    <img
                        src={IconApple}
                        alt="appstore"
                    />
                )}

                {iconType === 'icon-playstore' && textColor !== 'text-white' && (
                    <img
                        alt="playstore"
                        src={IconPlayStoreDark}
                    />
                )}
                {iconType === 'icon-apple' && textColor !== 'text-white' && (
                    <img
                        src={IconAppleDark}
                        alt="appstore"
                    />
                )}
            </button>
        </Link>
    )
}

export default ImageButton