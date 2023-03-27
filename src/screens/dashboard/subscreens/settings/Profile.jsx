import React from 'react'

import { ProfileCard } from '../../../../components'
import { IconMessage, IconPhone2, IconProfile1, IconProfile2 } from '../../../../assets'


const Profile = () => {
	return (
		<div className='flex flex-col space-y-5 w-full'>
			<ProfileCard
				icon={IconProfile1}
				title={'John'}
				label={'First name'}
				/>
			<ProfileCard
				icon={IconProfile1}
				title={'Mary'}
				label={'Last name'}
				classes={'mt-1'}
				/>
			<ProfileCard
				icon={IconProfile2}
				title={'@john1011'}
				label={'Username'}
				classes={'mt-1'}
			/>
			<ProfileCard
				icon={IconPhone2}
				title={'090302929992'}
				label={'Phone number'}
			/>
			<ProfileCard
				icon={IconMessage}
				label={'Email address'}
				title={'johndoe@gmail.com'}
			/>
		</div>
	)
}

export default Profile