import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { BsArrowLeft } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { FormTextInput, HeaderText, IconButton, LoadingButtonOne } from '../../components'
import { swapCurrencyAction } from '../../services/actions/user.actions'


const ConfirmTransactions = ({ formData, updateFormData }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [Form, setForm] = useState({})

    const { user, userRequestStatus } = useSelector(state => state.auth)

    const { transactionsFee, nairaWallet, dollarWallet, conversionRate, customLoadingState, generatedQuote } = useSelector(state => state.user)

    const handleSubmit = (e) => {
        e.preventDefault()


        if (user?.credentials?.user_transaction_pin !== formData.transaction_pin) return toast.error('Invalid transaction pin')


        // dispatch(userTransferToSwapnPayUser({ formData, toast, updateConfig }))
    }
    const handleChange = (e) => {

        updateFormData({ ...formData, [e.target.name]: (e.target.value).toString() })


    }

    useEffect(() => {
        updateFormData({ ...formData, sourceCurrency: formData?.source, qouteReference: generatedQuote?.reference, amountToCharge: generatedQuote?.amountToCharge })

        setForm({
            amount: formData?.amountToReceive,
            fee: formData?.fee,
            quoteReference: generatedQuote?.reference,
            amountToCharge: generatedQuote?.amountToCharge,
            sourceCurrency: generatedQuote?.sourceCurrency
        })
    }, [])


    return (
        <div className="w-full h-full bg-gray-100 px-20 py-20 flex flex-col space-y-5">
            <BsArrowLeft
                size={20}
                className='cursor-pointer'
                onClick={() => updateConfig({ showDefault: false, showSendViaUsername: true, showConfirmTransferToSwapnPayUser: false })}
            />

            <div className="space-y-2">
                <HeaderText
                    text={'Confirm Transaction'}
                    classes={'font-bold text-[20px] text-black'}
                />
                <p className='text-[14px]'>Enter your transaction pin to confirm this transaction.</p>
            </div>

            <div className="flex flex-col w-full space-y-5">
                <form onSubmit={handleSubmit}>
                    <FormTextInput
                        padding={'py-3 px-5'}
                        name={'transaction_pin'}
                        handleChange={handleChange}
                        placeHolder={'Enter transaction pin'}
                        classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-2'}
                    />

                    {customLoadingState == false ? (
                        <IconButton
                            type={'submit'}
                            title={'Confirms'}
                            width={'w-full'}
                            iconType={'icon-right'}
                            textColor={'text-white'}
                            classes={'py-4 text-[16px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
                            handleClick={async () => {

                                if (user?.credentials?.user_transaction_pin !== formData.transaction_pin) return toast.error('Invalid transaction pin')
                                const req = await dispatch(swapCurrencyAction({ formData: Form }))
                                if (req.error == undefined) {
                                    toast.success('Swap successful')
                                    await navigate('/dashboard', { replace: true })
                                } else {
                                    toast.warn('Swap not successful')
                                }




                            }}
                        />
                    ) : (
                        <LoadingButtonOne
                            loadingType={'one'}
                            textColor={'text-white'}
                            width={'w-full md:w-full'}
                            classes={'text-[14px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
                        />
                    )}
                </form>
            </div>
        </div>
    )
}

export default ConfirmTransactions