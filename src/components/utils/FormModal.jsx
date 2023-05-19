import React, { Fragment } from 'react'

import EventSuccessModal from '../modals/EventSuccessModal'
import AdminUpdateTransactionFeeModal from '../modals/AdminUpdateTransactionFeeModal'
import AdminUpdateReferralFeeModal from '../modals/AdminUpdateReferralFeeModal'
import AdminManageUserModal from '../modals/AdminManageUserModal'


const FormModal = ({ type }) => {
    return (
        <Fragment>
            {type === 'user__password__reset__success__modal' && (
                <EventSuccessModal
                    to={'/login'}
                    title={'Password reset successfully'}
                />
            )}
            {type === 'user__signup__success__modal' && (
                <EventSuccessModal
                    to={'/login'}
                    title={'Account created successfully'}
                />
            )}



            {type === 'admin__update__transaction__fee__modal' && (
                <AdminUpdateTransactionFeeModal />
            )}

            {type === 'admin__update__referral__fee__modal' && (
                <AdminUpdateReferralFeeModal />
            )}

            {type === 'admin__manage__user__modal' && (
                <AdminManageUserModal />
            )}
        </Fragment>
    )
}

export default FormModal