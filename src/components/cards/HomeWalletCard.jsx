import React from 'react'

import { appCountries } from '../../data'
import HeaderText from '../text/HeaderText'
import IconButton from '../buttons/IconButton'
import { useGlobalContext } from '../../context'


const HomeWalletCard = ({ config, updateConfig }) => {
    const { modalPages, updateModalPages } = useGlobalContext()

    return (
        <div
            onClick={() => {
                if (config.showCurrencySelect) {
                    updateConfig({ showCurrencySelect: false })
                }
            }}
            // className="flex flex-col space-y-5 justify-between items-center h-[250px w-full rounded-xl bg-primary py-5 px-10">
            className="flex flex-col space-y-5 justify-between items-center h-[250px w-full rounded-xl bg-gradient-to-bl from-primary-light to-primary py-5 px-10">
            <HeaderText
                text={'$20,000'}
                classes={'font-bold text-[30px] text-white'}
            />

            <div className="flex justify-between items-center bg-white w-[220px] h-[50px] py-1 px-4 rounded-lg relative">
                <p className='text-[12px]'>Account Balance</p>

                <div
                    onClick={() => {
                        updateConfig({ showCurrencySelect: true })
                    }}
                    className="rounded flex space-x-2 items-center border border-gray-200 shadow-lg h-[35px] px-2 bg-white"
                >
                    <img
                        alt="icon"
                        src={appCountries.find(e => e.title === config.currentCurrency).icon}
                    />

                    <p className='text-[12px]'>{appCountries.find(e => e.title === config.currentCurrency).title}</p>

                </div>

                {config.showCurrencySelect && (
                    <div className="absolute top-0 right-0 bg-white w-[100px] h-[100px] space-y-2 p-2 rounded-b rounded-tr overflow-y-auto scrollbar-4">
                        {appCountries.map((item, index) => (
                            <div
                                key={index}
                                className="flex space-x-2 items-center cursor-pointer"
                                onClick={() => {
                                    updateConfig({ showCurrencySelect: false })
                                    updateConfig({ currentCurrency: appCountries.find(e => e.title === item.title).title })
                                }}
                            >
                                <img
                                    alt="icon"
                                    src={item.icon}
                                />

                                <p className='text-[12px]'>{item.title}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex justify-between w-full">
                <IconButton
                    type={'submit'}
                    title={'Receive'}
                    width={'w-[150px]'}
                    iconType={'icon-right'}
                    textColor={'text-primary'}
                    classes={'py-4 text-[16px] rounded-xl bg-primary-light'}
                    handleClick={() => updateModalPages({ showReciveScreen: !modalPages.showReciveScreen })}
                />
                <IconButton
                    type={'submit'}
                    title={'Pay'}
                    width={'w-[150px]'}
                    iconType={'icon-right'}
                    textColor={'text-primary'}
                    classes={'py-4 text-[16px] rounded-xl bg-primary-light'}
                    handleClick={() => updateModalPages({ showPaymentScreen: !modalPages.showPaymentScreen })}
                />
            </div>
        </div>
    )
}

export default HomeWalletCard