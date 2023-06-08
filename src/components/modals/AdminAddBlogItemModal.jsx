import React, { useReducer, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Label from '../text/Label'
import ModalHeader from './ModalHeader'
import HeaderOne from '../text/HeaderOne'
import { useGlobalContext } from '../../context'
import { BsCloudUpload } from 'react-icons/bs'
import { toast } from 'react-toastify'
import { adminAddBlogItem } from '../../services/actions/admin.actions'


const AdminAddBlogItemModal = () => {
    const imageRef = useRef(null)
    const coverImageRef = useRef(null)

    const dispatch = useDispatch()

    const { updateModals } = useGlobalContext()

    const [formData, updateFormData] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        title: '', intro: '', body: '', cover_image: '', cover_image_name: '', image: '', image_name: ''
    })

    const handleChange = (e) => {
        updateFormData({ [e.target.name]: e.target.value })
    }

    const handleFileChange = (e) => {
        if (e.target.name === 'cover_image') {
            updateFormData({ [e.target.name]: e.target.files[0], cover_image_name: e.target.files[0].name })
        } else {
            updateFormData({ [e.target.name]: e.target.files[0], image_name: e.target.files[0].name })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.title) return toast.error('Title is required!')
        if (!formData.intro) return toast.error('Intro is required!')
        if (!formData.body) return toast.error('Body is required!')
        if (!formData.cover_image) return toast.error('Cover image is required!')
        if (!formData.image) return toast.error('Banner image is required!')

        dispatch(adminAddBlogItem({ formData, toast, updateModals }))
    }

    return (
        <div className="fixed grid h-screen z-20 bg-[#11111190] place-items-center w-full backdrop-blur-sm">
            <div className="bg-white w-[350px] md:w-[600px] px-[10px] md:px-[30px] py-[20px] ">
                <div className="flex justify-between">
                    <HeaderOne
                        semibold={true}
                        size={'text-[14px]'}
                        color={'text-primary'}
                        text={`Create Blog Item`}
                    />

                    <ModalHeader
                        type={2}
                        modalHandler={() => updateModals({ showAdminAddBlogModal: false })}
                    />
                </div>


                <form onSubmit={handleSubmit}>
                    <div className=''>
                        <Label text={'Title'} size={'text-[12px] font-medium'} />
                        <input
                            type="text"
                            name='title'
                            placeholder="Title"
                            onChange={handleChange}
                            className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full px-5 py-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                        />
                    </div>
                    <div className=''>
                        <Label text={'Intro'} size={'text-[12px] font-medium'} />
                        <input
                            type="text"
                            name='intro'
                            placeholder="Intro"
                            onChange={handleChange}
                            className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full px-5 py-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                        />
                    </div>
                    <div className=''>
                        <Label text={'Author'} size={'text-[12px] font-medium'} />
                        <input
                            type="text"
                            name='author'
                            placeholder="Author"
                            onChange={handleChange}
                            className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full px-5 py-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                        />
                    </div>
                    <div className=''>
                        <Label text={'Description'} size={'text-[12px] font-medium'} />
                        <textarea
                            rows="6"
                            name="body"
                            onChange={handleChange}
                            className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full px-5 py-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue resize-none overflow-y-auto scrollbar-4"
                        ></textarea>
                    </div>
                    <div className='flex justify-between w-full mt-2'>
                        <div
                            onClick={() => coverImageRef.current.click()}
                            className={`${formData.cover_image && 'bg-slate-100'} cursor-pointer w-[49%] flex flex-col items-center justify-center h-[120px] rounded-md border border-slate-200 hover:border-slate-400`}
                        >
                            <BsCloudUpload size={25} />
                            <p className="text-[12px]">{formData.cover_image ? formData.cover_image_name : 'Upload Cover Image'}</p>
                            <input
                                type="file"
                                name='cover_image'
                                className="hidden"
                                ref={coverImageRef}
                                onChange={handleFileChange}
                                accept='image/jpg, image/jpeg'
                            />
                        </div>
                        <div
                            onClick={() => imageRef.current.click()}
                            className={`${formData.image && 'bg-slate-100'} cursor-pointer w-[49%] flex flex-col items-center justify-center h-[120px] rounded-md border border-slate-200 hover:border-slate-400`}
                        >
                            <BsCloudUpload size={25} />
                            <p className="text-[12px]">{formData.image ? formData.image_name : 'Upload Banner Image'}</p>
                            <input
                                type="file"
                                name='image'
                                className="hidden"
                                ref={imageRef}
                                onChange={handleFileChange}
                                accept='image/jpg, image/jpeg'
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="bg-primary w-full mt-5 rounded text-white text-[12px] py-2 px-6 hover:translate-x-1 ease-in-out duration-700 transition-all focus:outline-none"
                    >
                        Submit
                    </button>
                </form>

            </div>
        </div>
    )
}

export default AdminAddBlogItemModal

