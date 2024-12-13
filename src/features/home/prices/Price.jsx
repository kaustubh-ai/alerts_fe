/* eslint-disable react/prop-types */
// noinspection EqualityComparisonWithCoercionJS

import {useModalStoreActions} from '@/store/useModalStore.js'

export const Price = ({data, alert}) => {
	console.log(alert)
	const [token, price] = data
	let {price: alertPrice, condition, alert_id: alertID} = alert
	const {setAlertModalData} = useModalStoreActions()
	
	function handleAlertClick() {
		setAlertModalData({token: token, condition: condition, price: alertPrice, alertID: alertID})
	}
	
	return (
		<div className='relative grid items-center px-5 py-3 text-white text-small group gap-x-prices grid-cols-prices bg-gintu_grey-900 font-open_sans_400 last:rounded-b hover:bg-gintu_grey-900/50'>
			<span className='justify-self-start'>{token}</span>
			<span className='justify-self-start'>{price}</span>
			
			<div className='cursor-pointer justify-self-start rounded px-2 py-1 bg-poodle_green-800 text-poodle_green-100'
			     onClick={handleAlertClick}>
				{alert.price == '' ? 'Set Alert' : 'View Alert'}
			</div>
		</div>
	)
}
