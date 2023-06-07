import React, { useEffect, useReducer } from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

import { blogItems } from '../../data'
import { Blob1, Phone1, Phone2 } from '../../assets'
import { BlogCard, DesktopNavbar, DownloadAppSection, Footer, HeaderText, LinkIconButton, ImageButton, LogoText, MobileNavbar } from '../../components'


const Landing = () => {
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

            <header className='py-4 flex flex-col justify-center bg-[url("/src/assets/images/home__bg__2.svg")] bg-cover bg-no-repeat md:min-h-screen h-screen '>
                <div className='max-w-[300px] text-center mx-auto px-6 lg:max-w-full -mt-[100px] md:-mt-0  '>
                    <div className='text-[30px] font-Poppins font-extrabold lg:text-[30px] flex justify-center'>
                        <span className='lg:flex lg:items-center'>Complete <img src={Blob1} alt="blob" className='hidden lg:block' />
                            Foreign School Fees
                            <span className='px-2 py-1 mx-1 bg-primary-light text-white rounded-full'>payments</span>
                            with ease.
                        </span>

                    </div>
                </div>
                <section className="my-10 space-y-10 flex flex-col px-6 ">
                    <p className='text-center mt-5'>Foreign Fees payment has never been easier. We help you navigate the hurdles of Foreign payments. Make payment with ease on SwapnPay. </p>

                    <div className="mx-auto">
                        <LinkIconButton
                            to={'/signup'}
                            title={'Signup Now'}
                            iconType={'icon-right'}
                            textColor={'text-white'}
                            width={'w-[200px] md:w-[200px]'}
                            classes={'py-4 text-[14px] rounded-lg bg-gradient-to-r from-primary to-primary-light'}
                        />
                    </div>
                </section>
            </header>

            {/* DOWNLOAD-1 */}
            <DownloadAppSection />

            {/* HOW-TO-USE */}
            <section className="w-full bg-gradient-to-br from-primary to-primary-light px-4 py-[40px] my-10 flex flex-col md:flex-row md:justify-between md:mx-[60px] md:my-20 md:w-auto md:rounded-md md:px-10 md:py-[80px]">
                <div className="lg:w-[50%]">
                    <HeaderText
                        classes={'text-[20px]'}
                        color={'text-white font-bold'}
                        text={'Make all payments with your SwapnPay wallet'}
                    />

                    <ul className='mt-5 list-disc space-y-8 ml-3'>
                        <li className='text-white'>
                            <div className="flex flex-col">
                                <p className="font-semibold font-spacegrotesk">Pay for School</p>
                                <p className="">Pay your School tuition or secure your admission abroad by making payments using our platform.</p>
                            </div>
                        </li>
                        <li className='text-white'>
                            <div className="flex flex-col">
                                <p className='font-semibold font-spacegrotesk'>Virtual Card</p>
                                <p className=''>Create a virtual card and make payment online safely and securely.</p>
                            </div>
                        </li>
                        <li className='text-white'>
                            <div className="flex flex-col">
                                <p className='font-semibold font-spacegrotesk'>Receive Payments in Crypto <span className='px-1 py-1 bg-red-400 rounded-sm text-[10px]'>coming soon</span></p>
                                <p className=''>You can receive payment with stable coins on our platform.</p>
                            </div>
                        </li>
                        <li className='text-white'>
                            <div className="flex flex-col">
                                <p className='font-semibold font-spacegrotesk'>Swap Various Currencies</p>
                                <p className=''>Swap between Naira and Dollar at lightening speed using the SwapnPay platform.</p>
                            </div>
                        </li>
                        <li className='text-white'>
                            <div className="flex flex-col">
                                <p className='font-semibold font-spacegrotesk'>Utility Bills Payments</p>
                                <p className=''>Make electricity. airtime and data bundle payment in a twinkle of an eye. We support all your favourite utility providers.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="hidden lg:block lg:w-[50%]">
                    <div className="w-[500px] h-[500px]">
                        <img
                            alt="phone"
                            src={Phone2}
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </section>

            {/* GET-STARTED */}
            <section className="my-10 space-y-10 flex flex-col justify-start px-6 md:mx-[60px] md:px-20 md:my-20 md:space-y-20">
                <div className="mx-auto">
                    <HeaderText
                        classes={'text-[20px]'}
                        color={'text-primary font-bold'}
                        text={'Get Started in 3 easy steps'}
                    />
                </div>

                <div className="md:flex md:justify-between md:items-start">
                    <ul className='mt-5 space-y-10 ml-3 relative h-[400px] py-2 px-4'>
                        <li
                            className='text-primary'
                            onClick={() => updateConfig({ currentStep: 1 })}
                        >
                            <div className="absolute left-0 top-0 h-full w-1 bg-primary-light opacity-60">
                            </div>
                            {config.currentStep === 1 && (
                                <div className="absolute -left-[2px] top-0 h-[50px] w-2 bg-primary rounded-full">
                                </div>
                            )}
                            <div className="flex flex-col">
                                <p className="font-semibold font-spacegrotesk">Download the app</p>
                                <p className="">Download SwapnPay From your favourite app store</p>
                            </div>
                        </li>
                        <li
                            className='text-primary'
                            onClick={() => updateConfig({ currentStep: 2 })}
                        >
                            {config.currentStep === 2 && (
                                <div className="absolute -left-[2px] top-[120px] h-[50px] w-2 bg-primary rounded-full">
                                </div>
                            )}
                            <div className="flex flex-col">
                                <p className='font-semibold font-spacegrotesk'>Create an account</p>
                                <p className=''>Easily create an account by filling in minimal details.</p>
                            </div>
                        </li>
                        <li
                            className='text-primary'
                            onClick={() => updateConfig({ currentStep: 3 })}
                        >
                            {config.currentStep === 3 && (
                                <div className="absolute -left-[2px] top-[230px] h-[50px] w-2 bg-primary rounded-full">
                                </div>
                            )}
                            <div className="flex flex-col">
                                <p className='font-semibold font-spacegrotesk'>Fund your wallet</p>
                                <p className=''>Fund your wallet easily.</p>
                            </div>
                        </li>
                        <li
                            className='text-primary'
                            onClick={() => updateConfig({ currentStep: 4 })}
                        >
                            {config.currentStep === 4 && (
                                <div className="absolute -left-[2px] top-[320px] h-[50px] w-2 bg-primary rounded-full">
                                </div>
                            )}
                            <div className="flex flex-col">
                                <p className='font-semibold font-spacegrotesk'>Enjoy</p>
                                <p className=''>Experience limitless transaction.</p>
                            </div>
                        </li>
                    </ul>

                    <div className="w-[300px] hidden md:block">
                        <img
                            alt="phone"
                            src={Phone1}
                            className="w-full"
                        />
                    </div>
                </div>
            </section>

            {/* DOWNLOAD-2 */}
            <section className="relative rounded-md bg-gradient-to-br from-primary to-primary-light px-6 mx-6 py-[60px] md:my-[180px] md:mx-[60px] flex flex-col md:flex-row md:justify-between">
                <div className="mx-auto flex flex-col justify-center text-center md:mx-0 md:items-start">
                    <HeaderText
                        color={'text-white'}
                        text={'Download The App'}
                        classes={'font-bold text-[20px]'}
                    />
                    <HeaderText
                        color={'text-white'}
                        text={'Download SwapnPay From your favourite app store '}
                        classes={'text-[12px]'}
                    />

                    <div className="flex justify-between mt-10 md:space-x-5">
                        <ImageButton
                            to={'#'}
                            title={'PlayStore'}
                            width={'w-[120px]'}
                            fontSize={'text-[14px]'}
                            textColor={'text-white'}
                            iconType={'icon-playstore'}
                            borderRadius={'rounded-lg'}
                            classes={'py-4 px-2 bg-primary'}
                        />
                        <ImageButton
                            to={'#'}
                            title={'AppStore'}
                            width={'w-[120px]'}
                            iconType={'icon-apple'}
                            fontSize={'text-[14px]'}
                            textColor={'text-white'}
                            borderRadius={'rounded-lg'}
                            classes={'py-4 px-2 bg-primary'}
                        />
                    </div>
                </div>

                <div className="hidden md:block absolute right-10 -top-20">
                    <img src={Phone2}
                        alt="phone"
                    />
                </div>
            </section>

            {/* BLOG */}
            <section className="my-10 space-y-5 flex flex-col justify-start pl-6 w-full md:px-14 md:my-20">
                <div className="mx-">
                    <HeaderText
                        classes={'text-[20px]'}
                        color={'text-primary font-bold'}
                        text={'Stay Informed'}
                    />
                    <HeaderText
                        text={'Check our Blog post'}
                        color={'text-primary'}
                        classes={'text-[18px] font-lato'}
                    />
                </div>

                <div className="flex space-x- w-full overflow-x-auto md:justify-between">
                    {blogItems.map((blog, index) => (
                        <BlogCard
                            key={index}
                            blog={blog}
                            index={index}
                            maxCount={blogItems.length - 1}
                        />
                    ))}
                </div>
            </section>

            {/* FOOTER */}
            <Footer />
        </main>
    )
}

export default Landing