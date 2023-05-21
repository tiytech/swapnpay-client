/* eslint-disable react-hooks/exhaustive-deps */
import { toast } from 'react-toastify'
import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'

import { useGlobalContext } from '../../context'
import { adminResetStateProperty, adminVerifyUserAccountAction } from '../../services/actions/admin.actions'


const AdminVerificationTable = ({ data }) => {
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
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >
                                        Files Uploaded
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >
                                        Occupation
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
                                {data?.map((user, index) => (
                                    <tr key={index}>
                                        {console.log(user)}
                                        <td className="text-[12px] text-gray-900 font-semibold pl-4 py-2 whitespace-nowrap">
                                            {index + 1}
                                        </td>
                                        <td className="text-[12px] text-gray-900 font-light py-2 whitespace-nowrap">
                                            {user?.user_details?.lastname} {user?.user_details?.firstname}
                                        </td>
                                        <td className="text-[12px] text-gray-900 font-light py-2 whitespace-nowrap">
                                            {user?.user_details?.email}
                                        </td>
                                        <td className="text-[12px] text-gray-900 font-light py-2 whitespace-nowrap">
                                            {user?.is_files_uploaded ? 'True' : 'False'}
                                        </td>
                                        <td className="text-[12px] text-gray-900 font-light py-2 whitespace-nowrap">
                                            {user?.occupation}
                                        </td>
                                        <td className="flex items-center space-x-5 text-sm py-2 text-gray-900 font-light whitespace-nowrap">
                                            <button
                                                type="submit"
                                                onClick={() => {
                                                    dispatch(adminResetStateProperty({ key: 'CurrentData', value: user }))

                                                    updateModals({ showAdminManageUserModal: true })
                                                }}
                                                className="mt-1 border border-primary rounded text-primary text-[12px] py-1 px-4 hover:translate-x-1 ease-in-out duration-700 transition-all focus:outline-none"
                                            >
                                                Manage
                                            </button>
                                            <button
                                                type="submit"
                                                onClick={() => {
                                                    const formData = {
                                                        status: "approved",
                                                        profile_pkid: user.pkid,
                                                        email: user?.user_details?.email,
                                                    }

                                                    dispatch(adminVerifyUserAccountAction({ formData, toast }))
                                                }}
                                                disabled={!user?.is_files_uploaded ? true : false}
                                                className="mt-1 bg-primary rounded text-white text-[12px] py-1 px-4 hover:translate-x-1 ease-in-out duration-700 transition-all focus:outline-none"
                                            >
                                                Verify
                                            </button>

                                            <button
                                                type="submit"
                                                onClick={() => {
                                                    const formData = {
                                                        status: "unapproved",
                                                        profile_pkid: user.pkid,
                                                        email: user?.user_details?.email,
                                                    }

                                                    dispatch(adminVerifyUserAccountAction({ formData, toast }))
                                                }}
                                                disabled={!user?.is_files_uploaded ? true : false}
                                                className="mt-1 bg-red-400 rounded text-white text-[12px] py-1 px-4 hover:translate-x-1 ease-in-out duration-700 transition-all focus:outline-none"
                                            >
                                                Reject
                                            </button>


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

export default AdminVerificationTable

