import { toast } from 'react-toastify'
import React, { useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ModalHeader from './ModalHeader'
import HeaderOne from '../text/HeaderOne'
import { useGlobalContext } from '../../context'
import { patchTransactionsFeeAction } from '../../services/actions/admin.actions'
import LoadingButtonOne from '../buttons/LoadingButtonOne'


const AdminUpdateTransactionFeeModal = () => {
    const dispatch = useDispatch()

    const { modals, updateModals } = useGlobalContext()
    const { adminRequestLoading } = useSelector(state => state.admin)

    const [formData, updateFormData] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, { amount: '' })

    const handleChange = (e) => {
        updateFormData({ [e.target.name]: e.target.value.trim() })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.amount) return toast.error('Amount is required')
        console.log(formData);
        dispatch(patchTransactionsFeeAction({ formData, toast }))
    }

    return (
        <div className="fixed grid h-screen z-20 bg-[#11111190] place-items-center w-full backdrop-blur-sm">
            <div className="bg-white w-[350px] md:w-[500px] px-[10px] md:px-[30px] py-[20px] ">
                <div className="flex justify-between">
                    <HeaderOne
                        semibold={true}
                        size={'text-[14px]'}
                        color={'text-primary'}
                        text={`Update Transaction Fee,enter percentage e.g 5 for 5 %`}
                    />

                    <ModalHeader
                        type={2}
                        modalHandler={() => updateModals({ showAdminUpdateTransactionFeeModal: false })}
                    />
                </div>

                <form
                    className='py-4'
                    onSubmit={handleSubmit}
                >
                    <div>
                        <input
                            type="number"
                            name="amount"
                            placeholder="Transaction Fee"
                            className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full h-5 px-5 py-5 mt-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    {adminRequestLoading == true ? (<LoadingButtonOne
                        loadingType={'one'}
                        textColor={'text-white'}
                        width={'w-full md:w-full'}
                        classes={'text-[14px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}

                    />) : (

                        <button
                            type="submit"
                            className="mt-4 w-full bg-primary rounded text-white text-[12px] py-2 px-6 hover:translate-x-1 ease-in-out duration-700 transition-all focus:outline-none"
                        >
                            Update
                        </button>
                    )}

                </form>

            </div>
        </div>
    )
}

export default AdminUpdateTransactionFeeModal
