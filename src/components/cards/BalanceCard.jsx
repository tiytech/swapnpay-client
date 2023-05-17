import React from 'react'

import HeaderText from '../text/HeaderText'


const BalanceCard = ({ title }) => {
    return (
        <div className={`
            ${title === 'Fincra' && 'border-purple-300'}
            ${title === 'Flutter Wave' && 'border-yellow-300 '}
            ${title === 'Sudo' && 'border-blue-300'}
            border rounded w-[250px] h-[300px] shadow-lg shadow-slate-300 bg-white px-6 py-4 flex flex-col space-y-5 mt-4 md:mt-0   
        `}>
            <HeaderText
                text={title}
                classes={'text-[25px]'}
                color={'text-black font-semibold'}
            />

            <div className="flex justify-between">
                <p className="text-[14px]">Balance (NGN)</p>
                <p className="text-[14px]">20,000</p>
            </div>
            <div className="flex justify-between">
                <p className="text-[14px]">Balance (USD)</p>
                <p className="text-[14px]">3,300</p>
            </div>
        </div>
    )
}

export default BalanceCard