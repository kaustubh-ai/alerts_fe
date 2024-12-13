// noinspection EqualityComparisonWithCoercionJS

import axios from 'axios'

export const client = axios.create({
	baseURL: 'https://alerts2.onrender.com/api/v1',
	withCredentials: true,
	timeout: 25000
})

client.interceptors.response.use(
	response => response,
	error => {
		if (error.response && [401, 403].includes(error.response.status)) window.location.assign('https://crypalt.netlify.app/signin')

		return Promise.reject(error)
	}
)
