// noinspection EqualityComparisonWithCoercionJS

import {AlertModal} from '@/features/home/alerts/AlertModal.jsx'
import {useAlertModalData} from '@/store/useModalStore.js'
import {useEffect} from 'react'

export const Modals = () => {
	const alertModalData = useAlertModalData()
	const isAlertModalData = Object.keys(alertModalData).length
	
	useEffect(() => {
		if (isAlertModalData > 0) document.getElementById('alert-modal')?.showModal()
	}, [isAlertModalData])
	
	return (
		<>
			{isAlertModalData > 0 && <AlertModal/>}
		</>
	)
}
