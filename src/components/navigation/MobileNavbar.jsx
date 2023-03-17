import React, { useReducer } from 'react'
import { BsGrid } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import { IconLogo, IconLogoWhite, IconTimes } from '../../assets'
import IconButton from '../buttons/IconButton'


const MobileNavbar = () => {
    const [config, updateConfig] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        showMenu: false,
    })

    return (
        <div className='relative'>
            <div className='flex md:hidden justify-between items-center py-4 px-6'>
                <div className="flex space-x-2 items-center font-spacegrotesk cursor-pointer">
                    <img
                        src={IconLogo}
                        alt="logo"
                    />
                    <p className='font-bold text-primary text-[16px]'>SwapnPay</p>
                </div>

                <BsGrid
                    size={25}
                    className='text-primary cursor-pointer'
                    onClick={() => updateConfig({ showMenu: true })}
                />

            </div>
            {config.showMenu && (
                <div
                    // onClick={() => updateConfig({ showMenu: false })}
                    className="absolute right-0 top-0 h-screen w-full bg-primary flex flex-col"
                >
                    <div className='flex justify-between items-center py-4 pl-8 pr-4'>
                        <div className="flex space-x-2 items-center font-spacegrotesk cursor-pointer">
                            <img
                                alt="logo"
                                src={IconLogoWhite}
                                className='fill-red-500'
                            />
                            <p className='font-bold text-white text-[16px]'>SwapnPay</p>
                        </div>

                        <img
                            alt="logo"
                            src={IconTimes}
                            className='text-whte cursor-pointer'
                            onClick={() => updateConfig({ showMenu: false })}
                        />
                    </div>

                    <div className="mt-10 flex flex-col space-y-[40px] pl-8 pr-4">
                        <Link to={'#'}>
                            <p className='text-white text-[18px]'>Home</p>
                        </Link>
                        <Link to={'#'}>
                            <p className='text-white text-[18px]'>Swap</p>
                        </Link>
                        <Link to={'#'}>
                            <p className='text-white text-[18px]'>The Company</p>
                        </Link>


                        <div className="flex justify-between items-center">
                            <IconButton
                                to={'/login'}
                                title={'Login'}
                                classes={'py-4'}
                                width={'w-[120px]'}
                                bg={'bg-slate-100'}
                                iconType={'icon-right'}
                                fontSize={'text-[14px]'}
                                textColor={'text-primary'}
                                borderRadius={'rounded-lg'}
                            />
                            <IconButton
                                to={'/signup'}
                                title={'Signup'}
                                classes={'py-4'}
                                bg={'bg-primary'}
                                width={'w-[120px]'}
                                iconType={'icon-right'}
                                fontSize={'text-[14px]'}
                                textColor={'text-white'}
                                borderRadius={'rounded-lg'}
                                border={'border border-white'}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MobileNavbar