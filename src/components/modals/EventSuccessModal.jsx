import React from 'react'
import { useNavigate } from 'react-router-dom'

import HeaderText from '../text/HeaderText'
import IconButton from '../buttons/IconButton'
import { ModalBackground1 } from '../../assets'
import { useGlobalContext } from '../../context'


const EventSuccessModal = ({ to, title }) => {
    const navigate = useNavigate()

    const { updateModals } = useGlobalContext()

    const handleSubmit = (e) => {
        e.preventDefault()

        navigate(to, { replace: true })
        updateModals({ showSignupSuccessModal: false, showPasswordResetSuccessModal: false })
    }

    return (
        <div className="fixed grid h-screen z-10 bg-[#11111190] place-items-center w-full backdrop-blur-sm">
            <div className="bg-white w-[400px] h-[400px] px-[30px] py-[20px] rounded flex flex-col space-y-5">
                <div className="w-full h-[200px]">
                    <img
                        alt=""
                        src={ModalBackground1}
                        className="w-full h-full"
                    />
                </div>

                <form onSubmit={handleSubmit} className='space-y-5'>
                    <div className="text-center">
                        <HeaderText
                            classes={'text-[20px]'}
                            color={'text-black font-bold'}
                            text={'Success!'}
                        />
                        <p className='text-[14px]'>{title}</p>
                    </div>

                    <IconButton
                        type={'submit'}
                        title={'Done'}
                        iconType={'icon-right'}
                        textColor={'text-white'}
                        width={'w-full md:w-full'}
                        classes={'py-4 text-[14px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
                    />
                </form>
            </div>
        </div>
    )
}

export default EventSuccessModal