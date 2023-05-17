/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from 'react'
import { GoPencil } from 'react-icons/go'
import { IoMdTrash } from 'react-icons/io'
import { useDispatch } from 'react-redux'

import { useGlobalContext } from '../../context'
import { adminResetStateProperty } from '../../services/actions/admin.actions'


const AdminTransactionsTable = ({ data }) => {
    const dispatch = useDispatch()

    const { modals, updateModals } = useGlobalContext()

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
                                        Status
                                    </th>
                                    {/* <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >

                                    </th> */}
                                </tr>
                            </thead>
                            <tbody className='border-b border-l border-r bg-white w-full'>
                                {data?.map((department, index) => (
                                    <tr key={index}>
                                        <td className="text-[10px] text-gray-900 font-semibold pl-4 py-4 whitespace-nowrap">
                                            {index + 1}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light py-4 whitespace-nowrap">
                                            Dorathy Eze
                                        </td>
                                        <td className="text-sm text-gray-900 font-light py-4 whitespace-nowrap">
                                            20000
                                        </td>
                                        <td className="text-sm text-gray-900 font-light py-4 whitespace-nowrap">
                                            Failed
                                        </td>
                                        {/* <td className="flex items-center space-x-5 text-sm py-4 text-gray-900 font-light whitespace-nowrap">
                                            <GoPencil
                                                size={20}
                                                className='text-sky-600 cursor-pointer'
                                                onClick={() => {
                                                    dispatch(adminResetStateProperty({ key: 'CurrentData', value: department }))
                                                    // updateModals({ showAdminUpdateDepartmentModal: true })
                                                }}
                                            />
                                            <IoMdTrash
                                                size={20}
                                                onClick={() => {
                                                    dispatch(adminResetStateProperty({ key: 'CurrentData', value: department }))
                                                    // updateModals({ showAdminDeleteDepartmentModal: true })
                                                }}
                                                className='text-red-400 cursor-pointer'
                                            />
                                        </td> */}
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

export default AdminTransactionsTable

