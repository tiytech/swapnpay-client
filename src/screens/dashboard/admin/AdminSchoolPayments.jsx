import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AdminSchoolPaymentsTable } from '../../../components'
import { getSchoolFeesPaymentAction, updateSchoolFeesStatusAction } from '../../../services/actions/admin.actions'


const AdminSchoolPayments = () => {
    const dispatch = useDispatch()
    const { school_fees } = useSelector(state => state.admin)
    useEffect(() => {

        dispatch(getSchoolFeesPaymentAction())


    }, [])
    return (
        <div className='pl-4 pr-4 pb-10 md:px-8 mt-20 flex flex-wrap justify-between items-start w-full'>
            <AdminSchoolPaymentsTable
                data={school_fees}
            />
        </div>
    )
}

export default AdminSchoolPayments