import React, { Fragment } from 'react'

import FormModal from './FormModal'
import { useGlobalContext } from '../../context'


const Modals = () => {
    const { modals } = useGlobalContext()

    return (
        <Fragment>
            {modals.showPasswordResetSuccessModal && (
                <FormModal
                    type="user__password__reset__success__modal"
                />
            )}
            {modals.showSignupSuccessModal && (
                <FormModal
                    type="user__signup__success__modal"
                />
            )}
        </Fragment>
    )
}

export default Modals