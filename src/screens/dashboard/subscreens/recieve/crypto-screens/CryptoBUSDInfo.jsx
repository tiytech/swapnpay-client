import React from 'react'
import { FiCopy } from 'react-icons/fi'
import { BsArrowLeft } from 'react-icons/bs'

import { IconQRCode } from '../../../../../assets'
import { HeaderText } from '../../../../../components'


const CryptoBUSDInfo = ({ updateConfig }) => {
    return (
        <div className="w-[40%] h-full bg-gray-100 px-20 py-20 flex flex-col space-y-5">
            <BsArrowLeft
                size={20}
                className='cursor-pointer'
                onClick={() => updateConfig({ showReceiveViaCrypto: true, showBUSDInfo: false })}
            />

            <div className="space-y-2">
                <HeaderText
                    text={'BUSD'}
                    classes={'font-bold text-[20px] text-black'}
                />
                <p className='text-[14px]'>Use the details below to receive your BUSD token</p>
            </div>

            <div className="flex flex-col space-y-5">
                <div className="mx-auto">
                    <img
                        alt="qrcode"
                        src={IconQRCode}
                        className='h-[150px]'
                    />
                </div>

                <div
                    className='w-full mb-4 py-3 px-4 rounded-lg bg-white flex justify-between items-center cursor-pointer'
                >
                    <p className='text-[14px] font-bold' id='usdt-address'>0xfeebabe6b0418ec13b30aadf129f5dcdd4f70cea</p>

                    <FiCopy
                        onClick={() => {
                            const text = document.getElementById('usdt-address').textContent
                            navigator.clipboard.writeText(text)

                            toast.info('Copied!', { autoClose: 2000, theme: 'dark' })
                        }}
                        className='cursor-pointer'
                    />
                </div>

                <p className='text-[12px] mx-auto'>Minimum receivable: 20 BUSD</p>

                <div
                    className='w-full text-center mb-4 py-3 px-4 rounded-lg space-y-2 border border-red-500 flex flex-col justify-between items-center cursor-pointer'
                >
                    <HeaderText
                        text={'Warning!!!'}
                        classes={'font-bold text-[20px] text-black'}
                    />
                    <p className='text-[12px]'>Please send only BUSD to this address, sending any other token to this address would result in permanent loss</p>
                    <p className='text-[12px]'>Always generate new transaction address before sending tokens</p>
                </div>
            </div>
        </div>
    )
}

export default CryptoBUSDInfo