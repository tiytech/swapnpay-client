import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ProfileCard } from '../../../../components'
import { IconMessage, IconPhone2, IconProfile1, IconProfile2 } from '../../../../assets'


const Profile = () => {
	const { user } = useSelector(state => state.auth)
	return (
		<div className='flex flex-col space-y-5 w-full'>
			<ProfileCard
				icon={IconProfile1}
				title={user?.crendentials?.first_name}
				label={'First name'}
			/>
			<ProfileCard
				icon={IconProfile1}
				title={user?.crendentials?.last_name}
				label={'Last name'}
				classes={'mt-1'}
			/>
			<ProfileCard
				icon={IconProfile2}
				title={user?.crendentials?.username}
				label={'Username'}
				classes={'mt-1'}
			/>
			<ProfileCard
				icon={IconPhone2}
				title={user?.crendentials?.profile?.phone_number}
				label={'Phone number'}
			/>
			<ProfileCard
				icon={IconMessage}
				label={'Email address'}
				title={user?.crendentials?.email}
			/>
		</div>
	)
}

export default Profile