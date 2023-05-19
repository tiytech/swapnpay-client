import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AdminVerificationTable } from '../../../components'
import { adminFetchUnverifiedUsersAction } from '../../../services/actions/admin.actions'


const AdminVerification = () => {
    const dispatch = useDispatch()

    const { unverifiedUsers } = useSelector(state => state.admin)

    useEffect(() => {
        dispatch(adminFetchUnverifiedUsersAction())
    }, [])

    console.log(unverifiedUsers)

    return (
        <div className='pl-4 pr-4 pb-10 md:px-8 mt-20 flex flex-wrap justify-between items-start w-full'>
            <AdminVerificationTable
                data={unverifiedUsers}
            />
        </div>
    )
}

export default AdminVerification