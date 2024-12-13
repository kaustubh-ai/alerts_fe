import {signUp as signUpAPI} from '@/services/apiAuth.js'
import {useMutation} from '@tanstack/react-query'

export const useSignUp = () => {
	const {data, isError, isPending, mutate: signUp} = useMutation({
		mutationFn: signUpAPI
	})
	
	return {isError, isPending, signUp, data}
}
