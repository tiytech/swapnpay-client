import React, { useEffect, useReducer } from 'react'

import { appUseItems, blogItems } from '../../data'
import { Blob1, Phone1, Phone2 } from '../../assets'
import { BlogCard, DesktopNavbar, DownloadAppSection, Footer, HeaderText, IconButton, ImageButton, LogoText, MobileNavbar } from '../../components'


const About = () => {
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

            <header className='py-4 flex flex-col justify-center bg-[url("/src/assets/images/home__bg__2.svg")] bg-cover bg-no-repeat lg:min-h-screen h-screen lg:max-w-full lg:flex-row lg:justify-between lg:items-center lg:px-20'>
                <div className='w-full flex flex-col text-center mx-auto px-6 lg:text-start'>
                    <HeaderText
                        color={'text-primary'}
                        text={'About SwapnPay'}
                        classes={'font-bold text-[30px] lg:text-[40px]'}
                    />
                    <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

                <img
                    src={Phone2} alt=""
                    className='md:w-[40%] md:mx-auto'
                />
            </header>

            {/* DOWNLOAD-1 */}
            <DownloadAppSection />

            {/* GET-STARTED */}
            <section className="my-10 space-y-10 flex flex-col justify-start px-6 md:mx-[60px md:px-14 md:my-20 md:space-y-20">
                <div className="mx-auto">
                    <HeaderText
                        classes={'text-[20px]'}
                        text={'Do more with SwapnPay'}
                        color={'text-primary font-bold'}
                    />
                </div>

                <div className="flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:justify-between ">
                    {appUseItems.map((item, index) => (
                        <div
                            key={index}
                            className="border rounded-xl border-primary p-4 flex flex-col space-y-2 items-start lg:w-[400px] lg:h-[200px]"
                        >
                            <img
                                alt="learn"
                                src={item.icon}
                            />

                            <HeaderText
                                text={item.title}
                                classes={'text-[18px]'}
                                color={'text-primary font-bold'}
                            />

                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FOOTER */}
            <Footer />
        </main>
    )
}


export default About