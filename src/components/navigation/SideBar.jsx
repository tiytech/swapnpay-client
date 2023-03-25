import React from 'react'
import { useNavigate } from 'react-router-dom'

import { IconLogoWhite } from '../../assets'
import { user__menu__items } from '../../data'
import IconButton from '../buttons/IconButton'
import { useGlobalContext } from '../../context'


const SideBar = () => {
    const navigate = useNavigate()
    const { dashboardConfig, updateDashboardConfig } = useGlobalContext()

    return (
        <div className='min-w-72 w-72 h-screen bg-primary duration-500 p-5 pt-4 sticky top-0 left-0'>
        {/* <div className='min-w-72 w-72 h-screen bg-gradient-to-r from-primary to-primary-light duration-500 p-5 pt-4 sticky top-0 left-0'> */}
            <div className="flex space-x-2 justify-center items-center font-spacegrotesk">
                <img
                    alt="logo"
                    src={IconLogoWhite}
                    className='fill-red-500 w-7'
                />
                <p className='font-bold text-white text-[20px]'>SwapnPay</p>
            </div>

            <div className="flex flex-col mt-5 space-y-8">
                <ul className='pt-6 relative space-y-3'>
                    {user__menu__items?.map((menu, index) => (
                        <li
                            key={`${index}`}
                            className={`text-gray-300 text-[12px] grid grid-cols-2 items-center space-x-[-4em] cursor-pointer px-4 py-4 mt-4 transition-all ease-in-out duration-500 hover:bg-[#ffffff60] hover:rounded-lg ${dashboardConfig.activeLink === menu.title && 'bg-white rounded-lg'}`}
                            onClick={() => updateDashboardConfig({ activeLink: menu.title })}
                        >
                            <img
                                className='text-red-400' alt=""
                                src={dashboardConfig.activeLink === menu.title ? menu.iconDark : menu.icon}
                            />
                            <span
                                className={`uppercase font-medium origin-left duration-200 text-[12px] ${dashboardConfig.activeLink === menu.title ? 'text-primary font-medium' : 'text-white'}`}
                            >
                                {menu.title}
                            </span>
                        </li>
                    ))}
                </ul>

                <IconButton
                    type={'submit'}
                    title={'Logout'}
                    width={'w-full'}
                    handleClick={() => {
                        navigate('/login', { replace: true })
                    }}
                    iconType={'icon-right'}
                    textColor={'text-white'}
                    classes={'py-4 text-[16px] rounded-xl bg-[#FD4E6E]'}
                />
            </div>
        </div>
    )
}

export default SideBar