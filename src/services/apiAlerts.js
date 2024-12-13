import {client} from '@/services/axiosClient.js'

export async function placeAlert(payload) {
	let res = await client.post('/alerts', payload, {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${localStorage.getItem('jwt')}`
		}
	})
	
	return await res.data
}

export async function modifyAlert(payload) {
	const alertID = payload.alertID
	delete payload.alertID
	let res = await client.put(`/alerts/${alertID}`, payload, {
		headers: {
			'Content-Type': 'application/json',
				'Authorization': `Bearer ${localStorage.getItem('jwt')}`
		}
	})
	
	return await res.data
}

export async function getAlerts() {
	let res = await client.get('/alerts', {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${localStorage.getItem('jwt')}`
		}
	})
	
	return await res.data.data
}
