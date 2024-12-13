import {client} from '@/services/axiosClient.js'

export async function getPrices() {
	let res = await client.get('/quotes', {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${localStorage.getItem('jwt')}`
		}
	})
	
	return await res.data
}
