import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AdminSchoolPaymentsTable } from '../../../components'
import { fetchInternationalTransactionAction, getSchoolFeesPaymentAction, updateSchoolFeesStatusAction } from '../../../services/actions/admin.actions'
import AdminInternationalPaymentTable from '../../../components/tables/AdminInternationalPaymentTable'


const AdminSchoolPayments = () => {
    const dispatch = useDispatch()
    const { school_fees, international_transactions } = useSelector(state => state.admin)
    const [showSchoolFees, setShowSchoolFees] = useState(0)
    useEffect(() => {

        dispatch(getSchoolFeesPaymentAction())
        dispatch(fetchInternationalTransactionAction())


    }, [])
    return (
        <div className='pl-4 pr-4 pb-10 md:px-8 mt-20 flex flex-wrap justify-between items-start w-full'>
            <div className='flex justify-betweenw w-full space-x-2'>
                <button type="submit" className={`${showSchoolFees == 0 ? 'bg-orange-500' : 'bg-primary'} text-white text-xl px-4 py-2 w-2/4`}
                    onClick={() => setShowSchoolFees(0)}


                >
                    School fees
                </button>
                <button type="submit" className={`${showSchoolFees == 1 ? 'bg-orange-500' : 'bg-primary'} text-white text-xl px-4 py-2 w-2/4`}

                    onClick={() => setShowSchoolFees(1)}

                >
                    International payment
                </button>
            </div>
            {showSchoolFees == 0 && <AdminSchoolPaymentsTable
                data={school_fees}
            />}
            {showSchoolFees == 1 && <AdminInternationalPaymentTable data={international_transactions} />}
        </div>
    )
}

export default AdminSchoolPayments