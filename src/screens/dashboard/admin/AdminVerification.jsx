import React from 'react'

import { AdminVerificationTable } from '../../../components'


const AdminVerification = () => {
    return (
        <div className='pl-4 pr-4 pb-10 md:px-8 mt-20 flex flex-wrap justify-between items-start w-full'>
            <AdminVerificationTable
                data={[]}
            />
        </div>
    )
}

export default AdminVerification