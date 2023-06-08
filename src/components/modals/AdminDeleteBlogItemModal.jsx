import { toast } from 'react-toastify'
import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ModalHeader from './ModalHeader'
import HeaderOne from '../text/HeaderOne'
import { useGlobalContext } from '../../context'
import { adminDeleteBlogItem } from '../../services/actions/admin.actions'


const AdminDeleteBlogItemModal = () => {
    const dispatch = useDispatch()

    const { updateModals } = useGlobalContext()
    const { currentData } = useSelector(state => state.admin)

    const [formData, updateFormData] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        pkid: 0, title: '',
    })

    useEffect(() => {
        if (currentData) {
            updateFormData({
                pkid: currentData?.pkid,
                title: currentData?.title,
            })
        }
    }, [currentData])

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(adminDeleteBlogItem({ formData, toast, updateModals }))
    }

    return (
        <div className="fixed grid h-screen z-20 bg-[#11111190] place-items-center w-full backdrop-blur-sm">
            <div className="bg-white w-[350px] md:w-[600px] px-[10px] md:px-[30px] py-[20px] ">
                <div className="flex justify-between">
                    <HeaderOne
                        semibold={true}
                        size={'text-[14px]'}
                        color={'text-red-600'}
                        text={`Delete Blog Item`}
                    />

                    <ModalHeader
                        type={2}
                        modalHandler={() => updateModals({ showAdminDeleteBlogItemModal: false })}
                    />
                </div>


                <form onSubmit={handleSubmit}>
                    <p className='mt-2 text-[14px]'>Are you sure you want to delete the blog "{formData.title}"?</p>

                    <button
                        type="submit"
                        className="bg-red-500 w-full mt-5 rounded text-white text-[12px] py-2 px-6 hover:translate-x-1 ease-in-out duration-700 transition-all focus:outline-none"
                    >
                        Submit
                    </button>
                </form>

            </div>
        </div>
    )
}

export default AdminDeleteBlogItemModal

