import React, { Fragment } from 'react'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import IconButton from '../buttons/IconButton'
import { useGlobalContext } from '../../context'
import { IconLogoWhite, IconMenuDark } from '../../assets'
import { admin__menu__items, user__menu__items } from '../../data'
import { authUserLogout } from '../../services/actions/auth.actions'


const MobileSideBar = () => {
    const navigate = useNavigate()
    const { dashboardConfig, updateDashboardConfig } = useGlobalContext()
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)

    return (
        <Fragment>
            {/* {!dashboardConfig.showSideBar && ( */}
            <div
                onClick={() => {
                    updateDashboardConfig({ showSideBar: true })
                }}
                className='z-20 mn:min-w-0 mn:w-0 absolute right-5 top-5 cursor-pointer'
            >
                <img src={IconMenuDark} alt="" />
            </div>
            {/* )} */}

            {dashboardConfig.showSideBar && (
                <div className='w-[320px] z-20 mn:min-w-0 mn:w-0 h-screen bg-primary duration-500 px-5 pt-4 absolute top-0 left-0 shadow-menu'>
                    <div className="flex justify-between items-center font-spacegrotesk">
                        <div className="flex space-x-2 justify-between items-center font-spacegrotesk">
                            <img
                                alt="logo"
                                src={IconLogoWhite}
                                className='fill-red-500 w-5'
                            />
                            <p className='font-bold text-white text-[15px]'>SwapnPay</p>
                        </div>

                        <p
                            onClick={() => {
                                updateDashboardConfig({ showSideBar: false })
                            }}
                            className='text-white text-[20px] cursor-pointer'
                        >x</p>
                    </div>

                    <div className="flex flex-col mt-5 space-y-8">
                        <ul className='pt-6 relative space-y-3'>
                            {!user?.credentials?.is_administrator && user__menu__items?.map((menu, index) => (
                                <li
                                    key={`${index}`}
                                    className={`text-gray-300 text-[12px] grid grid-cols-2 items-center space-x-[-4em] cursor-pointer px-4 py-4 mt-4 transition-all ease-in-out duration-500 hover:bg-[#ffffff60] hover:rounded-lg ${dashboardConfig.activeLink === menu.title && 'bg-white rounded-lg'}`}
                                    onClick={() => updateDashboardConfig({ activeLink: menu.title, showSideBar: false })}
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
                        <ul className='pt- relative space-y-3'>
                            {user?.credentials?.is_administrator && admin__menu__items?.map((menu, index) => (
                                <li
                                    key={`${index}`}
                                    className={`text-gray-300 text-[12px] grid grid-cols-2 items-center space-x-[-4em] cursor-pointer px-4 py-3 mt-4 transition-all ease-in-out duration-500 hover:bg-[#ffffff60] hover:rounded-lg ${dashboardConfig.activeLink === menu.title && 'bg-white rounded-lg'}`}
                                    onClick={() => updateDashboardConfig({ activeLink: menu.title })}
                                >
                                    <img
                                        className='text-red-400' alt=""
                                        src={dashboardConfig.activeLink === menu.title ? menu.iconDark : menu.icon}
                                    />
                                    <span
                                        className={`uppercase font-medium origin-left duration-200 text-[12px] ${dashboardConfig.activeLink === menu.title ? 'text-primary font-medium' : 'text-white'}`}
                                    >
                                        {menu.title === 'Admin Settings' ? 'Settings' : menu.title}
                                    </span>
                                </li>
                            ))}
                        </ul>


                        <IconButton
                            type={'submit'}
                            title={'Logout'}
                            width={'w-full'}
                            handleClick={() => {
                                const formData = { refresh: user?.refresh }

                                dispatch(authUserLogout({ formData, toast, navigate }))
                                // navigate('/login', { replace: true })
                            }}
                            iconType={'icon-right'}
                            textColor={'text-white'}
                            classes={'py-4 text-[16px] rounded-xl bg-[#FD4E6E]'}
                        />
                    </div>
                </div>
            )}
        </Fragment>
    )
}

export default MobileSideBar