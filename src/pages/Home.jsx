// noinspection EqualityComparisonWithCoercionJS

import {PricesTable} from '@/features/home/prices/PricesTable.jsx'
import {Modals} from '@/pages/Modals.jsx'

export const Home = () => {
	return (
		<div className='mx-auto mb-10 max-w-5xl'>
			<Modals/>
			<PricesTable/>
		</div>
	)
}
