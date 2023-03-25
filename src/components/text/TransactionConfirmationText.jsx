import React from 'react'

import { IconInfo } from '../../assets'
import IconImage from '../images/IconImage'


const TransactionConfirmationText = ({ type = "confirm" }) => {
    return (
        <div className="flex items-center w-full space-x-4 px-2 py-1 mb-2 bg-gray-200 rounded-lg">
            <IconImage
                icon={IconInfo}
            />
            {type === 'confirm' && (
                <div className="flex flex-col">
                    <p className="text-[11px]">Double check that this is the user you intend to send to,</p>
                    <p className="text-[11px] font-bold">Transfers are not reversible.</p>
                </div>
            )}
            {type === 'debit' && (
                <div className="flex flex-col">
                    <p className="text-[11px]">You will need at least #500.00 to create a virtual card.</p>
                </div>
            )}
        </div>
    )
}

export default TransactionConfirmationText