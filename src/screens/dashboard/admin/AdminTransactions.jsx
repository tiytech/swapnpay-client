import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AdminFailedTransactionsTable from '../../../components/tables/AdminFailedTransactionsTable'
import AdminCardDepositTable from '../../../components/tables/AdminCardDepositTable'
import { getCardDepositsActions, getFailedTransactionAction } from '../../../services/actions/admin.actions'


const AdminTransactions = () => {
    const dispatch = useDispatch()
    const { card_deposits, failed_transactions } = useSelector(state => state.admin)
    const [showCardDeposit, setShowCardDeposit] = useState(false)

    const data = [1, 2, 3, 4]
    useEffect(() => {
        dispatch(getCardDepositsActions())
        dispatch(getFailedTransactionAction())
    }, [])

    return (
        <div className='pl-4 pr-4 pb-10 md:px-8 mt-20 flex flex-wrap justify-between items-start w-full'>
            <div className='flex justify-between w-full space-x-2 px-2 py-2'>
                <button className={`${!showCardDeposit ? 'bg-indigo-300' : 'bg-primary text-white'} w-3/4  px-2 py-3`}

                    onClick={() => {
                        setShowCardDeposit(false)
                    }}
                >
                    Failed utility Transactions
                </button>

                <button
                    onClick={() => {
                        setShowCardDeposit(true)
                    }}

                    className={`${showCardDeposit ? 'bg-indigo-300 ' : 'bg-primary text-white'} w-3/4  px-2 py-3`}>
                    Failed card deposits
                </button>
            </div>
            {!showCardDeposit && <AdminFailedTransactionsTable data={failed_transactions} showCardDeposit={showCardDeposit} setShowCardDeposit={setShowCardDeposit} />}
            {showCardDeposit && <AdminCardDepositTable data={card_deposits} showCardDeposit={showCardDeposit} setShowCardDeposit={setShowCardDeposit} />}
        </div>
    )
}

export default AdminTransactions