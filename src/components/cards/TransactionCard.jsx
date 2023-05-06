import React from 'react'
import { IconCredit, IconDebit, IconSwapSuccess } from '../../assets'

const TransactionCard = ({ transaction }) => {

    console.log(transaction)

    return (
        <div className="flex justify-between items-center w-full border-b py-2 cursor-pointer transition-all ease-in-out duration-500 hover:translate-x-1">
            <div className="flex items-center space-x-4">
                <img
                    alt="transaction-icon"
                    src={
                        transaction?.transaction_type === 'Credit' ? IconCredit : transaction?.transaction_type === 'Debit' ? IconDebit : IconSwapSuccess
                    }
                />
                <div className="flex flex-col space-y-1">
                    <p className='text-[14px] font-bold'>{transaction?.description}</p>
                    <p className='text-[12px]'>{transaction?.receiver}</p>
                </div>
            </div>

            <div className="flex flex-col space-y-1">
                <p className={`text-[14px] font-bold ${transaction?.transaction_type === 'Debit' ? 'text-red-500' : 'text-green-500'}`}>{transaction?.amount}</p>
                <p className='text-[12px]'>{transaction?.created_at?.slice(0, 10)}</p>
            </div>
        </div>
    )
}

export default TransactionCard