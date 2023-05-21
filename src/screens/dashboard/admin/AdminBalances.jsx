import React, { useEffect } from 'react'
import { BalanceCard } from '../../../components'
import { useDispatch, useSelector } from 'react-redux'
import { getFincraBalanceAction, getSudoBalanceAction } from '../../../services/actions/admin.actions'

const AdminBalances = () => {
    const dispatch = useDispatch()
    const { sudo_balance, fincra_balance } = useSelector(state => state.admin)
    useEffect(() => {
        dispatch(getSudoBalanceAction())
        dispatch(getFincraBalanceAction())

    }, [])

    return (
        <div className='pl-4 pr-4 pb-10 md:px-8 mt-20 flex flex-wrap justify-between items-start w-full'>
            <div className="w-full flex flex-wrap justify-between items-center gap-5">
                {/* {['Fincra', 'Flutter Wave', 'Sudo'].map((item, index) => (
                    <BalanceCard
                        key={index}
                        title={item}

                    />
                ))} */}
                <div className='w-[320px] h-[200px] rounded-lg bg-white px-3 py-4 shadow-lg shadow-slate-300'>
                    <p className='text-blue-400 font-semibold text-[25px]'>Fincra Balance</p>
                    <p className='text-black font-semibold text-[13px] mt-2'>Available naira balance:  <span>&#8358;</span> {fincra_balance == null ? 0 : (fincra_balance[0]?.availableBalance).toLocaleString("en-US")}</p>
                    <p className='text-black font-semibold text-[13px]'>Ledger naira balance:  <span>&#8358;</span> {fincra_balance == null ? 0 : (fincra_balance[0]?.ledgerBalance).toLocaleString("en-US")}</p>
            <hr className='m-2'/>
                    <p className='text-black font-semibold text-[13px]'>Available dollar balance:  $ {fincra_balance == null ? 0 : (fincra_balance[1]?.availableBalance).toLocaleString("en-US")}</p>
                    <p className='text-black font-semibold text-[13px]'>Ledger dollar balance:  $ {fincra_balance == null ? 0 :(fincra_balance[1]?.ledgerBalance).toLocaleString("en-US")}</p>

                </div>
                <div className='w-[320px] h-[200px] rounded-lg bg-white px-3 py-availableBalance4 shadow-lg shadow-slate-300'>
                    <p className='text-yellow-400 font-semibold text-[25px]'>Sudo Balance</p>
                    <p className='text-black font-semibold text-[13px] mt-2'>Available naira balance:  <span>&#8358;</span> {sudo_balance == null ? 0 :Math.floor((sudo_balance?.availableBalance * 100)/100).toLocaleString("en-US")}</p>
                    <p className='text-black font-semibold text-[13px]'>Ledger naira balance:  <span>&#8358;</span> { sudo_balance == null ? 0 :Math.floor((sudo_balance?.currentBalance * 100)/100).toLocaleString("en-US")}</p>
                 

                </div>
                <div className='w-[320px] h-[200px] rounded-lg bg-white px-3 py-4 shadow-lg shadow-slate-300'> 
                    <p className='text-red-400 font-semibold text-[20px]'>Flutterwave Balance</p>
                    <p className='text-black font-semibold text-[16px] mt-2'>Naira balance: <span>&#8358;</span> {fincra_balance == null ? 0 : (fincra_balance[0]?.availableBalance).toLocaleString("en-US")}</p>
                    

                </div>
            </div>
        </div>
    )
}

export default AdminBalances