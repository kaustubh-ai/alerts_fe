import {placeAlert as placeAlertAPI} from '@/services/apiAlerts.js'
import {useMutation, useQueryClient} from '@tanstack/react-query'

export const usePlaceAlert = () => {
	const queryClient = useQueryClient()
	
	const {isPending, mutate: placeAlert} = useMutation({
		mutationFn: placeAlertAPI,
		onSuccess: () => queryClient.invalidateQueries({queryKey: ['alerts']})
	})
	
	return {isPending, placeAlert}
}
