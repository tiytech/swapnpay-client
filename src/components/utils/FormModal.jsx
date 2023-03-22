import React, { Fragment } from 'react'

import EventSuccessModal from '../modals/EventSuccessModal'


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
        </Fragment>
    )
}

export default FormModal