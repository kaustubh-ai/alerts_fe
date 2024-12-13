import {signIn as signInAPI} from '@/services/apiAuth.js'
import {useMutation} from '@tanstack/react-query'

export const useSignIn = () => {
	const {data, isError, isPending, mutate: signIn} = useMutation({
		mutationFn: signInAPI
	})
	
	return {isError, isPending, signIn, data}
}
