import React, { useReducer } from 'react'
import { BsGrid } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import IconButton from '../buttons/IconButton'
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
                <Link to={'#'}>
                    <p className=' text-primary text-[14px]'>The Company</p>
                </Link>
            </div>

            <div className="flex space-x-2 items-center">
                <IconButton
                    to={'/login'}
                    title={'Login'}
                    classes={'py-2'}
                    width={'w-[100px] md:w-[100px]'}
                    iconType={'icon-right'}
                    fontSize={'text-[14px]'}
                    textColor={'text-white'}
                    borderRadius={'rounded-md'}
                    bg={'bg-primary'}
                    border={'border border-primary'}
                />
                <IconButton
                    to={'/signup'}
                    bg={'bg-white'}
                    title={'Signup'}
                    classes={'py-2'}
                    iconType={'icon-right'}
                    fontSize={'text-[14px]'}
                    textColor={'text-primary'}
                    borderRadius={'rounded-md'}
                    width={'w-[100px] md:w-[100px]'}
                    border={'border border-primary'}
                />
            </div>

        </div>
    )
}

export default DesktopNavbar