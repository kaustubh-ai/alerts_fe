// noinspection EqualityComparisonWithCoercionJS

import {useGetAlerts} from '@/features/home/hooks/useGetAlerts.js'
import {useGetPrices} from '@/features/home/hooks/useGetPrices.js'
import {Price} from '@/features/home/prices/Price.jsx'
import {PricesHeader} from '@/features/home/prices/PricesHeader.jsx'

export const PricesTable = () => {
	const {isLoading: isLoadingPrices, prices} = useGetPrices()
	const {isLoading: isLoadingAlerts, alerts} = useGetAlerts()
	
	if (isLoadingPrices || isLoadingAlerts || prices == undefined)
		return (
			<>
				<div className='mt-10 text-xl text-white'>Cryptos (0)</div>
				
				<div className='mt-4 rounded'>
					<PricesHeader/>
					
					<div className='flex items-center justify-center rounded-b text-center text-white/35 bg-gintu_grey-900 font-open_sans_400 min-h-[15vh]'>
						<div className='animate-spin rounded-full border-[2.5px] border-[#72CE9D] border-t-white size-6'/>
					</div>
				</div>
			</>
		)
	
	function getAlert(data) {
		const filtered = alerts.filter(alert => alert.token == data[0])
		
		return filtered.length > 0 ? filtered[0] : {condition: 'above', price: ''}
	}
	
	return (
		<>
			<div className='mt-10 text-xl text-white'>
				{`Cryptos (${Object.keys(prices).length})`}
			</div>
			
			<div className='mt-4 rounded'>
				<PricesHeader/>
				
				{Object.entries(prices).map((data, idx) => <Price key={idx} data={data} alert={getAlert(data)}/>)}
			</div>
		</>
	)
}
