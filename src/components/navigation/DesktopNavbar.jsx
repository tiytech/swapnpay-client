import React, { useReducer } from 'react'
import { BsGrid } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import LinkIconButton from '../buttons/LinkIconButton'
import { IconLogo, IconLogoWhite, IconTimes } from '../../assets'


const DesktopNavbar = () => {
    const [config, updateConfig] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        showMenu: false,
    })

    return (
        <div className='justify-between items-center py-4 px-6 relative bg-white shadow-lg mt-5 mx-4 rounded hidden md:flex'>
            <Link to={'/'}>
                <div className="flex space-x-2 items-center font-spacegrotesk cursor-pointer">
                    <img
                        src={IconLogo}
                        alt="logo"
                    />
                    <p className='font-bold text-primary text-[16px]'>SwapnPay</p>
                </div>
            </Link>

            <div className="flex space-x-5 items-center">
                <Link to={'/'}>
                    <p className=' text-primary text-[14px]'>Home</p>
                </Link>
                <Link to={'/swap'}>
                    <p className=' text-primary text-[14px]'>Swap</p>
                </Link>
                <Link to={'/about'}>
                    <p className=' text-primary text-[14px]'>The Company</p>
                </Link>
            </div>

            <div className="flex space-x-2 items-center">
                <LinkIconButton
                    to={'/login'}
                    title={'Login'}
                    iconType={'icon-right'}
                    fontSize={'text-[14px]'}
                    textColor={'text-white'}
                    width={'w-[100px] md:w-[100px]'}
                    classes={'py-2 border border-primary bg-primary rounded-md'}
                />
                <LinkIconButton
                    to={'/signup'}
                    title={'Signup'}
                    iconType={'icon-right'}
                    fontSize={'text-[14px]'}
                    textColor={'text-primary'}
                    width={'w-[100px] md:w-[100px]'}
                    classes={'py-2 border border-primary rounded-md bg-white'}
                />
            </div>

        </div>
    )
}

export default DesktopNavbar