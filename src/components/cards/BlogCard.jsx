import React from 'react'
import { useNavigate } from 'react-router-dom'

import HeaderText from '../text/HeaderText'
import { useDispatch } from 'react-redux'
import { userResetStateProperty } from '../../services/actions/user.actions'


const BlogCard = ({ blog, index, maxCount }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div
            onClick={() => {
                navigate('/blog', { replace: true })
                dispatch(userResetStateProperty({ key: 'BLOG', value: blog }))
            }}
            className={`flex flex-col w-[200px] space-y-3 cursor-pointer ${index === maxCount && 'pr-8'} mr-10 md:mr-0`}
        >
            <div className="w-[200px]">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className='w-full'
                />
            </div>

            <div className="flex justify-between">
                <p className='bg-lime-50 text-[12px] px-2 py-[2px] rounded'>{blog.author}</p>

                <p className='text-[12px]'>{blog.date}</p>
            </div>

            <div className='space-y-2'>
                <HeaderText
                    text={blog.title}
                    color={'text-primary'}
                    classes={'text-[14px] font-bold font-lato'}
                />

                <p className='text-[12px]'>{blog.intro}</p>
            </div>
        </div>
    )
}

export default BlogCard