import React from 'react'

import HeaderText from '../text/HeaderText'
import ImageButton from '../buttons/ImageButon'


const DownloadAppSection = () => {
    return (
        <section className="rounded-md bg-gradient-to-br from-primary to-primary-light px-6 mx-6 py-[60px] flex flex-col md:flex md:flex-row md:justify-between md:items-center md:mx-[60px] md:px-10">
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

            </div>
            <div className="flex justify-between mt-10 md:mt-0 md:space-x-5">
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
        </section>
    )
}

export default DownloadAppSection