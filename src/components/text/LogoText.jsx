import React, { Fragment } from 'react'
import { IconLogo, IconLogoWhite } from '../../assets'

const LogoText = ({ color, size }) => {
    return (
        <div className="flex space-x-2 items-center font-spacegrotesk cursor-pointer">
            {color !== 'white' && !size && (
                <Fragment>
                    <img
                        src={IconLogo}
                        alt="logo"
                    />
                    <p className='font-bold text-primary text-[16px]'>SwapnPay</p>
                </Fragment>
            )}
           
            {color !== 'white' && size === 'lg' && (
                <Fragment>
                    <img
                        src={IconLogo}
                        alt="logo"
                        className='w-[30px]'
                    />
                    <p className='font-bold text-primary text-[20px]'>SwapnPay</p>
                </Fragment>
            )}

            {color === 'white' && !size && (
                <Fragment>
                    <img
                        src={IconLogoWhite}
                        alt="logo"
                    />
                    <p className='font-bold text-white text-[16px]'>SwapnPay</p>
                </Fragment>
            )}

            {color === 'white' && size === 'lg' && (
                <Fragment>
                    <img
                        src={IconLogoWhite}
                        alt="logo"
                        className='w-[30px]'
                    />
                    <p className='font-bold text-white text-[20px]'>SwapnPay</p>
                </Fragment>
            )}
        </div>
    )
}

export default LogoText