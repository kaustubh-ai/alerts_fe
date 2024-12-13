import {modifyAlert as modifyAlertAPI} from '@/services/apiAlerts.js'
import {useMutation, useQueryClient} from '@tanstack/react-query'

export const useModifyAlert = () => {
	const queryClient = useQueryClient()
	
	const {isPending, mutate: modifyAlert} = useMutation({
		mutationFn: modifyAlertAPI,
		onSuccess: () => queryClient.invalidateQueries({queryKey: ['alerts']})
	})
	
	return {isPending, modifyAlert}
}
