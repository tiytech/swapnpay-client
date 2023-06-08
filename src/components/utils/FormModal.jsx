import React, { Fragment } from 'react'

import EventSuccessModal from '../modals/EventSuccessModal'
import AdminUpdateTransactionFeeModal from '../modals/AdminUpdateTransactionFeeModal'
import AdminUpdateReferralFeeModal from '../modals/AdminUpdateReferralFeeModal'
import AdminManageUserModal from '../modals/AdminManageUserModal'
import AdminManageSchoolFeesPaymentModal from '../modals/AdminManageSchoolFeesPaymentModal'
import AdminAddBlogItemModal from '../modals/AdminAddBlogItemModal'
import AdminUpdateBlogItemModal from '../modals/AdminUpdateBlogItem'
import AdminDeleteBlogItemModal from '../modals/AdminDeleteBlogItemModal'


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

            {type === 'admin__manage_admission_letter' && (
                <AdminManageSchoolFeesPaymentModal />
            )}

            {type === 'admin__manage_sponsor_id' && (
                <AdminManageSchoolFeesPaymentModal />
            )}
            
            {type === 'admin__add__blog__modal' && (
                <AdminAddBlogItemModal />
            )}
            
            {type === 'admin__update__blog__modal' && (
                <AdminUpdateBlogItemModal />
            )}
            
            {type === 'admin__delete__blog__modal' && (
                <AdminDeleteBlogItemModal />
            )}
        </Fragment>
    )
}

export default FormModal