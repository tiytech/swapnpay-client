import React, { useReducer, useState } from 'react'
import { useSelector } from 'react-redux'

import Label from '../text/Label'
import ModalHeader from './ModalHeader'
import HeaderOne from '../text/HeaderOne'
import { useGlobalContext } from '../../context'


const AdminManageUserModal = () => {
    const { updateModals } = useGlobalContext()
    const { currentData } = useSelector(state => state.admin)

    const [config, updateConfig] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        currentItem: 'Information',
    })

    console.log(currentData)

    return (
        <div className="fixed grid h-screen z-20 bg-[#11111190] place-items-center w-full backdrop-blur-sm">
            <div className="bg-white w-[350px] md:w-[700px] px-[10px] md:px-[30px] py-[20px] ">
                <div className="flex justify-between">
                    <HeaderOne
                        semibold={true}
                        size={'text-[14px]'}
                        color={'text-primary'}
                        text={`Manage User`}
                    />

                    <ModalHeader
                        type={2}
                        modalHandler={() => updateModals({ showAdminManageUserModal: false })}
                    />
                </div>

                <div className="py-2 flex items-center">
                    {['Information', 'Identity'].map((item, index) => (
                        <div
                            key={index}
                            onClick={() => updateConfig({ currentItem: item })}
                            className={`${config.currentItem === item ? 'bg-primary text-white' : 'bg-slate-200'} py-2 px-4 text-[12px] cursor-pointer`}
                        >
                            {item}
                        </div>
                    ))}
                </div>

                {config.currentItem === 'Information' && (
                    <div className=''>
                        <Label text={'User'} size={'text-[14px] font-bold'} />
                        <div className="w-full flex items-center justify-between">
                            <div className='w-[49%] flex flex-col'>
                                <Label text={'First Name'} />
                                <input
                                    disabled
                                    type="text"
                                    placeholder=""
                                    value={currentData?.user_details?.firstname}
                                    className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full px-5 py-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                                />
                            </div>
                            <div className='w-[49%] flex flex-col'>
                                <Label text={'Last Name'} />
                                <input
                                    disabled
                                    type="text"
                                    placeholder=""
                                    value={currentData?.user_details?.lastname}
                                    className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full px-5 py-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                                />
                            </div>
                        </div>

                        <div className="w-full flex items-center justify-between mt-2 pb-6 border-b border-b-primary">
                            <div className='w-[49%] flex flex-col'>
                                <Label text={'Email'} />
                                <input
                                    disabled
                                    type="text"
                                    placeholder=""
                                    value={currentData?.user_details?.email}
                                    className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full px-5 py-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                                />
                            </div>
                            <div className='w-[49%] flex flex-col'>
                                <Label text={'Username'} />
                                <input
                                    disabled
                                    type="text"
                                    placeholder=""
                                    value={currentData?.user_details?.username}
                                    className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full px-5 py-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                                />
                            </div>
                        </div>

                        <Label text={'Profile'} size={'text-[14px] font-bold'} />

                        <div className="w-full flex items-center justify-between mt-2">
                            <div className='w-[49%] flex flex-col'>
                                <Label text={'Country of Residence'} />
                                <input
                                    disabled
                                    type="text"
                                    placeholder=""
                                    value={currentData?.country_of_residence}
                                    className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full px-5 py-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                                />
                            </div>
                            <div className='w-[49%] flex flex-col'>
                                <Label text={'Country'} />
                                <input
                                    disabled
                                    type="text"
                                    placeholder=""
                                    value={currentData?.country}
                                    className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full px-5 py-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                                />
                            </div>
                        </div>

                        <div className="w-full flex items-center justify-between mt-2">
                            <div className='w-[49%] flex flex-col'>
                                <Label text={'State'} />
                                <input
                                    disabled
                                    type="text"
                                    placeholder=""
                                    value={currentData?.state}
                                    className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full px-5 py-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                                />
                            </div>
                            <div className='w-[49%] flex flex-col'>
                                <Label text={'City'} />
                                <input
                                    disabled
                                    type="text"
                                    placeholder=""
                                    value={currentData?.city}
                                    className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full px-5 py-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                                />
                            </div>
                        </div>

                        <div className="w-full flex items-center justify-between mt-2">
                            <div className='w-[49%] flex flex-col'>
                                <Label text={'Address'} />
                                <input
                                    disabled
                                    type="text"
                                    placeholder=""
                                    value={currentData?.house_address}
                                    className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full px-5 py-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                                />
                            </div>
                            <div className='w-[49%] flex flex-col'>
                                <Label text={'Occupation'} />
                                <input
                                    disabled
                                    type="text"
                                    placeholder=""
                                    value={currentData?.occupation}
                                    className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full px-5 py-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                                />
                            </div>
                        </div>

                        <div className="w-full flex items-center justify-between mt-2">
                            <div className='w-[49%] flex flex-col'>
                                <Label text={'Postal Code'} />
                                <input
                                    disabled
                                    type="text"
                                    placeholder=""
                                    value={currentData?.postalCode}
                                    className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full px-5 py-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                                />
                            </div>
                            <div className='w-[49%] flex flex-col'>
                                <Label text={'Phone Number'} />
                                <input
                                    disabled
                                    type="text"
                                    placeholder=""
                                    value={currentData?.phone_number}
                                    className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full px-5 py-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                                />
                            </div>
                        </div>
                    </div>
                )}

                {config.currentItem === 'Identity' && (
                    <div className=''>
                        <Label text={'Identity'} size={'text-[14px] font-bold'} />

                        <div className="flex justify-end">
                            <div className="w-[120px] h-[120px] border shadow-md rounded-md">
                                <img
                                    alt="image"
                                    className='w-full h-full bg-cover rounded-md'
                                    src={`${import.meta.env.VITE_APP_DEV_API_ROOT}${currentData?.profile_photo}`}
                                />
                            </div>
                        </div>

                        <div className="w-full flex items-center justify-between pb-6 border-b border-b-primary">
                            <div className='w-[49%] flex flex-col'>
                                <Label text={'Bank Verification Number'} />
                                <input
                                    disabled
                                    type="text"
                                    placeholder=""
                                    value={currentData?.bvn}
                                    className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full px-5 py-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                                />
                            </div>
                            {/* <div className='w-[49%] flex flex-col'>
                                <Label text={'Last Name'} />
                                <input
                                    disabled
                                    type="text"
                                    placeholder=""
                                    value={currentData?.user_details?.lastname}
                                    className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full px-5 py-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                                />
                            </div> */}
                        </div>

                        <Label text={currentData?.kyc_type === 'Select method of verification' ? 'Identity Type' : currentData?.kyc_type} size={'text-[14px] font-semibold'} />

                        <div className="w-full flex items-center justify-between mt-2">
                            <div className='w-[49%] flex flex-col'>
                                <Label text={'Identity ID'} />
                                <input
                                    disabled
                                    type="text"
                                    placeholder=""
                                    value={currentData?.identity_number}
                                    className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full px-5 py-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                                />
                            </div>
                            <div className='w-[49%] flex flex-col'>
                                <Label text={'Issuance Date'} />
                                <input
                                    disabled
                                    type="text"
                                    placeholder=""
                                    value={currentData?.identity_issuance_date ? currentData?.identity_issuance_date?.slice(0, 10) : ''}
                                    className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full px-5 py-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                                />
                            </div>
                        </div>

                        <div className="w-full flex items-center justify-between mt-2">
                            <div className='w-[49%] flex flex-col'>
                                <Label text={'Expiry Date'} />
                                <input
                                    disabled
                                    type="text"
                                    placeholder=""
                                    value={currentData?.identity_expiration_date ? currentData?.identity_expiration_date?.slice(0, 10) : ''}
                                    className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full px-5 py-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                                />
                            </div>
                            <div className='w-[49%] flex flex-col'>
                                <Label text={'Document'} />
                                <input
                                    type="button"
                                    placeholder=""
                                    value={'View Document'}
                                    onClick={() => {
                                        try {
                                            let fileURL;
                                            if (currentData.kyc_type == "NIN") {
                                                fileURL = `${import.meta.env.VITE_APP_DEV_API_ROOT}${currentData?.nin}`
                                            }
                                            if (currentData.kyc_type == "Voters_Card") {
                                                fileURL = `${import.meta.env.VITE_APP_DEV_API_ROOT}${currentData?.voters_card}`
                                            }
                                            if (currentData.kyc_type == "Drivers_license") {
                                                fileURL = `${import.meta.env.VITE_APP_DEV_API_ROOT}${currentData?.drivers_license}`
                                            }
                                            if (currentData.kyc_type == "International_Passport") {
                                                fileURL = `${import.meta.env.VITE_APP_DEV_API_ROOT}${currentData?.interntional_passport}`
                                            }

                                            window.open(fileURL, '_blank')
                                        } catch (error) {

                                        }
                                    }}
                                    className="bg-sky-600 placeholder:text-[12px] text-white text-[12px] rounded w-full px-5 py-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default AdminManageUserModal

