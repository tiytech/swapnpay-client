/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from 'react'
import { toast } from 'react-toastify'
import { GoPencil } from 'react-icons/go'
import { IoMdTrash } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'


import { useGlobalContext } from '../../context'
import { adminResetStateProperty, getFailedTransactionAction, patchFailedTransactionAction } from '../../services/actions/admin.actions'


const AdminFailedTransactionsTable = ({ data, showCardDeposit, setShowCardDeposit }) => {
    const dispatch = useDispatch()

    const { modals, updateModals } = useGlobalContext()
    const { adminRequestLoading, schoolFees_Details } = useSelector(state => state.admin)


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
                                        Amount
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >
                                        Description
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >
                                        Date
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
                                            {item?.user_details?.firstname}   {item?.user_details?.lastname}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light py-2 whitespace-nowrap">
                                            {parseInt(item?.amount)}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light py-2 whitespace-nowrap">
                                            {item?.description}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light py-2 whitespace-nowrap">
                                            {item?.created_at}
                                        </td>
                                        <td className="flex items-center space-x-5 text-sm py-2 text-gray-900 font-light whitespace-nowrap">

                                            {adminRequestLoading ? <button
                                                className='w-3/4 bg-red-300 text-white px-2 py-2 rounded-sm '>
                                                Processing

                                            </button>

                                                : <button
                                                    onClick={async() => {
                                                        const data = { user_pkid: item?.user, pkid: item?.pkid }

                                                        const response = await dispatch(patchFailedTransactionAction({ formData: data, toast }))
                                                        if (response.error == undefined) {
                                                            dispatch(getFailedTransactionAction())
                                                        }
                                                    }}

                                                    className='w-3/4 bg-red-300 text-white px-2 py-2 rounded-sm '>
                                                    Debit user
                                                </button>}
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

export default AdminFailedTransactionsTable

