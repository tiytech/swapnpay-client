import React from 'react'
import { FiCopy } from 'react-icons/fi'
import { useSelector, useDispatch } from 'react-redux'

import HeaderText from '../text/HeaderText'


const ProfileAccountCard = () => {
    const { user } = useSelector(state => state.auth)
    const { naira_wallet_details } = useSelector(state => state.user)
    return (
        <div className="p-5 rounded-md flex flex-col justify-between h-[250px] items-center bg-primary w-full">
            <div>
                <HeaderText
                    text={`${user?.credentials?.first_name} ${user?.credentials?.last_name}`}
                    classes={'text-white font-bold text-[60px]'}
                />

                <div
                    onClick={() => {
                        const text = document.getElementById('username').textContent

                        navigator.clipboard.writeText(text)
                    }}
                    className="flex space-x-3 justify-center items-center text-white cursor-pointer"
                >
                    <p className="text-[16px]" id='username'>{user?.credentials?.username}</p>
                    <FiCopy />
                </div>
            </div>

            <div
                onClick={() => {
                    const text = document.getElementById('username').textContent

                    navigator.clipboard.writeText(text)
                }}
                className='rounded-md cursor-pointer bg-[#1173a4] w-[50%] flex justify-between items-center p-2 text-white'
            >
                <p className="text-[16px] font-bold" id='accountNumber'>{naira_wallet_details?.account_number}</p>
                <FiCopy />
            </div>
        </div>

    )
}

export default ProfileAccountCard