import React from 'react'
import { BalanceCard } from '../../../components'

const AdminBalances = () => {
    return (
        <div className='pl-4 pr-4 pb-10 md:px-8 mt-20 flex flex-wrap justify-between items-start w-full'>
            <div className="w-full flex flex-wrap justify-between items-center gap-5">
                {['Fincra', 'Flutter Wave', 'Sudo'].map((item, index)=>(
                    <BalanceCard
                        key={index}
                        title={item}
                    />
                ))}
            </div>
        </div>
    )
}

export default AdminBalances