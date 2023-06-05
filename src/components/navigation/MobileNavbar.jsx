import React, { useReducer } from 'react'
import { BsGrid } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import { IconLogo, IconLogoWhite, IconTimes } from '../../assets'
import LinkIconButton from '../buttons/LinkIconButton'


const MobileNavbar = () => {
    const [config, updateConfig] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        showMenu: false,
    })

    return (
        <div className='relative'>
            <div className='flex md:hidden justify-between items-center py-4 px-6 mb-[120px] md:mb-0'>
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
                        <Link to={'/'}
                            onClick={() => updateConfig({ showMenu: false })}
                        >
                            <p className='text-white text-[18px]'>Home</p>
                        </Link>
                        <Link to={'/swap'}
                            onClick={() => updateConfig({ showMenu: false })}
                        >
                            <p className='text-white text-[18px]'>Swap</p>
                        </Link>
                        <Link to={'/about'}
                            onClick={() => updateConfig({ showMenu: false })}
                        >
                            <p className='text-white text-[18px]'>The Company</p>
                        </Link>


                        <div className="flex justify-between items-center">
                            <LinkIconButton
                                to={'/login'}
                                title={'Login'}
                                width={'w-[120px]'}
                                iconType={'icon-right'}
                                textColor={'text-primary'}
                                classes={'py-4 bg-slate-100 rounded-lg text-[14px]'}
                            />
                            <LinkIconButton
                                to={'/signup'}
                                title={'Signup'}
                                width={'w-[120px]'}
                                iconType={'icon-right'}
                                fontSize={'text-[14px]'}
                                textColor={'text-white'}
                                classes={'py-4 border border-white rounded-lg bg-primary'}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MobileNavbar