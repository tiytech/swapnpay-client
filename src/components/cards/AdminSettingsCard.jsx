import React, { Fragment } from 'react'

import HeaderText from '../text/HeaderText'
import IconButton from '../buttons/IconButton'
import { useGlobalContext } from '../../context'


const AdminSettingsCard = ({ title, users_count, transactions , referral_fee, transactions_fee}) => {
    const { updateModals } = useGlobalContext()

    return (
        <div className='border rounded w-[250px] h-[250px] shadow-lg shadow-slate-300 bg-white px-6 pt-4 pb-10 flex flex-col justify-between space-y-5 mt-4 md:mt-0'>
            <HeaderText
                text={title}
                classes={'text-[20px]'}
                color={'text-black font-semibold'}
            />

            {title === 'Transaction Fee' && (
                <div className='flex flex-col space-y-[40px]'>
                    <div className="flex justify-between">
                        <p className="text-[14px]">Fee (NGN)</p>
                        <p className="text-[12px]">{transactions_fee?.amount} ({parseFloat(transactions_fee?.amount * 100)} %) </p>
                    </div>

                    <IconButton
                        to={'#'}
                        type={'button'}
                        title={'Update'}
                        textColor={'text-white'}
                        width={'w-[100px] md:w-[100px]'}
                        handleClick={() => {
                            updateModals({ showAdminUpdateTransactionFeeModal: true })
                        }}
                        classes={'py-2 mx-auto text-[14px] rounded bg-primary'}
                    />
                </div>
            )}

            {title === 'Referral Fee' && (
                <div className='flex flex-col space-y-[40px]'>
                    <div className="flex justify-between">
                        <p className="text-[14px]">Fee (NGN)</p>
                        <p className="text-[14px]">{referral_fee?.amount}</p>
                    </div>

                    <IconButton
                        to={'#'}
                        type={'button'}
                        title={'Update'}
                        textColor={'text-white'}
                        width={'w-[100px] md:w-[100px]'}
                        handleClick={() => {
                            updateModals({ showAdminUpdateReferralFeeModal: true })
                        }}
                        classes={'py-2 mx-auto text-[14px] rounded bg-primary'}
                    />
                </div>
            )}

            {title === 'Users' && (
                <div className='flex flex-col space-y-5'>
                    <div className="flex justify-between">
                        <p className="text-[14px]">Registered Users</p>
                        <p className="text-[14px]">{users_count?.users_count}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-[14px]">Active Users</p>
                        <p className="text-[14px]">{users_count?.active_users_count}</p>
                    </div>
                </div>
            )}

            {title === 'Transactions' && (
                <div className='flex flex-col'>
                    <div className="flex justify-between">
                        <p className="text-[14px]">Successful Transactions</p>
                        <p className="text-[14px]">{transactions?.length}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-[14px]">Pending Transactions</p>
                        <p className="text-[14px]">0</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AdminSettingsCard