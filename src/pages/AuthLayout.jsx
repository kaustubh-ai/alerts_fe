// noinspection EqualityComparisonWithCoercionJS

import {Outlet} from 'react-router-dom'

export const AuthLayout = () => {
	return (
		<div className='h-screen w-screen bg-gintu_grey-900'>
			<div className='flex h-full items-center justify-center'>
				<div className='max-w-md grow'>
					<Outlet/>
				</div>
			</div>
		</div>
	)
}
