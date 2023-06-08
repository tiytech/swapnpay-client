/* eslint-disable react-hooks/exhaustive-deps */
import { toast } from 'react-toastify'
import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'

import { useGlobalContext } from '../../context'
import { adminResetStateProperty, adminVerifyUserAccountAction } from '../../services/actions/admin.actions'
import { FaPencilAlt, FaTrash } from 'react-icons/fa'


const AdminBlogTable = ({ data }) => {
    const dispatch = useDispatch()

    const { updateModals } = useGlobalContext()

    return (
        <div className="flex justify-between items-center w-full mt-5 overflow-x-auto scrollbar-3">
            <div className="flex flex-col w-full">
                <div className="space-y-1 w-full">
                    <Fragment>
                        <table className="w-full cursor-default">
                            <thead className="border bg-white rounded-md">
                                <tr>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 pl-4 py-3 text-left"
                                    >

                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >
                                        Title
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >
                                        Intro
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >
                                        Author
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >

                                    </th>
                                </tr>
                            </thead>
                            <tbody
                                className='border-b border-l border-r bg-white w-full hover:cursor-pointer'>
                                {data?.map((blog, index) => (
                                    <tr key={index}>
                                        {console.log(blog)}
                                        <td className="text-[14px] text-gray-900 font-semibold pl-4 py-3 whitespace-nowrap">
                                            {index + 1}
                                        </td>
                                        <td className="text-[14px] text-gray-900 font-light py-3 whitespace-nowrap">
                                            {blog?.title}
                                        </td>
                                        <td className="text-[14px] text-gray-900 font-light py-3 whitespace-nowrap">
                                            {blog?.intro?.length > 50 ? `${blog?.intro?.slice(0, 50)}...` : blog?.intro}
                                        </td>
                                        <td className="text-[14px] text-gray-900 font-light py-3 whitespace-nowrap">
                                            {blog?.author}
                                        </td>
                                        <td className="flex items-center space-x-5 text-sm py-3 text-gray-900 font-light whitespace-nowrap">
                                            <FaPencilAlt
                                                className='text-green-500'
                                                onClick={() => {
                                                    updateModals({ showAdminUpdateBlogItemModal: true })
                                                    dispatch(adminResetStateProperty({ key: 'CurrentData', value: blog }))
                                                }}
                                            />

                                            <FaTrash
                                                className='text-red-500'
                                                onClick={() => {
                                                    updateModals({ showAdminDeleteBlogItemModal: true })
                                                    dispatch(adminResetStateProperty({ key: 'CurrentData', value: blog }))
                                                }}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Fragment>
                </div>
            </div>
        </div >
    )
}

export default AdminBlogTable

