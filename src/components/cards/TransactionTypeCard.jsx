import React, { Fragment } from 'react'

import IconImage from '../images/IconImage'
import { useGlobalContext } from '../../context'


const TransactionTypeCard = ({ item }) => {
	const { modalPages, updateModalPages } = useGlobalContext()

    return (
        <Fragment>
            {item.type !== 'OTHERS' && (
                <div
                    onClick={() => {
                        if (item.type === 'AIRTIME') {
                            updateModalPages({ showBuyAirtimeScreen: !modalPages.showBuyAirtimeScreen })
                        }
                        if (item.type === 'DATA') {
                            updateModalPages({ showBuyDataScreen: !modalPages.showBuyDataScreen })
                        }
                        if (item.type === 'CABLE') {
                            updateModalPages({ showCableSubscriptionScreen: !modalPages.showCableSubscriptionScreen })
                        }
                        if (item.type === 'ELECTRICITY') {
                            updateModalPages({ showElectricityPaymentScreen: !modalPages.showElectricityPaymentScreen })
                        }
                    }}
                    className="mb-4 flex flex-col justify-between bg-white cursor-pointer p-4 w-full md:w-[220px] h-[110px] rounded-lg transition-all ease-in-out duration-500 hover:-translate-y-1"
                >
                    <IconImage
                        icon={item.icon}
                    />

                    <div>
                        <p className='font-bold text-[12px]'>{item.title}</p>
                        <p className='text-[12px]'>{item.intro}</p>
                    </div>
                </div>
            )}
            {item.type === 'OTHERS' && (
                <div
                    className="mb-4 flex flex-col justify-center items-center bg-white cursor-pointer p-4 w-full md:w-[220px] h-[120px] rounded-lg transition-all ease-in-out duration-500 hover:-translate-y-1"
                >
                    <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                        <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                        <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                    </div>
                </div>
            )}
        </Fragment>
    )
}

export default TransactionTypeCard