import React from 'react'
import { UserAvatar1 } from '../../assets'

const TopBar = () => {
    return (
        <div className='flex z-10 space-x-4 items-start w-full bg-white pl-8 py-2 fixed top-0'>
            <img
                alt="userAvatar"
                src={UserAvatar1}
                className="w-[50px] rounded-lg"
            />

            <div className="flex flex-col">
                <p className='font-bold text-[14px]'>Hello, John</p>
                <p className='text-[12px] font-light'>@john102</p>
            </div>
        </div>
    )
}

export default TopBar