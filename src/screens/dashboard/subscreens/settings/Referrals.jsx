import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { FiCopy } from 'react-icons/fi'
import { useSelector, useDispatch } from 'react-redux'
import { appReferrals } from '../../../../data'
import { HeaderText } from '../../../../components'
import { userClaimRefferals, userFetchReferrals } from '../../../../services/actions/user.actions'


const Referrals = () => {
	const { referrals, customLoadingState } = useSelector(state => state.user)
	const { user } = useSelector(state => state.auth)
	const [formData, setFormData] = useState({})
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(userFetchReferrals())
	}, [])



	return (
		<div className='flex flex-col space-y-5 w-full'>
			<p className='text-[14px] text-center mt-10'>Each time a new user signup with your code, you earn.</p>

			<div
				onClick={() => {
					const text = document.getElementById('username').textContent

					navigator.clipboard.writeText(text)
				}}
				className='rounded-md cursor-pointer bg-gray-200 w-[80%] flex justify-between items-center p-2 mx-auto'
			>
				<p className="text-[12px]" id='accountNumber'>{user?.credentials?.user_referal_code}</p>
				<FiCopy />
			</div>

			<div className="mx-auto text-center">
				<HeaderText
					text={`NGN  ${referrals[0]?.details?.amount == null ? 0 : referrals[0]?.details?.amount}`}
					classes={'font-bold text-[30px]'}
				/>
				<p className="text-[12px]">Your total earning</p>
				{customLoadingState == false ? (<button
					onClick={async () => {
						await dispatch(userClaimRefferals({ formData, toast }))
					}}
					className='px-2 py-1 bg-slate-700 rounded-sm text-[14px] text-white'
				>Claim reward</button>)
					:
					(<button

						className='px-2 py-1 bg-slate-700 rounded-sm text-[8px] text-white'
					>Claiming reward ....</button>)

				}

			</div>

			<div className="flex flex-col justify-between items-center h-[250px w-full rounded-xl bg-white py-5 px-10">
				{referrals?.map((referral, index) => (
					<div
						key={index}
						className="flex justify-between items-center w-full border-b py-2 cursor-pointer transition-all ease-in-out duration-500 hover:translate-x-1"
					>
						<div className="flex flex-col space-y-1">
							<p className='text-[14px] font-bold'>{referral?.details?.firstname} {referral?.details?.lastname}</p>

						</div>
						<div className="flex flex-col space-y-1">
							<p className='text-[12px] font-semibold'>{referral?.date}</p>

						</div>

						<p className='text-[10px] text-green-500'>Signup complete</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Referrals