/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { GoPencil } from 'react-icons/go'
import { IoMdTrash } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { saveAs } from "file-saver";
import { useGlobalContext } from '../../context'
import { adminResetStateProperty, fetchInternationalTransactionAction, getSchoolFeesPaymentAction, schoolFeesDetails, updateInternatonalTransferAction, updateSchoolFeesStatusAction } from '../../services/actions/admin.actions'


const AdminInternationalPaymentTable = ({ data }) => {
    const dispatch = useDispatch()
    const [showSchoolFeesDetails, setShowSchoolFeesDetails] = useState(0)
    const { adminRequestLoading, schoolFees_Details } = useSelector(state => state.admin)
    const url = `${import.meta.env.VITE_APP_DEV_API_ROOT}`

    const { modals, updateModals } = useGlobalContext()

    const handleDownloadImage = (url, image_title) => {

        saveAs(url, image_title);

    }

    useEffect(() => {

        dispatch(fetchInternationalTransactionAction())

    }, [])

    return (
        <div className="flex justify-between items-center w-full mt-5 overflow-x-auto scrollbar-3">
            <div className="flex flex-col w-full">
                <div className="space-y-1 w-full">

                    {showSchoolFeesDetails == 0 && <Fragment>
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
                                        Payer
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
                                        Account name
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >
                                        Account number
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >
                                        Bank Name
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
                                        Country
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >
                                        Fee
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >
                                        Actions
                                    </th>

                                </tr>
                            </thead>
                            <tbody


                                className='border-b border-l border-r bg-white w-full hover:cursor-pointer'>
                                {data?.map((item, index) => (
                                    <tr key={index}>
                                        <td className="text-[10px] text-gray-900 font-semibold pl-4 py-2 whitespace-nowrap">
                                            {index + 1}
                                        </td>
                                        <td className="text-[10px] text-gray-900 font-light py-2 whitespace-nowrap">
                                            {item?.user_details?.firstname}      {item?.user_details?.lastname}
                                        </td>
                                        <td className="text-[10px] text-gray-900 font-light py-2 whitespace-nowrap">
                                            {item?.amount}
                                        </td>
                                        <td className="text-[10px] text-gray-900 font-light py-2 whitespace-nowrap">
                                            {item?.account_name}
                                        </td>
                                        <td className="text-[10px] text-gray-900 font-light py-2 whitespace-nowrap">
                                            {item?.account_number}
                                        </td>
                                        <td className="text-[10px] text-gray-900 font-light py-2 whitespace-nowrap">
                                            {item?.bank}
                                        </td>
                                        <td className="text-[10px] text-gray-900 font-light py-2 whitespace-nowrap">
                                            {item?.created_at}
                                        </td>
                                        <td className="text-[10px] text-gray-900 font-light py-2 whitespace-nowrap">
                                            {item?.country}
                                        </td>
                                        <td className="text-[10px] text-gray-900 font-light py-2 whitespace-nowrap">
                                            {item?.fee}
                                        </td>

                                        <td className="flex items-center space-x-5 text-sm py-2 text-gray-900 font-light whitespace-nowrap">

                                            {item?.accepted ? <button

                                                className="mt-1 w-2/4 bg-green-400 rounded text-white text-[12px] py-2 px-1 hover:translate-x-1 ease-in-out duration-700 transition-all focus:outline-none"
                                            >
                                                Paid
                                            </button>
                                                :

                                                <button
                                                    onClick={async () => {
                                                        const formData = { status: 'approved', pkid: item?.pkid }


                                                        var response = await dispatch(updateInternatonalTransferAction({ formData, toast }))
                                                        if (response.error == undefined) {
                                                            dispatch(fetchInternationalTransactionAction())
                                                        }



                                                    }}

                                                    className="mt-1 w-1/4 bg-indigo-400 rounded text-white text-[12px] py-2 px-1 hover:translate-x-1 ease-in-out duration-700 transition-all focus:outline-none"
                                                >
                                                    Pay
                                                </button>

                                            }
                                           {!item?.accepted && <button
                                                onClick={async () => {
                                                    const formData = { status: 'rejected', pkid: item?.pkid }

                                                    var response = await dispatch(updateInternatonalTransferAction({ formData, toast }))
                                                    if (response.error == undefined) {
                                                        dispatch(fetchInternationalTransactionAction())
                                                    }


                                                }}

                                                className="mt-1 w-2/4 bg-red-400 rounded text-white text-[12px] py-2 px-1 hover:translate-x-1 ease-in-out duration-700 transition-all focus:outline-none"
                                            >
                                                Reject
                                            </button>
}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Fragment>}


                </div>
            </div>
        </div >
    )
}

export default AdminInternationalPaymentTable

