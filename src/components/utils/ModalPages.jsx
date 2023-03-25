import React, { Fragment } from 'react'

import { useGlobalContext } from '../../context'
import Payments from '../../screens/dashboard/subscreens/pay/Payments'
import Receive from '../../screens/dashboard/subscreens/recieve/Receive'
import BuyData from '../../screens/dashboard/subscreens/buy_airtime_data/BuyData'
import BuyAirtime from '../../screens/dashboard/subscreens/buy_airtime_data/BuyAirtime'
import TVSubscription from '../../screens/dashboard/subscreens/buy_airtime_data/TVSubscription'


const ModalPages = () => {
    const { modalPages } = useGlobalContext()

    return (
        <Fragment>
            {modalPages.showReciveScreen && (
                <Receive />
            )}

            
            {modalPages.showPaymentScreen && (
                <Payments />
            )}


            {modalPages.showBuyDataScreen && (
                <BuyData />
            )}


            {modalPages.showBuyAirtimeScreen && (
                <BuyAirtime />
            )}


            {modalPages.showCableSubscriptionScreen && (
                <TVSubscription />
            )}
        </Fragment>
    )
}

export default ModalPages