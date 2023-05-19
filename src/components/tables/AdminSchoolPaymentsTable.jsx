/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState } from 'react'
import { GoPencil } from 'react-icons/go'
import { IoMdTrash } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { saveAs } from "file-saver";
import { useGlobalContext } from '../../context'
import { adminResetStateProperty, schoolFeesDetails } from '../../services/actions/admin.actions'


const AdminSchoolPaymentsTable = ({ data }) => {
    const dispatch = useDispatch()
    const [showSchoolFeesDetails, setShowSchoolFeesDetails] = useState(false)
    const { adminRequestLoading, schoolFees_Details } = useSelector(state => state.admin)
    const url = `${import.meta.env.VITE_APP_DEV_API_ROOT}`







    const { modals, updateModals } = useGlobalContext()

    const handleDownloadImage = (url, image_title) => {

        saveAs(url, image_title);
        console.log('callled');
    }

    return (
        <div className="flex justify-between items-center w-full mt-5 overflow-x-auto scrollbar-3">
            <div className="flex flex-col w-full">
                <div className="space-y-1 w-full">
                    {!showSchoolFeesDetails && <Fragment>
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
                                        Name {import.meta.env.VITE_APP_DEV_API_ROOT}
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
                                        
                                    </th>
                                    {/* <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >

                                    </th> */}
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
                                            {item?.student_name}
                                        </td>
                                        <td className="text-[10px] text-gray-900 font-light py-2 whitespace-nowrap">
                                            {item?.amount} ({item?.currency})
                                        </td>
                                        <td className="text-[10px] text-gray-900 font-light py-2 whitespace-nowrap">
                                            {item?.status}
                                        </td>
                                        <td className="text-[10px] text-gray-900 font-light py-2 whitespace-nowrap">
                                            {item?.created_at}
                                        </td>
                                        <td className="flex items-center space-x-5 text-sm py-2 text-gray-900 font-light whitespace-nowrap">

                                            <button
                                                type="submit"
                                                className="mt-1 w-1/4 bg-primary rounded text-white text-[12px] py-2 px-1 hover:translate-x-1 ease-in-out duration-700 transition-all focus:outline-none"
                                            >
                                                Accept
                                            </button>
                                            <button
                                                type="submit"
                                                className="mt-1 w-1/4 bg-red-400 rounded text-white text-[12px] py-2 px-1 hover:translate-x-1 ease-in-out duration-700 transition-all focus:outline-none"
                                            >
                                                Reject
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setShowSchoolFeesDetails(true)
                                                    dispatch(schoolFeesDetails({ data: item }))

                                                }}
                                                // type="submit"
                                                className="mt-1 w-1/4 bg-slate-400 rounded text-white text-[12px] py-2 px-1 hover:translate-x-1 ease-in-out duration-700 transition-all focus:outline-none"
                                            >
                                                Details
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Fragment>}
                    {showSchoolFeesDetails &&

                        <Fragment>
                            <button
                                onClick={() => {
                                    setShowSchoolFeesDetails(false)
                                }}
                                className="mt-1 w-[100px] bg-slate-400 rounded text-white text-[12px] py-2 px-1 hover:translate-x-1 ease-in-out duration-700 transition-all focus:outline-none"
                            >
                                Back
                            </button>
                            <div className='w-full bg-white'>
                                <div className='flex justify-between px-4 py-3 '>
                                    <p className='text-[14px] text-black' >Student name : {schoolFees_Details?.student_name}</p>
                                    <p>School : {schoolFees_Details?.name_of_school}</p>
                                </div>
                                <div className='flex justify-between px-4 py-3'>
                                    <p className='text-[14px] text-black' >Amount : {schoolFees_Details?.amount}</p>
                                    <p>Currency : {schoolFees_Details?.currency}</p>
                                </div>
                                <div className='flex justify-between px-4 py-3 '>
                                    <p className='text-[14px] text-black' >Phonenumber : {schoolFees_Details?.phone_number}</p>
                                    <p>Sponsor id number : {schoolFees_Details?.sponsor_id_number}</p>
                                </div>
                                <div className='flex justify-between px-4 py-3'>
                                    <p className='text-[14px] text-black' >School Account : {schoolFees_Details?.school_account_number}</p>
                                    <p>School Iban : {schoolFees_Details?.school_iban}</p>
                                </div>
                                <div className='flex justify-between px-4 py-3'>
                                    <p className='text-[14px] text-black' >Sponsor id type : {schoolFees_Details?.sponsor_id_type}</p>
                                    <p>Country : {schoolFees_Details?.country}</p>
                                </div>
                                <div className='flex justify-between px-4 py-1'>

                                    <img
                                        alt="userAvatar"
                                        src={`${import.meta.env.VITE_APP_DEV_API_ROOT}${schoolFees_Details?.admission_letter}`}
                                        className="w-[50px] rounded-lg border"
                                    />
                                    <img
                                        alt="userAvatar"
                                        src={`${import.meta.env.VITE_APP_DEV_API_ROOT}${schoolFees_Details?.sponsor_id}`}
                                        className="w-[50px] rounded-lg border"
                                    />
                                </div>
                                <div className='flex justify-between px-4 py-4'>
                                    <button
                                        onClick={() => {
                                            let custom_url = `${import.meta.env.VITE_APP_DEV_API_ROOT}${schoolFees_Details?.admission_letter}`

                                            handleDownloadImage(custom_url, 'admission_letter')
                                        }}
                                        className="mt-1 w-1/4 bg-primary rounded text-white text-[12px] py-2 px-1 hover:translate-x-1 ease-in-out duration-700 transition-all focus:outline-none"
                                    >
                                        Download admission letter
                                    </button>
                                    <button
                                        onClick={() => {
                                            let custom_url = `${import.meta.env.VITE_APP_DEV_API_ROOT}${schoolFees_Details?.sponsor_id}`
                                            handleDownloadImage(custom_url, 'sponsor_id')
                                        }}
                                        className="mt-1 w-1/4 bg-primary rounded text-white text-[12px] py-2 px-1 hover:translate-x-1 ease-in-out duration-700 transition-all focus:outline-none"
                                    >
                                        Download sponsor id
                                    </button>
                                </div>
                            </div>


                        </Fragment>}

                </div>
            </div>
        </div >
    )
}

export default AdminSchoolPaymentsTable

