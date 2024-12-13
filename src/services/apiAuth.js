import {client} from '@/services/axiosClient.js'

export async function signIn({email, password}) {
	const payload = {email, password}
	const res = await client.post('/signin', payload)
	
	return res.data
}

export async function signUp({email, password}) {
	const payload = {email, password}
	const res = await client.post('/signup', payload)
	
	return res.data
}
