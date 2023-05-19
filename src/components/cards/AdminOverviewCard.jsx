import React, { Fragment } from 'react'

import HeaderText from '../text/HeaderText'


const AdminOverviewCard = ({ item }) => {
    const title = item === 1 ? "Today's Transactions" : item === 2 ? 'All Transactions' : item === 3 ? 'Total Customers' : 'Total Cards'

    return (
        <div className='w-full md:w-[250px] lg:w-[250px] bg-white shadow-md flex flex-col px-4 py-4 rounded mt-5 lg:mt-0'>
            <HeaderText
                text={title}
                classes={'text-[14px]'}
                color={'text-slate-500 font-semibold'}
            />

            <div className="mt-5 flex items-center justify-between">
                <Fragment>
                    {item === 1 && (
                        <HeaderText
                            text={'240'}
                            // family={'font-poppins'}
                            classes={'text-[14px]'}
                            color={'text-black font-bold'}
                        />
                    )}
                    {item === 1 && (
                        <HeaderText
                            text={'+24%'}
                            classes={'text-[12px]'}
                            color={'text-green-500'}
                        />
                    )}
                </Fragment>

                <Fragment>
                    {item === 2 && (
                        <HeaderText
                            text={'12,240'}
                            // family={'font-poppins'}
                            classes={'text-[14px]'}
                            color={'text-black font-bold'}
                        />
                    )}
                    {item === 2 && (
                        <HeaderText
                            text={'+4%'}
                            classes={'text-[12px]'}
                            color={'text-red-500'}
                        />
                    )}
                </Fragment>

                <Fragment>
                    {item === 3 && (
                        <HeaderText
                            text={'833'}
                            // family={'font-poppins'}
                            classes={'text-[14px]'}
                            color={'text-black font-bold'}
                        />
                    )}
                    {item === 3 && (
                        <HeaderText
                            text={'+13%'}
                            classes={'text-[12px]'}
                            color={'text-green-500'}
                        />
                    )}
                </Fragment>

                <Fragment>
                    {item === 4 && (
                        <HeaderText
                            text={'520'}
                            // family={'font-poppins'}
                            classes={'text-[14px]'}
                            color={'text-black font-bold'}
                        />
                    )}
                    {item === 4 && (
                        <HeaderText
                            text={'+24%'}
                            classes={'text-[12px]'}
                            color={'text-green-400'}
                        />
                    )}
                </Fragment>
            </div>
        </div>
    )
}

export default AdminOverviewCard