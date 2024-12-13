// noinspection EqualityComparisonWithCoercionJS

import {useModifyAlert} from '@/features/home/hooks/useModifyAlert.js'
import {usePlaceAlert} from '@/features/home/hooks/usePlaceAlert.js'
import {useAlertModalData, useModalStoreActions} from '@/store/useModalStore.js'
import {useEffect, useState} from 'react'

export const AlertModal = () => {
	const alertModalData = useAlertModalData()
	let {token, condition, price, alertID} = alertModalData
	const [alertData, setAlertData] = useState({token, condition, price})
	const [isAlertCreated, setIsAlertCreated] = useState(false)
	
	const {setAlertModalData} = useModalStoreActions()
	const {isPending: isPendingPlace, placeAlert} = usePlaceAlert()
	const {isPending: isPendingModify, modifyAlert} = useModifyAlert()
	
	useEffect(() => {
		if (!isPendingPlace && !isPendingModify && isAlertCreated) {
			handleCloseModal()
			setIsAlertCreated(false)
		}
	}, [isPendingPlace, isPendingModify, isAlertCreated])
	
	function handleKeyDown(e) {
		if (e.repeat) return
		if (e.key == 'Escape') handleCloseModal()
		if (e.key == 'Enter') handleCreateAlert()
	}
	
	function handleCloseModal() {
		setAlertModalData({})
		document.getElementById('alert-modal').close()
	}
	
	function handleCreateAlert() {
		price == '' ? placeAlert(alertData) : modifyAlert({alertID, ...alertData})
		setIsAlertCreated(true)
	}
	
	function handleInputChange(e) {
		const {name, value} = e.target
		
		if (name == 'price') {
			if (value > 10e10) return
			if (value < 0) setAlertData(prev => ({...prev, [name]: ''}))
		}
		
		setAlertData(prev => ({...prev, [name]: value}))
	}
	
	function handleConditionSwitch(condition) {
		setAlertData(prev => ({...prev, condition}))
	}
	
	function conditionStyle(type) {
		return alertData.condition == type ? 'bg-watchlist_hover' : 'text-golden_grey'
	}
	
	function actionStyle(action) {
		if (action == 'Create') return 'bg-huskey_blue-100 hover:bg-huskey_blue-100/85'
		else if (action == 'Cancel') return 'ring-inset ring-white/20 ring-[1.5px] bg-golden_grey-800 hover:bg-golden_grey-800/90 hover:ring-white/15'
	}
	
	console.log(isPendingPlace, 'isPendingPlace')
	console.log(isPendingModify, 'isPendingModify')
	
	return (
		<dialog className='pointer-events-none open:pointer-events-auto open:visible invisible fixed flex h-full w-full
											 items-center justify-center bg-transparent backdrop:bg-black/80 opacity-0 open:opacity-100
											 transition duration-200 sy-modal backdrop:animate-modal-anim focus:outline-none'
		        onKeyDown={handleKeyDown}
		        id='alert-modal'>
			<div className='select-none gradient-border backdrop-blur-[2px]'>
				<div className='flex w-72 flex-col items-center rounded-lg text-white bg-order_modal font-open_sans_400'>
					<p className='mt-10 text-2xl'>{token}</p>
					
					{/*Condition Switcher*/}
					<div className='mt-5 grid grid-cols-2 gap-x-2 rounded-md p-1 text-base bg-gintu_grey-400'>
						<div className={`flex items-center justify-center cursor-pointer rounded px-3 py-0.5 ${conditionStyle('above')}`}
						     onClick={() => handleConditionSwitch('above')}>
							Above
						</div>
						
						<div className={`flex items-center justify-center cursor-pointer rounded px-3 py-0.5 ${conditionStyle('below')}`}
						     onClick={() => handleConditionSwitch('below')}>
							Below
						</div>
					</div>
					
					<div className='mt-4'>
						<input className='w-56 rounded-lg py-3 pl-4 text-base text-white border-golden_grey-400 border-1.5 bg-gintu_grey-100 placeholder:text-golden_grey-100 focus:border-white focus:outline-none'
						       autoFocus placeholder='Price' type='number' min='0' name='price'
						       value={alertData.price} onChange={handleInputChange}
						       step={0.0005}/>
					</div>
					
					<div className='mt-6 mb-6 flex grid-cols-2 items-center gap-x-4 text-center'>
						<button className={`w-28 cursor-pointer rounded-lg text-white py-2.5 ${actionStyle('Cancel')}`}
						        onClick={handleCloseModal}>
							Cancel
						</button>
						
						<button className={`w-28 cursor-pointer rounded-lg text-white py-2.5 flex items-center justify-center ${actionStyle('Create')}`}
						        onClick={handleCreateAlert}>
							{(!isPendingPlace && !isPendingModify) ?
								price == '' ? 'Create' : 'Modify'
								:
								<div className='animate-spin rounded-full border-t-white border-[2.5px] border-huskey_blue-200/85 size-6'/>
							}
						</button>
					</div>
				</div>
			</div>
		</dialog>
	)
}
