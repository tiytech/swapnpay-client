import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AdminSettingsCard } from '../../../components'
import { getReferralFeeAction, getTransactionsAction, getTransactionsFeeAction, getUserCountAction } from '../../../services/actions/admin.actions'





const AdminSettings = () => {
    const dispatch = useDispatch()
    const { users_count, transactions, transactions_fee, referral_fee } = useSelector(state => state.admin)

    useEffect(() => {
        dispatch(getUserCountAction())
        dispatch(getTransactionsAction())
        dispatch(getTransactionsFeeAction())
        dispatch(getReferralFeeAction())

    }, [])

    return (
        <div className='pl-4 pr-4 pb-10 md:px-8 mt-20 flex flex-wrap justify-between items-start w-full'>
            <div className="w-full flex flex-wrap justify-between items-center gap-5">
                {['Transaction Fee', 'Referral Fee', 'Users', 'Transactions'].map((item, index) => (
                    <AdminSettingsCard
                        key={index}
                        title={item}
                        users_count={users_count}
                        transactions={transactions}
                        referral_fee = {referral_fee}
                        transactions_fee = {transactions_fee}
                    />
                ))}
            </div>
        </div>
    )
}

export default AdminSettings