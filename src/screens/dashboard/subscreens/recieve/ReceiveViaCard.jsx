import React, { useState, useEffect } from 'react'
import { BsArrowLeft } from 'react-icons/bs'

import { HeaderText, IconButton, LoadingButtonOne } from '../../../../components'
import { useSelector, useDispatch } from 'react-redux'
import { FormTextInput } from '../../../../components'
import { fundAccountWithCard } from '../../../../services/actions/user.actions'

const ReceiveViaCard = ({ updateConfig }) => {
    const { user } = useSelector(state => state.auth)
    const { customLoadingState } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        setFormData({ [e.target.name]: e.target.value })
    }
    const submitHandler = () => {

        dispatch(fundAccountWithCard({ formData }))
    }


    useEffect(() => {
        setFormData({
            ...formData, email: user?.credentials?.email,
            name: `${user?.credentials?.first_name} ${user?.credentials?.last_name}`,
            phonenumber: user?.credentials?.profile?.phone_number
        }
        )
    }, [formData.amount])





    return (
        <div className="w-full md:w-[40%] h-full bg-gray-100 px-6 lg:px-20 py-20 flex flex-col space-y-5">
            <BsArrowLeft
                size={20}
                className='cursor-pointer'
                onClick={() => updateConfig({ showDefault: true, showReceiveViaCard: false })}
            />

            <div className="space-y-2">
                <HeaderText
                    text={'Fund your account via card'}
                    classes={'font-bold text-[20px] text-black'}
                />
                <p className='text-[14px]'>Enter the amount you will like to fund</p>
            </div>


            <FormTextInput
                name={'amount'}
                handleChange={handleChange}
                placeHolder={'Enter amount (NGN)'}
                classes={'text-[14px] placeholder:text-[14px] rounded-xl mb-5'}
            />
            {customLoadingState == true ? (<LoadingButtonOne

                loadingType={'one'}
                textColor={'text-white'}
                width={'w-full md:w-full'}
                classes={'text-[14px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}

            />) : (<IconButton
                type={'submit'}
                title={'Done'}
                width={'w-full'}
                iconType={'icon-right'}
                textColor={'text-white'}
                classes={'py-4 text-[16px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
                handleClick={() => submitHandler()}
            />)
            }
        </div>
    )
}

export default ReceiveViaCard