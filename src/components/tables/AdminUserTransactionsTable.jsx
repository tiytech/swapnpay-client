/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Fragment } from 'react'
import { toast } from 'react-toastify'
import { GoPencil } from 'react-icons/go'
import { IoMdTrash } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'


import { useGlobalContext } from '../../context'
import { adminResetStateProperty, fetchUsersActions, getFailedTransactionAction, getUsersTransactionsAction, patchFailedTransactionAction, patchUserAction } from '../../services/actions/admin.actions'


const AdminUserTransactionsTable = ({ showUsersTransactions, setShowUsersTransaction, userPkid }) => {
  const dispatch = useDispatch()

  const { modals, updateModals } = useGlobalContext()
  const { adminRequestLoading, schoolFees_Details, user_transactions } = useSelector(state => state.admin)

  useEffect(() => {
    const formData = { pkid: userPkid?.pkid }
    dispatch(getUsersTransactionsAction({ formData }))

  }, [])

  return (
    <div className="flex justify-between items-center w-full mt-5 overflow-x-auto scrollbar-3">
      <div className="flex flex-col w-full">
        <div className="space-y-1 w-full">
          <div className='flex space-x-3'>
            <button
              onClick={() => {
                setShowUsersTransaction(false)

              }}

              className='w-[100px] text-[10px] bg-primary text-white px-2 py-2 rounded-sm '>
              Back
            </button>
            <h4>{userPkid?.fullname} Transactions</h4>
          </div>

          <Fragment>
            <table className="w-full cursor-default">
              <thead className="border bg-white rounded-md">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 pl-4 py-3 text-left"
                  >

                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 py-3 text-left"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 py-3 text-left"
                  >
                    Transaction type
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 py-3 text-left"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 py-3 text-left"
                  >
                    Receiver
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 py-3 text-left"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 py-3 text-left"
                  >
                    Reference
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 py-3 text-left"
                  >
                    Fee charged
                  </th>
                </tr>
              </thead>
              <tbody className='border-b border-l border-r bg-white w-full'>
                {user_transactions?.map((item, index) => (
                  <tr key={index}>
                    <td className="text-[10px] text-gray-900 font-semibold pl-4 py-2 whitespace-nowrap">
                      {index + 1}
                    </td>
                    <td className="text-sm text-gray-900 font-light py-2 whitespace-nowrap">
                      {item?.description}
                    </td>
                    <td className="text-sm text-gray-900 font-light py-2 whitespace-nowrap">
                      {item?.transaction_type}
                    </td>
                    <td className="text-sm text-gray-900 font-light py-2 whitespace-nowrap">
                      {item?.amount}
                    </td>
                    <td className="text-sm text-gray-900 font-light py-2 whitespace-nowrap">
                      {item?.receiver}
                    </td>
                    <td className="text-sm text-gray-900 font-light py-2 whitespace-nowrap">
                      {item?.created_at}
                    </td>
                    <td className="text-sm text-gray-900 font-light py-2 whitespace-nowrap">
                      {item?.reference}
                    </td>
                    <td className="flex items-center space-x-5 text-sm py-2 text-gray-900 font-light whitespace-nowrap">
                      {item?.fee == null ? 0 : item?.fee}


                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Fragment>
        </div>
      </div>
    </div >
  )
}

export default AdminUserTransactionsTable