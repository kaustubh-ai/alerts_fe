// noinspection EqualityComparisonWithCoercionJS

import {getAlerts as getAlertsAPI} from '@/services/apiAlerts.js'
import {useQuery} from '@tanstack/react-query'

export const useGetAlerts = () => {
	const {isLoading, data: alerts} = useQuery({
		queryKey: ['alerts'],
		queryFn: () => getAlertsAPI(),
	})
	
	return {isLoading, alerts}
}
