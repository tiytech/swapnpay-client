/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState } from 'react'
import { toast } from 'react-toastify'
import { GoPencil } from 'react-icons/go'
import { IoMdTrash } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'


import { useGlobalContext } from '../../context'
import { adminResetStateProperty, fetchUsersActions, getFailedTransactionAction, patchFailedTransactionAction, patchUserAction } from '../../services/actions/admin.actions'


const AdminManageUsersTable = ({ data, showUsersTransactions, setShowUsersTransaction, setUserPkid }) => {
    const dispatch = useDispatch()


    const { modals, updateModals } = useGlobalContext()
    const { adminRequestLoading, schoolFees_Details } = useSelector(state => state.admin)


    return (
        <div className="flex justify-between items-center w-full mt-5 overflow-x-auto scrollbar-3">
            <div className="flex flex-col w-full">
                <div className="space-y-1 w-full">
                    <h4>Manage Users</h4>
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
                                        Username
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >
                                        Date joined
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >
                                        Last login
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >
                                        Is active
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='border-b border-l border-r bg-white w-full'>
                                {data?.map((item, index) => (
                                    <tr key={index}>
                                        <td className="text-[10px] text-gray-900 font-semibold pl-4 py-2 whitespace-nowrap">
                                            {index + 1}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light py-2 whitespace-nowrap">
                                            {item?.first_name}   {item?.last_name}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light py-2 whitespace-nowrap">
                                            {item?.email}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light py-2 whitespace-nowrap">
                                            {item?.username}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light py-2 whitespace-nowrap">
                                            {item?.user_details?.date_joined}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light py-2 whitespace-nowrap">
                                            {item?.user_details?.last_login?.slice(0, 10)}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light py-2 whitespace-nowrap">
                                            {item?.is_active ? 'True' : 'False'}
                                        </td>
                                        <td className="flex items-center space-x-5 text-sm py-2 text-gray-900 font-light whitespace-nowrap">

                                            {item?.is_active ? <button
                                                onClick={async () => {
                                                    const formData = { pkid: item?.pkid, status: "deactivate" }


                                                    const response = await dispatch(patchUserAction({ formData, toast }))
                                                    if (response.error == undefined) {
                                                        dispatch(fetchUsersActions())
                                                    }
                                                }}

                                                className='w-1/4 text-[10px] bg-red-500 text-white px-2 py-2 rounded-sm '>
                                                Deactive user
                                            </button> :
                                                <button
                                                    onClick={async () => {
                                                        const formData = { pkid: item?.pkid, status: "activate" }


                                                        const response = await dispatch(patchUserAction({ formData, toast }))
                                                        if (response.error == undefined) {
                                                            dispatch(fetchUsersActions())
                                                        }
                                                    }}

                                                    className='w-1/4 text-[10px] bg-green-500 text-white px-2 py-2 rounded-sm '>
                                                    Activate user
                                                </button>
                                            }
                                            {!item?.is_administrator ? <button
                                                onClick={async () => {
                                                    const formData = { pkid: item?.pkid, status: "admin" }


                                                    const response = await dispatch(patchUserAction({ formData, toast }))
                                                    if (response.error == undefined) {
                                                        dispatch(fetchUsersActions())
                                                    }
                                                }}

                                                className='w-1/4 text-[10px] bg-orange-500 text-white px-2 py-2 rounded-sm '>
                                                Make admin
                                            </button> :
                                                <button
                                                    onClick={async () => {
                                                        const formData = { pkid: item?.pkid, status: "unadmin" }


                                                        const response = await dispatch(patchUserAction({ formData, toast }))
                                                        if (response.error == undefined) {
                                                            dispatch(fetchUsersActions())
                                                        }
                                                    }}

                                                    className='w-1/4 text-[10px] bg-indigo-500 text-white px-2 py-2 rounded-sm '>
                                                    Unadmin
                                                </button>

                                            }

                                            <button
                                                onClick={() => {
                                                    // const data = { user_pkid: item?.user, pkid: item?.pkid }

                                                    // const response = await dispatch(patchFailedTransactionAction({ formData: data, toast }))
                                                    // if (response.error == undefined) {
                                                    //     dispatch(getFailedTransactionAction())
                                                    // }
                                                    const data = {pkid: item?.pkid, fullname: `${item?.first_name}   ${item?.last_name}`}
                                                    setUserPkid(data)
                                                    
                                                    setShowUsersTransaction(true)
                                                }}

                                                className='w-1/4 text-[10px] bg-primary text-white px-2 py-2 rounded-sm '>
                                                See Transactions
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

export default AdminManageUsersTable

