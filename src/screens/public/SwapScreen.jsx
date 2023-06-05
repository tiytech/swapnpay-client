import React, { useEffect, useReducer } from 'react'

import { appCountries, appUseItems, blogItems } from '../../data'
import { Blob1, FlagNGN, FlagUSA, Phone1, Phone2 } from '../../assets'
import { BlogCard, DesktopNavbar, DownloadAppSection, Footer, HeaderText, LinkIconButton, ImageButton, LogoText, MobileNavbar } from '../../components'
import { BsChevronDown } from 'react-icons/bs'


const SwapScreen = () => {
    const [config, updateConfig] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        currentStep: 1, showMobileNav: true
    })

    useEffect(() => {
        window.addEventListener('DOMContentLoaded', () => {
            if (window.innerWidth <= 768) {
                updateConfig({ showMobileNav: true })
            } else {
                updateConfig({ showMobileNav: false })
            }
        })

        return () => {
            window.removeEventListener('resize', () => { })
        }
    }, [])

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 768) {
                updateConfig({ showMobileNav: true })
            } else {
                updateConfig({ showMobileNav: false })
            }
        })
    }, [window.innerWidth])


    return (
        <main className=''>
            <MobileNavbar />
            <DesktopNavbar />

            <header className='py-4 flex flex-col bg-[url("/src/assets/images/home__bg__2.svg")] bg-cover bg-no-repeat lg:min-h-screen h-screen lg:max-w-full lg:flex-row lg:justify-between lg:items-center lg:px-20'>
                <div className='w-full flex flex-col text-center mx-auto mt-10 px-6 lg:text-start'>
                    <HeaderText
                        color={'text-primary'}
                        text={'Swap between Dollar and Naira conveniently'}
                        classes={'font-bold text-[20px] lg:text-[30px]'}
                    />
                    <p >Swap your Naira for Dollar and your Dollar back to Naira in seconds at very low transaction fees.</p>
                </div>

                <div className="rounded-xl shadow-lg p-4 flex flex-col space-y-10 bg-white mx-5 mt-10 lg:w-[800px]">
                    <div className="relative">
                        <div className='flex space-x-5 items-center justify-between border border-primary rounded-lg py-5 px-1 lg:px-5'>
                            <div className="flex space-x-1 items-center w-[20%]">
                                <img
                                    alt=""
                                    src={FlagNGN}
                                />

                                <p className='text-[14px]'>NGN</p>

                                <BsChevronDown
                                    size={30}
                                    className='text-primary'
                                />
                            </div>

                            <input
                                disabled
                                type="text"
                                placeholder='Amount'
                                className='w-[80%] bg-white focus:outline-none placeholder:text-primary'
                            />
                        </div>
                        {/* <div className="absolute bottom-0 bg-sky-600 flex flex-col w-[200px] h-[200px py-4">
                            {appCountries.map((item, index) => {
                                <div
                                    key={index}
                                    className="flex justify-between items-center cursor-pointer"
                                >
                                    <img
                                        alt=""
                                        // src={item.icon}
                                        src={FlagNGN}
                                    />

                                    <p className='text-[20/px]'>{item.title}</p>
                                </div>
                            })}
                        </div> */}
                    </div>
                    <div className="relative">
                        <div className='flex space-x-5 items-center justify-between border border-primary rounded-lg py-5 px-1 lg:px-5'>
                            <div className="flex space-x-1 items-center w-[20%]">
                                <img
                                    alt=""
                                    src={FlagUSA}
                                />

                                <p className='text-[14px]'>USA</p>

                                <BsChevronDown
                                    size={30}
                                    className='text-primary'
                                />
                            </div>

                            <input
                                disabled
                                type="text"
                                placeholder='Amount'
                                className='w-[80%] bg-white focus:outline-none placeholder:text-primary'
                            />
                        </div>
                    </div>

                    <LinkIconButton
                        to={'#'}
                        width={'w-full'}
                        title={'Swap now'}
                        iconType={'icon-right'}
                        textColor={'text-white'}
                        classes={'py-4 text-[14px] rounded-lg bg-gradient-to-r from-primary to-primary-light'}
                    />

                    {/* <p className='text-[14px]'>Current price of dollar to Naira : 740 Naira</p> */}
                </div>
            </header>

            {/* DOWNLOAD-1 */}
            <DownloadAppSection />

            <div className="my-20"></div>

            {/* FOOTER */}
            <Footer />
        </main>
    )
}


export default SwapScreen