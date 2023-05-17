import React from 'react'

import { AdminTransactionsTable } from '../../../components'


const AdminTransactions = () => {
    return (
        <div className='pl-4 pr-4 pb-10 md:px-8 mt-20 flex flex-wrap justify-between items-start w-full'>
            <AdminTransactionsTable
                data={[1, 2, 3, 4, 5]}
            />
        </div>
    )
}

export default AdminTransactions