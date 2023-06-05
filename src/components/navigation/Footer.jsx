import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

import LogoText from '../text/LogoText'
import HeaderText from '../text/HeaderText'
import ImageButton from '../buttons/ImageButon'


const Footer = () => {
    return (
        <footer className='rounded-xl bg-primary px-6 mx-6 mb-5 py-[20px] flex flex-col md:flex-row-reverse md:justify-between md:mx-[60px] md:my-20 md:py-20'>
            <div className="flex justify-between md:w-1/2">
                <div className="flex flex-col">
                    <HeaderText
                        text={'Company'}
                        classes={'text-[18px]'}
                        color={'text-white font-bold'}
                    />

                    <div className="space-y-1">
                        <p className='text-[14px] text-white'>About</p>
                        <p className='text-[14px] text-white'>Privacy Policy</p>
                        <p className='text-[14px] text-white'>Terms of Service</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <HeaderText
                        text={'Support'}
                        classes={'text-[18px]'}
                        color={'text-white font-bold'}
                    />

                    <div className="space-y-1">
                        <p className='text-[14px] text-white'>FAQ</p>
                        <p className='text-[14px] text-white'>Supported Countries</p>
                        <p className='text-[14px] text-white'>Join Our Discord</p>
                    </div>
                </div>
            </div>


            <div className='flex flex-col mt-10 md:mt-0 md:items-start md:space-y-10'>
                <div className='flex flex-col mx-auto md:mx-0'>
                    <LogoText
                        size={'lg'}
                        color={'white'}
                    />
                    <p className='text-[12px] text-gray-300 ml-10'>Your Passport to Easy Foreign Payments!</p>
                </div>

                <div className="flex justify-between mt-5 md:my-5 md:space-x-5">
                    <ImageButton
                        to={'#'}
                        title={'PlayStore'}
                        width={'w-[120px]'}
                        fontSize={'text-[14px]'}
                        textColor={'text-primary'}
                        iconType={'icon-playstore'}
                        borderRadius={'rounded-lg'}
                        classes={'py-4 px-2 bg-primary-light'}
                    />
                    <ImageButton
                        to={'#'}
                        title={'AppStore'}
                        width={'w-[120px]'}
                        iconType={'icon-apple'}
                        fontSize={'text-[14px]'}
                        textColor={'text-primary'}
                        borderRadius={'rounded-lg'}
                        classes={'py-4 px-2 bg-primary-light'}
                    />
                </div>
                <div className="flex justify-center space-x-4 mt-5">
                    <FaFacebookF
                        size={25}
                        className='text-white'
                    />
                    <FaInstagram
                        size={25}
                        className='text-white'
                    />
                    <FaTwitter
                        size={25}
                        className='text-white'
                    />
                    <FaWhatsapp
                        size={25}
                        className='text-white'
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer