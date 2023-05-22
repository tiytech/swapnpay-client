import React, { Fragment } from 'react'
import { useGlobalContext } from '../../context'
import ModalHeader from './ModalHeader'
import HeaderOne from '../text/HeaderOne'
import { useDispatch, useSelector } from 'react-redux'


const AdminManageSchoolFeesPayment = () => {

    const dispatch = useDispatch()

    const {modals, updateModals } = useGlobalContext()
    const { adminRequestLoading, schoolFees_Details } = useSelector(state => state.admin)
    return (
        <div className="fixed grid h-screen z-20 bg-[#11111190] place-items-center w-full backdrop-blur-sm">
            {modals.showAdminViewAdmissionLetterModal && <div className="bg-white w-[600px] md:w-[800px] px-[10px] md:px-[10px] py-[10px] ">
                <div className="flex justify-between">
                    <HeaderOne
                        semibold={true}
                        size={'text-[14px]'}
                        color={'text-primary'}
                        text={`View admission letter`}
                    />

                    <ModalHeader
                        type={2}
                        modalHandler={() => updateModals({ showAdminViewAdmissionLetterModal: false })}
                    />
                </div>

                <form
                    className='py-4'

                // onSubmit={handleSubmit}
                >
                    <img src={`${import.meta.env.VITE_APP_DEV_API_ROOT}${schoolFees_Details?.admission_letter}`} alt="" srcset="" />

                </form>

            </div>}
            {modals.showAdminViewSponsorIdModal && <div className="bg-white w-[600px] md:w-[800px] px-[10px] md:px-[10px] py-[10px] ">
                <div className="flex justify-between">
                    <HeaderOne
                        semibold={true}
                        size={'text-[14px]'}
                        color={'text-primary'}
                        text={`View sponsor id`}
                    />

                    <ModalHeader
                        type={2}
                        modalHandler={() => updateModals({ showAdminViewSponsorIdModal: false })}
                    />
                </div>

                <form
                    className='py-4'

                // onSubmit={handleSubmit}
                >
                    <img src={`${import.meta.env.VITE_APP_DEV_API_ROOT}${schoolFees_Details?.sponsor_id}`} alt="" srcset="" />

                </form>

            </div>}
        </div>
    )
}

export default AdminManageSchoolFeesPayment