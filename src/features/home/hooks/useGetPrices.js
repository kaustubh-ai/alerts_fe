// noinspection EqualityComparisonWithCoercionJS

import {getPrices as getPricesAPI} from '@/services/apiPrices.js'
import {useQuery} from '@tanstack/react-query'

export const useGetPrices = () => {
	const {isLoading, data: prices} = useQuery({
		queryKey: ['prices'],
		queryFn: () => getPricesAPI(),
		staleTime: 50 * 1000,
		select: data => data.quotes,
		refetchInterval: 60 * 1000
	})
	
	return {isLoading, prices}
}
