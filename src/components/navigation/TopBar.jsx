import React from 'react'
import { useSelector } from 'react-redux'
import { UserAvatar1 } from '../../assets'

const TopBar = () => {
    const { user } = useSelector(state => state.auth)

    return (
        <div className='flex z-10 space-x-4 items-start w-full bg-white pl-8 py-2 fixed top-0'>
            <img
                alt="userAvatar"
                src={UserAvatar1}
                className="w-[50px] rounded-lg"
            />

            <div className="flex flex-col">
                <p className='font-bold text-[14px]'>Hello, {user?.credentials?.first_name}</p>
                <p className='text-[12px] font-light'>{user?.credentials?.username}</p>
            </div>
        </div>
    )
}

export default TopBar