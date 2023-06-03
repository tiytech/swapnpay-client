import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AdminFailedTransactionsTable from '../../../components/tables/AdminFailedTransactionsTable'
import AdminCardDepositTable from '../../../components/tables/AdminCardDepositTable'
import { fetchUsersActions, getCardDepositsActions, getFailedTransactionAction } from '../../../services/actions/admin.actions'
import AdminManageUsersTable from '../../../components/tables/AdminManageUsersTable'
import AdminUserTransactionsTable from '../../../components/tables/AdminUserTransactionsTable'



const AdminManageUsers = () => {
    const dispatch = useDispatch()
    const { manage_users } = useSelector(state => state.admin)
    const [showUsersTransactions, setShowUsersTransaction] = useState(false)
    const [userPkid, setUserPkid] = useState({})

    useEffect(() => {
        dispatch(fetchUsersActions())

    }, [])
    return (
        <div className='pl-4 pr-4 pb-10 md:px-8 mt-20 flex flex-wrap justify-between items-start w-full'>
            <div className='flex justify-between w-full space-x-2 px-2 py-2'>
                
            </div>
            {!showUsersTransactions && <AdminManageUsersTable data={manage_users} showUsersTransactions={showUsersTransactions} setShowUsersTransaction={setShowUsersTransaction} setUserPkid = {setUserPkid} />}
            {showUsersTransactions && <AdminUserTransactionsTable showUsersTransactions={showUsersTransactions} setShowUsersTransaction={setShowUsersTransaction}  userPkid = {userPkid} />}

        </div>

    )
}

export default AdminManageUsers