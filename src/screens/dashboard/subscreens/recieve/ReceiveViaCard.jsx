import React, { useState, useEffect } from 'react'
import { BsArrowLeft } from 'react-icons/bs'

import { HeaderText, IconButton } from '../../../../components'
import { useSelector, useDispatch } from 'react-redux'
import { FormTextInput } from '../../../../components'
import { fundAccountWithCard } from '../../../../services/actions/user.actions'

const ReceiveViaCard = ({ updateConfig }) => {
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        setFormData({ [e.target.name]: e.target.value })
    }
    const submitHandler = () => {

        console.log(formData);
        dispatch(fundAccountWithCard({formData}))
    }

    
    useEffect(() => {
        setFormData({
            ...formData, email: user?.crendentials?.email,
            name: `${user?.crendentials?.first_name} ${user?.crendentials?.last_name}`,
            phonenumber: user?.data?.profile?.phone_number
        }
        )
    }, [formData.amount])





    return (
        <div className="lg:w-[40%] h-full bg-gray-100 px-5 md:px-20 py-20 flex flex-col space-y-5">
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

            <IconButton
                type={'submit'}
                title={'Done'}
                width={'w-full'}
                iconType={'icon-right'}
                textColor={'text-white'}
                classes={'py-4 text-[16px] rounded-xl bg-gradient-to-r from-primary to-primary-light'}
                handleClick={() => submitHandler()}
            />
        </div>
    )
}

export default ReceiveViaCard