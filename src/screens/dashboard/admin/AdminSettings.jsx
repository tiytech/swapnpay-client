import React from 'react'

import { AdminSettingsCard } from '../../../components'

const AdminSettings = () => {
    return (
        <div className='pl-4 pr-4 pb-10 md:px-8 mt-20 flex flex-wrap justify-between items-start w-full'>
            <div className="w-full flex flex-wrap justify-between items-center gap-5">
                {['Transaction Fee', 'Referral Fee', 'Users', 'Transactions'].map((item, index) => (
                    <AdminSettingsCard
                        key={index}
                        title={item}
                    />
                ))}
            </div>
        </div>
    )
}

export default AdminSettings